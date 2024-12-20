'use client';
import React , { useEffect } from 'react';

import { Button, Col, Modal, Result, Row, Skeleton, Table, Tag } from 'antd';
import { getTenOrdersForAdmin, doneById, getResponse, transferToClient } from '@/lib/api/OrderActions';
import TransferToClient from './comp/TransferToClient';
import useSWR, { useSWRConfig } from 'swr'
import * as Sentry from "@sentry/nextjs"

const columns = [
  { title: 'Дата/Email:', dataIndex: 'date', key: 'date', },
  { title: 'Описание:', dataIndex: 'desc', key: 'desc', },
  { title: 'Офис:', dataIndex: 'office', key: 'office', },
  { title: 'Файлы:', dataIndex: 'images', key: 'images', },
  { title: 'Цена/Скидка:', dataIndex: 'priceDiscount', key: 'priceDiscount', },
  { title: 'Исполнитель:', dataIndex: 'response', key: 'response', },
  { title: 'Клиент:', dataIndex: 'action', key: 'action', },
];


export default function AdminCartPage({ adminEmail, superAdmin }: {adminEmail: string, superAdmin: boolean}) {
	const [page, setPage] = React.useState(1);

	const { data: orderAdminList , mutate, isLoading, isValidating  } = useSWR(['/api/user/get-orders', page], ([url, page]) => getTenOrdersForAdmin(url, page))
	const { mutate: mutateUser } = useSWRConfig()

	if(!orderAdminList){return (<Skeleton active  paragraph={{ rows: 8 }}/>)}

	if(orderAdminList.error){
		Sentry.captureMessage("id=68702;" + orderAdminList.error);
		return(
			<Result
				status="warning"
				title={orderAdminList.error}
				extra={
				<Button type="primary" key="console" href="/">
					На главную
				</Button>
				}
			/>
		)
	}

  return (

  <>
			{ orderAdminList && orderAdminList.data &&
          		<Table dataSource={orderAdminList.data.totalPosts.map(e => { 
					return {
						key: e.id,
						date:  e.doneStatus ? <span style={{color: "green"}}><b>{new Date(e.createdAt).toLocaleDateString()}</b></span> : <Button color="danger" variant="solid" loading={isValidating} disabled={isValidating} onClick={async () => {
									await doneById(e.id);
									mutate();
									mutateUser(adminEmail);
								}}>Выполнить</Button>
						,
						desc: <b>{e.feature + " / " + e.description}</b>,
						office: <b>{e.office + 1}</b>,

						images: e.images.map((e:any, i: number)=> { return (<a key={i} className='image-span' href={e.url} download><img src={e.url} alt="ZIP" /></a>) }),

						priceDiscount: <b>{`${e.price}р./${e.discount}%`}</b>,
						response: e.responsibleId ? <b>{e.responsibleId}</b> : <a onClick={async () => {
										await getResponse(adminEmail, e.id);
										mutate();
						  }}><b>Принять</b></a>,
						action: e.user.admin ? <TransferToClient onChenge={async (userId: number) => {
										await transferToClient(e.id, userId);
										mutate();
						  }} /> : <b>{e.user.email}</b>
						}
					})
				} loading={isLoading}
					columns={columns} 
					onChange={(pagination: any) => { setPage(pagination.current) }}
					pagination={{ pageSize: 10, total: orderAdminList.data.posts, current: page  }}
				/>
			}

	{ superAdmin && 
		<div>
		<Row>
			<Col span={6}>
		{/* // Одинарные */}
			<ul>
				<li><a href='/admin/banner'>Баннеры</a></li>
				<li><a href='/admin/vizitki'>Визитки</a></li>
				<li><a href='/admin/samokleyki'>Самоклейки</a></li>
				<li><a href='/admin/posterka'>Постерка</a></li>
				<li><a href='/admin/holsty'>Холсты</a></li>
				<li><a href='/admin/flagi'>Флаги</a></li>
				<li><a href='/admin/plastik'>Пластик</a></li>
			</ul>
			</Col>

			<Col span={6}>
		{/* // Тройные*/}
			<ul>
				<li><a href='/admin/kserokopya'>Распечатка</a></li>
				<li><a href='/admin/skanirovanie'>Сканирование</a></li>
				<li><a href='/admin/laminacia'>Ламинация</a></li>
				<li><a href='/admin/broschurovka'>Брошуровка</a></li>
			</ul>
			</Col>
			<Col span={6}>
		{/* // Четвертные*/}
			<ul>
				<li><a href='/admin/pechatnabumage'>Бумага</a></li>
				<li><a href='/admin/photonadoc'>Фото на документы</a></li>
				<li><a href='/admin/cherteji'>Чертежи</a></li>
				<li><a href='/admin/rizograf'>Ризограф</a></li>
			</ul>
			</Col>
			<Col span={6}>
			<ul>
				<li><a href='/admin/shtenderi'>Штендеры</a></li>
				<li><a href='/admin/magnitiki'>Магнитики</a></li>
				<li><a href='/admin/ploterka'>Плотерка</a></li>
			</ul>
			</Col>
			</Row>
		</div>
	}



</>

  );
}
