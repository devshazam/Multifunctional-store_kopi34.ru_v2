import { NextRequest, NextResponse } from 'next/server';

import prisma from "@/lib/api/db";

export async function POST(req:any,res:any){
      try {
        const {type , object} = await req.json()

		if(type === "notification" && object.status === "succeeded"){

			await prisma.order.updateMany({
				where: { payId: object.id },
				data: { payStatus: true },
			  });
			return NextResponse.json({res: 'success'})
		}else{
			return NextResponse.json({res: 'test-passed'})
		}

    } catch (e: unknown) {
		if(e instanceof Error){
			console.log(e.message)
		}
		return NextResponse.error();
 	}
}
