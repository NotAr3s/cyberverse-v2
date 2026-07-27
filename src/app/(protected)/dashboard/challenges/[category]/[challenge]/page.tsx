"use client";

import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Trophy,
  Lightbulb,
  Terminal,
  ShieldCheck,
  CircleCheck,
  Target
} from "lucide-react";


import { challenges } from "@/data/challenges";
import { useProgress } from "@/context/ProgressContext";



export default function ChallengePage({

params

}:{

params:Promise<{
category:string;
challenge:string;
}>

}){


const {challenge}=use(params);



const currentChallenge =
challenges.find(
(item)=>item.id===challenge
);



const {
completeChallenge
}=useProgress();



const [answer,setAnswer]=useState("");

const [message,setMessage]=useState("");

const [showHint,setShowHint]=useState(false);

const [completed,setCompleted]=useState(false);





useEffect(()=>{


if(!currentChallenge)
return;


const saved =
localStorage.getItem(
"completedChallenges"
);



if(saved){

const list =
JSON.parse(saved);


if(
list.includes(
currentChallenge.title
)
){

setCompleted(true);

}

}


},[currentChallenge]);







if(!currentChallenge){


return (

<div className="
min-h-screen
p-10
text-white
">

<h1 className="
text-4xl
font-bold
">

Challenge Not Found

</h1>

</div>

);


}






function submit(){


if(

answer
.trim()
.toLowerCase()
.includes(
currentChallenge.answer.toLowerCase()
)

){


setMessage(
"Challenge completed successfully"
);


setCompleted(true);



completeChallenge(

currentChallenge.title,

currentChallenge.xp

);


}


else{


setMessage(
"Incorrect answer. Try again."
);


}


}







return (

<div className="
min-h-screen
space-y-8
"
>





{/* HEADER */}


<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

>


<div className="
flex
items-center
gap-3
"
>

<ShieldCheck
className="text-cyan-400"
size={32}
/>


<h1 className="
text-4xl
font-black
"
>

{currentChallenge.title}

</h1>


</div>




<p className="
mt-4
text-slate-400
max-w-3xl
"
>

{currentChallenge.description}

</p>



</motion.div>








{/* INFO CARDS */}


<div className="
grid
md:grid-cols-3
gap-5
"
>


<Card

icon={<Target/>}

title="Difficulty"

value={currentChallenge.difficulty}

/>



<Card

icon={<Trophy/>}

title="Reward"

value={`${currentChallenge.xp} XP`}

/>



<Card

icon={<Terminal/>}

title="Category"

value={currentChallenge.category}

/>



</div>









{/* TERMINAL PANEL */}


<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

className="
rounded-2xl
border
border-white/10
bg-black/40
p-6
font-mono
"

>


<div className="
flex
items-center
gap-2
text-green-400
"
>

<Terminal size={18}/>

challenge_terminal

</div>



<p className="
mt-4
text-slate-400
"
>

&gt; target_loaded<br/>

&gt; vulnerability_analysis_ready<br/>

&gt; waiting_for_solution...

</p>


</motion.div>









{/* CHALLENGE AREA */}



<div className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
"
>


<h2 className="
text-2xl
font-bold
"
>

Mission Objective

</h2>




<p className="
mt-4
text-slate-300
"
>

{currentChallenge.question}

</p>







{

currentChallenge.type==="choice"

?

<div className="
mt-6
space-y-3
"
>


{

currentChallenge.options?.map(option=>(


<button

key={option}

onClick={()=>setAnswer(option)}

className={`

w-full
rounded-xl
border
p-4
text-left
transition

${

answer===option

?

"border-cyan-400 bg-cyan-400/10 text-cyan-300"

:

"border-white/10 hover:bg-white/10"

}

`}

>


{option}


</button>


))


}



</div>



:

<input

className="
mt-6
w-full
rounded-xl
border
border-white/10
bg-black/40
p-4
outline-none
focus:border-cyan-400
"

placeholder="Enter your solution..."

value={answer}

onChange={(e)=>setAnswer(e.target.value)}

/>


}








<div className="
mt-8
flex
gap-4
flex-wrap
"
>


<button

onClick={submit}

disabled={completed}

className="
rounded-xl
bg-gradient-to-r
from-cyan-400
to-violet-500
px-6
py-3
font-bold
text-black
disabled:opacity-50
"

>

{

completed

?

"Completed ✓"

:

"Submit Solution"

}


</button>





<button

onClick={()=>setShowHint(!showHint)}

className="
flex
items-center
gap-2
rounded-xl
border
border-white/10
px-5
py-3
hover:bg-white/10
"

>

<Lightbulb size={18}/>

Hint

</button>



</div>







{

showHint &&

<div className="
mt-6
rounded-xl
border
border-yellow-400/20
bg-yellow-400/10
p-4
text-yellow-300
"
>

💡 {currentChallenge.hint}

</div>


}





{

message &&

<div className="
mt-6
flex
items-center
gap-2
text-cyan-400
"
>

<CircleCheck size={18}/>

{message}

</div>


}





</div>



</div>


);


}







function Card({

icon,
title,
value

}:{

icon:React.ReactNode;

title:string;

value:string;

}){


return (

<div className="
rounded-2xl
border
border-white/10
bg-white/5
p-5
"
>


<div className="
text-cyan-400
"
>

{icon}

</div>


<p className="
mt-3
text-sm
text-slate-400
"
>

{title}

</p>


<h3 className="
mt-1
font-bold
text-white
"
>

{value}

</h3>


</div>


);


}