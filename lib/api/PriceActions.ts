'use server';

import { getOrCreateUser } from './UserActions'
import prisma from './db'


/**************************************
 * Получение прайса по имени + сайтконфиг
***************************************/
export async function getPriceByName( name: string, email?: string) {
	try {
		if(email){
			const user = await getOrCreateUser(email)
			if(!user || !user.super){return { success: false, error: 'user не зарегистрирован или нет соответствующих прав!' };}
		}

		const price = await prisma.price.findUnique({
			where: { name }, })
		const siteConfig = await prisma.price.findUnique({
			where: { name: 'siteConfig' }, })

		return { success: true, data: [ price, siteConfig ] };
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
			return { success: false, error: err.message }; 
		};
	}
}


/**************************************
 * Изменить прайс по его ID
***************************************/
export async function changePriceByName(name: string, price:string) {
	try {
		  const updateOrder = await prisma.price.update({
			where: {
				name
			},
			data: {
				jsonPrice: price
			},
		  })

		return { success: true, data: updateOrder };
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