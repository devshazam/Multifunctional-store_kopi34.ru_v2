'use server';

import prisma from './db'

/**************************************
 * Получение прайса по имени + сайтконфиг
***************************************/
export async function isAdmin(email: string) {
	try {
		const user = await prisma.user.findUnique({
			where: { email }, })
		return user?.admin;
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
		};
	}
}

/**************************************
 * Получение Юзера по Email
***************************************/
export async function getOrCreateUser(email: string) {
	try {
		const user = await prisma.user.upsert({
			where: { email },
			update: {  },
			create: { email },
		  });

		return user
	} catch (err: unknown) {
		if(err instanceof Error){
			console.log(err.message)
		};
	}
}

/**************************************
 * RESTRICTION: 
***************************************/
// THE PUBLIC VERSION HAS RESTRICTION - PARTS OF THE CODE CONTAINING A TRADE SECRET HAVE BEEN REMOVED.