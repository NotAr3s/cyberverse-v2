import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { prisma } from "@/lib/prisma";


const secret =
  new TextEncoder().encode(
    process.env.JWT_SECRET
  );


export async function POST(req: Request) {

  try {


    const {
      email,
      password
    } = await req.json();



    if(!email || !password){

      return NextResponse.json(
        {
          message:"Email and password required"
        },
        {
          status:400
        }
      );

    }



    const user =
      await prisma.user.findUnique({

        where:{
          email
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



    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );



    if(!validPassword){

      return NextResponse.json(
        {
          message:"Invalid password"
        },
        {
          status:401
        }
      );

    }



    const token =
      await new SignJWT({

        id:user.id,
        email:user.email

      })

      .setProtectedHeader({
        alg:"HS256"
      })

      .setExpirationTime("7d")

      .sign(secret);




    const response =
      NextResponse.json({

        message:"Login successful",

        user:{

          id:user.id,

          username:user.username,

          email:user.email

        }

      });




    response.cookies.set(
      "token",
      token,
      {

        httpOnly:true,

        secure:
        process.env.NODE_ENV === "production",

        maxAge:
        60 * 60 * 24 * 7,

        path:"/",

      }
    );



    return response;



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