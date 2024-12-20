"use client";
import { useSWRConfig } from "swr"

import React, { useEffect, useState } from 'react';
import { Button, message, } from 'antd';

import { PoweroffOutlined } from '@ant-design/icons';
import { useCardStore } from '@/stores';
import type { UploadFile } from 'antd';
import { putGoodsToCard } from '@/lib/api/OrderActions';
import { useUser } from '@auth0/nextjs-auth0/client';
import confetti from 'canvas-confetti';
import { useRouter } from 'next/navigation'
import * as Sentry from "@sentry/nextjs"
// type NoticeType = 'error' | 'success';
// const COND_MESSAGE: { type: NoticeType; content: string }[] = [
// 	{ type: 'success', content: 'Товар добавлен в корзину' },
//   { type: 'error', content: 'Произошла ошибка при добавлении в корзину' }
// ]

export default function ButtonPart({ fileList, name } : { fileList: UploadFile[] , name: string }) {
    const [loading, setLoading] = useState(false);
    const { user, error, isLoading } = useUser();
    const { cardData, finishPrice, discount, orderDescription} = useCardStore();
	const { mutate } = useSWRConfig()
	const router = useRouter()

    if (isLoading) return  <Button type="primary" icon={<PoweroffOutlined />} loading block/>;
    if (error) return <div>{error.message}</div>;
	
    const handleSubmit = async () => {
      if(!user || !user.sub || !user.email || !user.name){
        message.error('Войдите в аккаунт!');
        return;}
      if(!finishPrice){
        message.error('Не указана цена!');
        return;
      }
      if(finishPrice < 190){
        message.error('Минимальная цена заказа 200 руб.');
        return;
      }
	
      try{
        setLoading(true);
        const formData = new FormData();
        fileList.forEach((file) => {
          formData.append('files', file.originFileObj as File);
        })

		// Юзер
        formData.append('globalId', user?.sub);
        formData.append('userName', user?.name);
        formData.append('email', user?.email);

		// Order
        formData.append('category', name);
        formData.append('office',  `${cardData.office}`);
        formData.append('feature',  orderDescription);
        formData.append('price',  `${finishPrice}`);
        formData.append('discount',  `${discount}`);
        formData.append('description', cardData.descriptionCard);
        
        const res = await putGoodsToCard( formData );

		if(res?.success){
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 }
			});
			mutate(user.email)
		}else{
			Sentry.captureMessage("id=18094;" + res?.error);
			message.error(res?.error);
		}
		router.push('/admin')
      }catch(e: any){
        if(e instanceof Error){
			message.error(e?.message);
			console.log(e.message)}
      }finally{
		setLoading(false);
	  }
    };

  return (
      <>
          {
              user 
            ?
              <Button type="primary" onClick={handleSubmit} block loading={loading} disabled={loading}>
              {/* <Button type="primary"  block loading={loading} disabled={loading}> */}
                В корзину
              </Button>
            :
              <Button type="primary" danger href='/api/auth/login' block>
              {/* <Button type="primary" danger  block> */}
			  Регистрация
              </Button>
          }
      </>

  );
}
