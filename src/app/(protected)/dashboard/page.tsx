"use client";

import Link from "next/link";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";
import { useProgress } from "@/context/ProgressContext";


export default function Dashboard(){


const { theme } = useTheme();


const style =
themes[theme as keyof typeof themes];


const {
xp,
completedLabs,
completedChallenges
}=useProgress();





const level =
xp < 1000
?
"Beginner"
:
xp < 3000
?
"Intermediate"
:
"Cyber Expert";





const stats=[

{
title:"Security Level",
value:level
},

{
title:"XP Points",
value:`${xp} XP`
},

{
title:"Labs Completed",
value:String(completedLabs.length)
},

{
title:"Challenges Solved",
value:String(completedChallenges.length)
}

];





const progress =
Math.min(
(xp/5000)*100,
100
);





return (

<div className="
min-h-screen
bg-black
text-white
p-10
">


<h1 className={`
text-4xl
font-bold
${style.text}
`}>
CyberVerse Dashboard
</h1>


<p className="
text-gray-400
mt-2
">
Track your cybersecurity learning journey.
</p>





<div className="
grid
md:grid-cols-4
gap-6
mt-8
">


{
stats.map((item)=>(

<div

key={item.title}

className="
bg-white/5
border
border-gray-800
rounded-2xl
p-6
"

>

<p className="
text-gray-400
">

{item.title}

</p>


<h2 className={`
text-2xl
font-bold
mt-3
${style.text}
`}>

{item.value}

</h2>


</div>

))

}


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

Security Progress

</h2>


<div className="
mt-4
w-full
bg-gray-800
rounded-full
h-4
">


<div

className={`
h-4
rounded-full
${style.button}
`}

style={{
width:`${progress}%`
}}

/>


</div>


<p className="
mt-3
text-gray-400
">

{Math.round(progress)}% completed

</p>


</div>






<div className="
grid
md:grid-cols-3
gap-6
mt-8
">


<Link
href="/dashboard/labs"
className="
bg-white/5
border
border-gray-800
rounded-xl
p-6
hover:bg-white/10
"
>

<h2 className="text-xl font-bold">
🧪 Cyber Labs
</h2>

<p className="text-gray-400 mt-2">
Practice real cybersecurity skills.
</p>

</Link>




<Link
href="/dashboard/challenges"
className="
bg-white/5
border
border-gray-800
rounded-xl
p-6
hover:bg-white/10
"
>

<h2 className="text-xl font-bold">
⚔ Challenges
</h2>

<p className="text-gray-400 mt-2">
Solve security challenges and earn XP.
</p>

</Link>




<Link
href="/dashboard/ctf"
className="
bg-white/5
border
border-gray-800
rounded-xl
p-6
hover:bg-white/10
"
>

<h2 className="text-xl font-bold">
🏆 CTF Arena
</h2>

<p className="text-gray-400 mt-2">
Compete and improve your rank.
</p>

</Link>


</div>




</div>

);


}