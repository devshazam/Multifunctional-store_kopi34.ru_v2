'use client';

import React, { useEffect } from 'react';

import { Row, Card, Space, Badge } from 'antd';
import { DISCOUNT_COLORS } from '@/z-config/siteConfig';
import GxCongitional from './components/GxCongitional';
import { useCardStore } from "@/stores";

import BxTitle from './components/BxTitle';
// const BxTitle = dynamic(() => import('./components/BxTitle'), {
// 	loading:()=><Spin/>
// 	});
import CxMandatory from './components/CxMandatory';
// const CxMandatory = dynamic(() => import('./components/CxMandatory'), {
// 	loading:()=><Spin/>
// 	});
import DxUnique from './components/DxUnique';
import ExCommon from './components/ExCommon';
import FxUpload from './components/FxUpload';
import DependsOn from './components/conditional/DependsOn';
import useInitialization from '@/lib/hooks/useInitialization';
import * as Sentry from "@sentry/nextjs"


export default function Initiator({ name }: { name: string }) {

	const isLoading = useInitialization({ name });

	const { discount, finishPrice, orderDescription } = useCardStore();

	useEffect(() => {
		if (!isLoading && finishPrice === 0) {
			Sentry.captureMessage("id=48573" + orderDescription);
		}
	}, [finishPrice, orderDescription]);

  return (
	<>
		<Badge.Ribbon text={`Скидка ${discount}% только на сайте!`} color={DISCOUNT_COLORS[discount]}>
		<Card bordered={false}>
			<Space direction="vertical" className='pt-4'>

			{/* Заголовок */}
			<BxTitle name={name} />

			</Space>
				<Row gutter={[8, 8]}>

				{/* Обязательные поля */}
				<CxMandatory name={name} />
				{/* Условные поля */}
				<GxCongitional name={name} />
				<DependsOn name={name} />
				{/* Дополнительные поля */}
				<DxUnique name={name} />
				{/* Общие поля */}
				<ExCommon name={name} />
				{/* Загрузка фото */}
				<FxUpload  name={name} />

				</Row>
		</Card>
		</Badge.Ribbon>
	</>
  );
}

