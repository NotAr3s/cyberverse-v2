import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";


const secret =
  new TextEncoder().encode(
    process.env.JWT_SECRET
  );



export async function POST(req:Request){

try{


const cookie =
req.headers.get("cookie");


const token =
cookie
?.split("; ")
.find(
item=>item.startsWith("token=")
)
?.split("=")[1];


if(!token){

return NextResponse.json(
{
message:"Unauthorized"
},
{
status:401
}
);

}



const {payload}=await jwtVerify(
token,
secret
);



const userId =
String(payload.id);



const {
labId,
title,
xp
}=await req.json();





const existing =
await prisma.labProgress.findUnique({

where:{
userId_labId:{
userId,
labId
}
}

});



if(existing){

return NextResponse.json(
{
message:"Already completed"
}
);

}





await prisma.labProgress.create({

data:{

userId,

labId,

title,

xp

}

});





await prisma.user.update({

where:{
id:userId
},

data:{

xp:{
increment:xp
}

}

});





return NextResponse.json({

message:"Lab completed"

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