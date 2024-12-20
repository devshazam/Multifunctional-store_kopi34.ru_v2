'use client';

import React, { useEffect }  from 'react';
import CountUp from 'react-countup';
import { Typography, Spin } from 'antd';
import useSwr from 'swr';
import { useCardStore } from "@/stores";

import { getPriceByName } from "@/lib/api/PriceActions";
import * as calculators from '@/y-utilities/calculators';
const { Title } = Typography;
import * as Sentry from "@sentry/nextjs"

export default function BxTitle({ name }: { name: string }) {

  	const { finishPrice, changePrice, cardData, changeDiscount, discount, changeDescription } = useCardStore();

    const { data: costData, isLoading } = useSwr(name, name => getPriceByName(name));

    useEffect(() => {
		if (costData && cardData && costData.data ) {
			
			const totalPrice = calculators[`${name}Calc` as keyof typeof calculators](cardData, JSON.parse(costData.data[0]?.jsonPrice as string));
			
			console.log(costData.data[1]?.jsonPrice, totalPrice)

			const discountSize = JSON.parse(costData.data[1]?.jsonPrice as string).discountAmount.reverse().find((el: number[]) => totalPrice[0] >= el[0])[1]

			changeDiscount(discountSize)

			changePrice(totalPrice[0] * (100 - discountSize) / 100)

			changeDescription(totalPrice[1])
		}
    }, [costData, cardData, changeDiscount, changePrice, changeDescription, name])
  
    if (!costData) {
      return <div className="spin-wrapper"><Spin/></div>;
    }
	if(costData && costData.error){
		Sentry.captureMessage("id=48573" + costData.error);
		return <p style={{ color: 'red' }}>Ошибка загрузки Прайсов</p>;
	}

  return (
	<>
	<Title level={2} style={{ marginBottom: '2px'}}>Цена:
		<span className='old-price'> { Math.round((finishPrice * 100 / (100 - discount)) * 100) / 100 } </span>
			<CountUp duration={1} end={ finishPrice } />
		<span className='text-red-500'> ₽</span>
	</Title>
	<p style={{ fontSize: '12px', marginBottom: '6px'}}>Минимальный заказ от 200 ₽</p>
	</>
  );
}
 