'use client';

import { useEffect, useState} from 'react';

import { useCardStore } from "@/stores";


export default function useInitialization({ name }: { name: string }) {
	const [isLoading, setIsLoading] = useState(true);
	const { initializeCardData } = useCardStore();

	useEffect(() => {
		initializeCardData(name);
		setIsLoading(false);
	}, [initializeCardData, name]);
  

	return isLoading;
};


