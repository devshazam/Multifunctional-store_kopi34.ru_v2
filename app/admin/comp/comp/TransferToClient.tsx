// 'use client';
import React, { useEffect, useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { getUserByPhoneOrEmail} from '@/lib/api/OrderActions';
import * as Sentry from "@sentry/nextjs"

export default function TransferToClient({ onChenge }: {onChenge: (userId: number) => Promise<void>}) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [phoneOrMail, setPhoneOrMail] = useState<string>('');
	const [userId, setUserId] = useState<number>(0);

	const showModal = () => {
	  setIsModalOpen(true);
	};
  
	const handleOk = () => {
	  setIsModalOpen(false);
	};
  
	const handleCancel = () => {
	  setIsModalOpen(false);
	};

	async function getUser() {
		const res = await getUserByPhoneOrEmail(phoneOrMail)
		if(res && res.data) {
			setUserId(res.data.id);
		}else{
			Sentry.captureMessage("id=57933; Не получилось передать ID клиента");
			alert("Не получилось передать ID клиента")
		}
	}

	async function  callTransfer() {
		await onChenge(userId);
		setIsModalOpen(false);
	}

  return (
			<>
			<a onClick={showModal}><b>Go</b></a>
			<Modal title="Поиск клиента:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<Input value={phoneOrMail} placeholder='Введите телефон или почту' onChange={(e) => setPhoneOrMail(e.target.value)}/>
				<Button type="primary" onClick={getUser}>Проверить</Button>
				<p>ID клиента: {userId}</p>
				<Button type="primary" onClick={callTransfer}>Передать клиенту</Button>

			</Modal>

			</>

  );
}
