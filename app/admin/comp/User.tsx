'use client';
import React , { useEffect, useState } from 'react';

import { Button, Skeleton, Col, Card, Row, Badge} from 'antd';
import { getTenOrdersById, deleteById, getPayUrl } from '@/lib/api/OrderActions';
import useSWR, { useSWRConfig } from 'swr'
import * as configuration from '@/x-config';
import * as Sentry from "@sentry/nextjs"

export default function UserCartPage({id, adminEmail} : {id: number, adminEmail: string}) {

	const [price, setPrice] = useState<number>(0);
	const [orderIdList, setOrderIdList] = useState<number[]>([]);
	const { data: orderList, mutate, isLoading, isValidating  } = useSWR(['/api/user/get-orders', id], ([url, id]) => getTenOrdersById(url, id))
	const { mutate: mutateUser } = useSWRConfig()

	useEffect(() => {
		if(orderList && orderList.data){
			setPrice(orderList.data.reduce((acc, e) => { if(!e.payStatus){ return acc + e.price}else{return acc} }, 0));
			setOrderIdList(orderList.data.map((e) => { if(!e.payStatus){ return e.id }else{ return null} }).filter((e) => e !== null));
		}

	}, [JSON.stringify(orderList)]);

	async function callGetPayUrl() {
		const url = await getPayUrl(price, orderIdList); 
		if(url && url.data){
			window.location.href = url.data.confirmation.confirmation_url;
		}else{
			Sentry.captureMessage("id=18094; Url ссылка не сформированна сервисом ЮКасса");
			alert("Ошибка оплаты!")
		}
	}

  return (

<>
			<div className='mb-5'>
				{
					orderIdList.length > 0 &&
					<Button type="primary" danger onClick={() => { callGetPayUrl(); mutate() }} block disabled={!orderIdList.length || !price} >Оплатить все не оплаченные: {price}</Button>

				}
				</div>

				<Row gutter={[16, 16]} justify={'start'} align={'top'}>
					{ orderList && orderList.data
						?
						orderList.data.map((e) => {

							return(
								<Col xs={24} md={8} key={e.id}>
									<Badge.Ribbon text={e.payStatus ? "Оплачен!" : "Не оплачен!"} color={e.payStatus ? "green" : "pink"}>
									<Card title={configuration[e.category as keyof typeof configuration].rus} style={{ width: '100%' }} bordered={false}>
										<div className='mb-2'>
											<p><b>Дата:</b> {new Date(e.createdAt).toISOString().split("T")[0]}</p>
											<p><b>Цена/Скидка:</b> {e.price}р./{e.discount}%</p>
											<p><b>Готовность:</b> {e.doneStatus ? "Выполнен✅" : "Не выполнен❌"}</p>
										</div>
										{ !e.payStatus && 
											<Button disabled={isValidating} loading={isValidating} color="danger" variant="solid" onClick={async () => {
												await deleteById(e.id);
												mutate();
												mutateUser(adminEmail);
											}} block>Удалить</Button>
										}
									</Card>
									</Badge.Ribbon>
								</Col>
							)
						})
					:
						<Skeleton active  paragraph={{ rows: 8 }}/>

				}
				</Row>

</>

  );
}
