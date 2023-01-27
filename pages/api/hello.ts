// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {NextRequest, NextResponse} from "next/server";

export const config = {
	runtime: 'experimental-edge'
}


type Data = {
  name: string
}



export default function handler(
  req: NextRequest,
) {
   //res.status(200).json({name: "Kuchlong"})
   return NextResponse.json({
       Data: {name: "kuchlong"}
   })
}
