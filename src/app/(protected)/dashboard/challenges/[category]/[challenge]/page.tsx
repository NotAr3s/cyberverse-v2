"use client";

import { use, useEffect, useState } from "react";

import { challenges } from "@/data/challenges";
import { useProgress } from "@/context/ProgressContext";


export default function ChallengePage({

params

}: {

params: Promise<{
category:string;
challenge:string;
}>

}) {


const { challenge } = use(params);



const lab = challenges.find(
(item)=> item.id === challenge
);



const {
completeChallenge
}=useProgress();



const [answer,setAnswer] = useState("");

const [message,setMessage] = useState("");

const [showHint,setShowHint] = useState(false);

const [completed,setCompleted] = useState(false);





useEffect(()=>{


if(!lab) return;


const saved =
localStorage.getItem(
"completedChallenges"
);



if(saved){

const completedList =
JSON.parse(saved);


if(
completedList.includes(lab.title)
){

setCompleted(true);

}

}


},[lab]);





if(!lab){

return (

<div className="
min-h-screen
bg-black
text-white
p-10
">

<h1 className="text-3xl font-bold">

Challenge Not Found

</h1>

</div>

);

}



const currentLab = lab;





function submit(){


if(
answer
.trim()
.toLowerCase()
.includes(
currentLab.answer.toLowerCase()
)

){


setMessage(
"✅ Challenge Completed!"
);


setCompleted(true);



completeChallenge(
currentLab.title,
currentLab.xp
);



}

else{


setMessage(
"❌ Incorrect Answer"
);


}


}





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

{currentLab.title}

</h1>





<div className="
mt-6
max-w-2xl
bg-white/5
border
border-gray-800
rounded-2xl
p-6
">



<p className="
text-gray-400
">

{currentLab.description}

</p>





<div className="
mt-5
">

<h2 className="
font-bold
text-xl
">

Challenge

</h2>


<p className="
mt-2
">

{currentLab.question}

</p>


</div>






{
currentLab.type === "choice" ? (


<div className="
mt-5
space-y-3
">



{
currentLab.options?.map(option=>(


<button

key={option}

onClick={()=>setAnswer(option)}

className={`

w-full
text-left
border
border-gray-700
rounded-lg
p-3
hover:bg-white/10

${
answer===option
?
"bg-blue-600"
:
""
}

`}

>

{option}

</button>


))

}



</div>


)

:

(


<input

className="
mt-5
w-full
bg-black
border
border-gray-700
rounded-lg
p-3
"

placeholder="Enter your answer"

value={answer}

onChange={
(e)=>setAnswer(e.target.value)
}

/>


)

}







<button

onClick={submit}

disabled={completed}

className="
mt-6
px-6
py-3
rounded-lg
bg-blue-600
font-bold
disabled:opacity-50
"

>

{

completed

?

"Completed ✓"

:

"Submit Challenge"

}


</button>






<button

onClick={
()=>setShowHint(!showHint)
}

className="
ml-3
px-5
py-3
border
border-gray-700
rounded-lg
"

>

💡 Hint

</button>







{

showHint &&

<p className="
mt-5
text-yellow-400
">

💡 {currentLab.hint}

</p>

}







<p className="
mt-5
font-bold
">

{message}

</p>







<div className="
mt-5
text-green-400
">

Reward:
{currentLab.xp} XP

</div>







<div className="
mt-2
text-gray-400
">

Difficulty:
{currentLab.difficulty}

</div>






</div>


</div>

);


}