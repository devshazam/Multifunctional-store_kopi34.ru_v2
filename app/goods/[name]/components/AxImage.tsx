'use client';

import React  from 'react';

import Image from 'next/image';
import { useCardStore } from "@/stores";
import * as configuration from "@/x-config";
import { Skeleton } from 'antd';
import { imgBaget } from "@/z-config/bagets";


export default function AxImage({ name }: { name: string }) {

  	const { cardData } = useCardStore();

	if(configuration[name as keyof typeof configuration]?.image && configuration[name as keyof typeof configuration]?.conditional){
		return (
		<>
			{
				(cardData.type !== undefined && cardData.subtype !== undefined && cardData.color !== undefined)
				?
				<Image src={`/calc/bagets/${
						Object.keys(imgBaget[cardData.type as keyof typeof imgBaget])[cardData.subtype ]
					}/${
						Object.values(imgBaget[cardData.type ])[cardData.subtype ][cardData.color]
					}.jpg`} alt={name} width={500} height={500} />
				:
				<Skeleton />
			}
		</>
		)         

	}

	if(configuration[name as keyof typeof configuration]?.image){
		return (
		<>
			{
				(cardData.aformat !== undefined && cardData.color !== undefined)
				?
				<Image src={`/calc/${name}/${cardData.aformat}-${cardData.color}.webp`} alt={name} width={500} height={500} />
				:
				<Skeleton />
			}
		</>
		)
	}

	return (
		<>
		<Image src={`/calc/${name}.webp`} alt={name} width={500} height={500} />
		</>
	);
}
