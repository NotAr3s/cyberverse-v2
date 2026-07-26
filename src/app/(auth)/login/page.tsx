"use client";


import {useState} from "react";
import {useRouter} from "next/navigation";

import {useAuth} from "@/context/AuthContext";



export default function Login(){


const router=useRouter();


const {
login
}=useAuth();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");




function submit(){


const success =
login(
email,
password
);



if(success){

router.push("/dashboard");

}

else{

setError(
"Invalid login details"
);

}


}



return (

<div className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
">


<div className="
bg-white/5
border
border-gray-800
rounded-xl
p-8
w-96
">


<h1 className="
text-3xl
font-bold
">

CyberVerse Login

</h1>



<input

className="
mt-5
w-full
bg-black
border
p-3
rounded
"

placeholder="Email"

onChange={
e=>setEmail(e.target.value)
}

/>


<input

className="
mt-3
w-full
bg-black
border
p-3
rounded
"

placeholder="Password"

type="password"

onChange={
e=>setPassword(e.target.value)
}

/>



<button

onClick={submit}

className="
mt-5
w-full
bg-blue-600
p-3
rounded
font-bold
"

>

Login

</button>



<p className="
text-red-400
mt-3
">

{error}

</p>


</div>


</div>

);


}