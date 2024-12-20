'use server';

import prisma from './db'
import {  isAdmin, getOrCreateUser} from './UserActions';
import { v4 as uuidv4 } from 'uuid';
import {
	S3Client,
	PutObjectCommand,
	DeleteObjectCommand 
  } from "@aws-sdk/client-s3";

  const Bucket = process.env.AMPLIFY_BUCKET;
  const s3 = new S3Client({
	region: process.env.AWS_REGION,
	endpoint: "https://s3.timeweb.com",
	apiVersion: "latest",
	credentials: {
	  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
	  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
	},
  });
//   import NodeStl from 'node-stl';


/**************************************
 * Если админ, то:
 * 		Получить количество всех оплаченных, но не выполненных заказов.
 * Если пользователь, то:
 * 		Получить количество своих заказов, не оплаченных и не выполненных.
***************************************/
export async function checkOrderNumberByEmail(email: string) {
	try {
		let data: { userId?: number, doneStatus?: boolean, payStatus?: boolean} = {};
		const user = await getOrCreateUser(email)

		if(!user){return { success: false, error: 'user не зарегистрирован!' };}

		if(user?.admin === false){
			data.userId = user?.id;
			data.doneStatus = false
		}else{
			data.payStatus = true;
			data.doneStatus = false
		}

		const orderList = await prisma.order.count({
			where: data,
		})
		 
		return { success: true , data: orderList };
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
			return { success: false, error: err.message }; 
		};
	}
}


/**************************************
 * Добавление товара в корзину
***************************************/
export async function putGoodsToCard( formData: FormData ) {
	try {
		
		const location: string[] = [];
		const files = formData.getAll("files") as File[];
		const data: { globalId?: string, userName?: string, email: string, feature: string, description?: string, price: string, category?: string, office?: string, discount?: string } = { feature: '', price: '', email: '' };

		for (const keyValue of Array.from(formData.entries())) {
			if (typeof keyValue[1] === 'string') {
				data[keyValue[0] as keyof typeof data] = keyValue[1];
		}}

		const status = await isAdmin(data?.email)
		
		for(let x = 0 ; x < files.length ; x++) {
			if (files[x] instanceof File) {
				const extension = (files[x] as File).type.split('/')[1];
				console.log(extension)
				const Key = `kopi34-new/${uuidv4()}.${extension}`;
				// const Body = (await (files[x] as File).arrayBuffer()) as Buffer;
				const Body = Buffer.from(await (files[x] as File).arrayBuffer());
				const data = await s3.send(new PutObjectCommand({ Bucket, Key, Body }));
				location.push(`https://s3.timeweb.com/${Bucket}/${Key}`);
			}
		}
		
		const { globalId, userName, email, feature, description, price, category, office, discount } = data as Required<typeof data>;

		  const orderValue = {
			description,
			office: Number(office),
			feature,
			category,
			price: Number(price), // Convert price to a number
			discount: Number(discount),
			// images: JSON.stringify(location),
			payStatus: status ? true : false,
			responsibleId: status ? email : null
		  };

		await prisma.order.create({
			data: {
			  ...orderValue,
			  images: {
				create: location.map( e => { return { url: e } } ),
			  },
			  user: {
				connectOrCreate: {
					where: {
						email,
					},
					create: {
						email,
						globalId,
						name: userName,
					},
				  },
				},
			  },
		  })

		  return { success: true };
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
			return { success: false, error: err.message }; 
		};
	}
}




/**************************************
 * Удалить не оплаченный заказ по ID
***************************************/
export async function deleteById(orderId: number) {
	try {

		const orders =  await prisma.order.findUnique({
			where: {
				id: orderId
			},
			include: {
				images: true
			}
		  })

		  let x12 = orders?.images || [];

		for(let x of x12){ 
			let x1 = x.url.split("//")[1].split("/");
			console.log(123, x1)
			let x2 = { Bucket: x1[1] , Key: x1[2] + '/' + x1[3] };
			const result = await s3.send(new DeleteObjectCommand(x2));
			console.log(123, result)
		}

		const deleteImages = prisma.image.deleteMany({
			where: {
			  orderId
			},
		  })
		  
		  const deleteOrder = prisma.order.delete({
			where: {
			  id: orderId
			},
		  })
		  
		  await prisma.$transaction([deleteImages, deleteOrder])

		  return { success: true };
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
			return { success: false, error: err.message }; 
		};
	}
}






