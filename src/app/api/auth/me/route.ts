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
      req.headers.get("cookie");



    if(!cookie){

      return NextResponse.json(
        {
          message:"Not authenticated"
        },
        {
          status:401
        }
      );

    }



    const token =
      cookie
      .split("; ")
      .find(
        item => item.startsWith("token=")
      )
      ?.split("=")[1];



    if(!token){

      return NextResponse.json(
        {
          message:"Token missing"
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

        include:{

          completedLabs:true,

          completedChallenges:true

        }

      });



    if(!user){

      return NextResponse.json(
        {
          message:"User not found"
        },
        {
          status:404
        }
      );

    }




    return NextResponse.json({

      id:user.id,

      username:user.username,

      email:user.email,

      xp:user.xp,

      completedLabs:user.completedLabs,

      completedChallenges:user.completedChallenges

    });



  }
  catch(error){

    console.log(error);


    return NextResponse.json(
      {
        message:"Server error"
      },
      {
        status:500
      }
    );

  }


}