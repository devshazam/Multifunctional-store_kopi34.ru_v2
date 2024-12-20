"use client";

import React, { useEffect, useMemo, useState } from 'react';

import type { MenuProps } from 'antd';
import { Dropdown, Button, Spin , Space, Badge} from 'antd';
// import { useUserStore } from '@/stores';
import useSwr from 'swr';
import { checkOrderNumberByEmail } from '@/lib/api/OrderActions';
import { useUser } from '@auth0/nextjs-auth0/client';
import * as Sentry from "@sentry/nextjs"


export default function UserButton(){

	const { user, isLoading } = useUser();

	const { data: orderList } = useSwr(user ? `${user.email}` : null, email => checkOrderNumberByEmail(email));

	if(isLoading){
		return (<Spin/>)
	}
	
	if(orderList?.error){
		Sentry.captureMessage("id=3976520" + orderList.error);
		return (
			<span style={{color: 'red'}}>{orderList.error}</span>
		)
	}

	const items: MenuProps['items'] = !user ?
		[ { key: '1', label: ( <a rel="noreferrer" href="/api/auth/login"> Войти </a> ), }, ] 
		:
		[ 
			{ key: '2', label: ( <a rel="noreferrer" href="/api/auth/logout"> Выйти </a> ), },
			{ key: '3', label: ( <a rel="noreferrer" href="/admin">Заказы</a> ), }
		]

  return (
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Badge count={orderList && orderList.data ? orderList.data : 0} offset={[8, 10]}>
            <Button>Админ</Button>
        </Badge>
      </Dropdown>
    </Space>
  );
}
