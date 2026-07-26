"use client";

import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";


export default function ProtectedRoute({

children

}:{

children:React.ReactNode;

}){


const router = useRouter();

const [loading,setLoading] = useState(true);



useEffect(()=>{


async function checkAuth(){


const res =
await fetch("/api/auth/me");


if(!res.ok){

router.replace("/login");

return;

}


setLoading(false);


}


checkAuth();


},[router]);



if(loading){

return (

<div className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
">

Checking security access...

</div>

);

}



return <>{children}</>;

}