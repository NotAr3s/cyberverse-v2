import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";


const secret =
  new TextEncoder().encode(
    process.env.JWT_SECRET
  );


export async function GET(req: Request) {

  try {

    const cookie =
      req.headers
      .get("cookie");


    const token =
      cookie
      ?.split("; ")
      .find(
        item => item.startsWith("token=")
      )
      ?.split("=")[1];



    if(!token){

      return NextResponse.json(
        {
          user:null
        },
        {
          status:401
        }
      );

    }



    const {payload} =
      await jwtVerify(
        token,
        secret
      );



    const user =
      await prisma.user.findUnique({

        where:{
          id:String(payload.id)
        },

        select:{
          id:true,
          name:true,
          email:true
        }

      });



    return NextResponse.json({
      user
    });


  }

  catch(error){

    return NextResponse.json(
      {
        user:null
      },
      {
        status:401
      }
    );

  }

}