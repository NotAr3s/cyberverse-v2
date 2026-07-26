"use client";

import { use } from "react";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";
import { useProgress } from "@/context/ProgressContext";
import { labs } from "@/data/labs";


export default function LabPage({

params

}: {

params: Promise<{
  lab:string
}>

}) {


const {lab:labId}=use(params);



const {theme}=useTheme();

const style = themes[theme as keyof typeof themes];



const {
  completeLab
}=useProgress();





const lab =
labs.find(
(item)=>item.id===labId
);





if(!lab){

return (

<div className="
min-h-screen
bg-black
text-white
p-10
">

<h1 className="
text-3xl
font-bold
">

Lab Not Found

</h1>

</div>

);

}





return (

<div className="
min-h-screen
bg-black
text-white
p-10
">





<h1

className={`

text-4xl
font-bold
${style.text}

`}

>

{lab.title}

</h1>





<p className="
text-gray-400
mt-3
max-w-3xl
">

{lab.description}

</p>







<div className="
grid
md:grid-cols-3
gap-5
mt-8
">



<div className="
bg-white/5
border
border-gray-800
rounded-xl
p-5
">

<p className="
text-gray-400
">

Difficulty

</p>


<h2 className="
text-xl
font-bold
">

{lab.difficulty}

</h2>

</div>







<div className="
bg-white/5
border
border-gray-800
rounded-xl
p-5
">

<p className="
text-gray-400
">

Reward

</p>


<h2 className={`

text-xl
font-bold
${style.text}

`}>

{lab.xp} XP

</h2>

</div>







<div className="
bg-white/5
border
border-gray-800
rounded-xl
p-5
">

<p className="
text-gray-400
">

Platform

</p>


<h2 className="
text-xl
font-bold
">

{lab.platform}

</h2>

</div>



</div>









<div className="
mt-8
bg-white/5
border
border-gray-800
rounded-2xl
p-6
">



<h2 className="
text-2xl
font-bold
">

About This Lab

</h2>




<p className="
text-gray-400
mt-3
">

Complete this cybersecurity exercise on the official platform.
After finishing, mark it completed to receive XP.

</p>







<div className="
flex
gap-4
mt-6
">



<a

href={lab.url}

target="_blank"

className={`

px-6
py-3
rounded-lg
font-bold
${style.button}

`}

>

Launch Lab

</a>






<button

onClick={()=>{

completeLab(
lab.title,
lab.xp
);

}}

className="
px-6
py-3
rounded-lg
font-bold
bg-white/10
border
border-gray-700
"

>

Mark Completed

</button>



</div>





</div>






</div>

);


}