/**************************************
 * Админ: Получить 10 заказов с пагинацией , только оплаченные, сортировать по выполнености.
***************************************/
export async function getTenOrdersForAdmin(_:any, skip: number = 0) {
	try {
		const commonObject = { where: { payStatus: true, } };
		const [posts, totalPosts] = await prisma.$transaction([
			prisma.order.count(commonObject),
			prisma.order.findMany({
				...commonObject,
			orderBy: [{ doneStatus: 'asc' }, { createdAt: 'desc'}],
			include: {
				images: true,
				user: true
			},
			  take: 10,
			  skip: (skip - 1) * 10
			}), ])

		return  { success: true, data: { posts, totalPosts } }
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
			return { success: false, error: err.message }; 
		};
	}
}




/**************************************
 * Админ: Завершить заказ
***************************************/
export async function doneById(orderId: number) {
	try {

		  await prisma.order.update({
			where: {
				id: orderId
			},
			data: {
			  doneStatus: true,
			  doneAt: new Date(),
			},
		  })

		return { success: true };
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
			return { success: false, error: err.message }; 
		};
	}
}



/**************************************
 * Админ: Взять ответственность
***************************************/
export async function getResponse(adminEmail: string, orderId: number) {
	try {
		  	await prisma.order.update({
				where: {
					id: orderId
				},
				data: {
					responsibleId: adminEmail,
				},
		  	})
			return { success: true };
		} catch (err: unknown) {
			if(err instanceof Error){
				console.log(err.message)
				return { success: false, error: err.message }; 
			};
		}
}



/**************************************
 * Админ: Передать заказ клиенту по ID
***************************************/
export async function transferToClient(orderId: number, userId: number) {
	try {
		  	await prisma.order.update({
				where: {
					id: orderId
				},
				data: {
					userId
				},
		  	})
			return { success: true };
		} catch (err: unknown) {
			if(err instanceof Error){
				console.log(err.message)
				return { success: false, error: err.message }; 
			};
		}
}



/**************************************
 * Админ: Получить юзера по телефону или email
***************************************/
export async function getUserByPhoneOrEmail(request: string) {
	try {
			let user;
			if(/@/.test(request)){
				user = await prisma.user.findUnique({
					where: {
						email: request
					},
				})
			}else{
				user = await prisma.user.findFirst({
					where: {
						phone: request
					},
				})
			}
			
		return { success: true , data: user };
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
			return { success: false, error: err.message }; 
		};
	}
}


/**************************************
 * Запросить адрес для оплаты Юмани
***************************************/
export async function getPayUrl(value: number, orderList: number[]) {

	// YOOMONEY конфигурация:
		const IdempotenceKey = uuidv4();
		const headers = {
			"Content-Type": "application/json",
			"Idempotence-Key": IdempotenceKey,
			Authorization: "Basic " + btoa( process.env.MARKET_ID + ":" + process.env.SECRET_KEY_UMONEY ),
		};
		const inputBodyP = {
			amount: { value: String(value), currency: "RUB", },
			capture: true,
			// "payment_method_data": { "type": 'bank_card' },
			confirmation: {
				type: "redirect",
				return_url: "https://kopi34.ru/admin",
			},
			description: "Оплата на сайте kopi34.ru",
			// metadata: { order_id: order.id, },
		};
	try{
		const payItemMid = await fetch("https://api.yookassa.ru/v3/payments", {
			method: "POST",
			body: JSON.stringify(inputBodyP),
			headers
		});
		const payItem = await payItemMid.json();

		orderList.forEach( async (e) => {

			await prisma.order.update({
				where: {
				  id: e,
				},
				data: {
					payId: payItem.id,
				},
			  })
		})

		return { success: true , data: payItem };
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
			return { success: false, error: err.message }; 
		};
	}
}


/**************************************
 * RESTRICTION: 
***************************************/
// THE PUBLIC VERSION HAS RESTRICTION - PARTS OF THE CODE CONTAINING A TRADE SECRET HAVE BEEN REMOVED.