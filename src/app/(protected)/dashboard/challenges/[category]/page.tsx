"use client";

import Link from "next/link";
import { use } from "react";

import { challenges } from "@/data/challenges";


export default function CategoryPage({

params

}: {

params: Promise<{
category:string
}>

}) {


const { category } = use(params);



const list = challenges.filter(
(challenge)=>
challenge.category === category
);



return (

<div className="
min-h-screen
bg-black
text-white
p-10
">


<h1 className="
text-4xl
font-bold
">

⚔ CyberVerse Challenges

</h1>



<h2 className="
text-2xl
mt-5
text-blue-400
">

{
category
.replace("-", " ")
.toUpperCase()
}

</h2>



{
list.length === 0 ? (

<p className="
mt-10
text-red-400
">

No challenges found for this category.

</p>

)

:

(

<div className="
grid
md:grid-cols-3
gap-6
mt-8
">


{

list.map((challenge)=>(


<Link

key={challenge.id}

href={`/dashboard/challenges/${category}/${challenge.id}`}

className="
bg-white/5
border
border-gray-700
rounded-xl
p-6
hover:scale-105
transition
"


>


<h3 className="
text-xl
font-bold
">

{challenge.title}

</h3>



<p className="
mt-3
text-gray-400
">

{challenge.description}

</p>



<p className="
mt-4
">

Difficulty:
{challenge.difficulty}

</p>



<p>

Reward:

<span className="
text-green-400
">

{" "}
{challenge.xp} XP

</span>

</p>



<div className="
mt-5
text-blue-400
">

Start Challenge →

</div>


</Link>


))

}


</div>

)

}



</div>

);


}