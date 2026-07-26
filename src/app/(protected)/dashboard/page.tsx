"use client";

import Link from "next/link";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";
import { useProgress } from "@/context/ProgressContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Dashboard(){


const {
theme
}=useTheme();


const style =
themes[theme];



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

<ProtectedRoute>

<div className="
min-h-screen
bg-black
text-white
p-10
">

{/* Everything that is already inside your dashboard */}

<h1 className={`
text-4xl
font-bold
${style.text}
`}>

CyberVerse Dashboard

</h1>

<p className="
mt-2
text-gray-400
">

Track your cybersecurity learning journey.

</p>

{/* STATS */}

<div className="
grid
md:grid-cols-4
gap-5
mt-8
">

{
stats.map(item=>(

<div

key={item.title}

className={`
bg-white/5
border
${style.border}
rounded-2xl
p-6
${style.glow}
`}

>

<p className="
text-gray-400
text-sm
">

{item.title}

</p>

<h2 className={`
text-3xl
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

{/* XP BAR */}

<div className="
mt-8
bg-white/5
border
border-gray-800
rounded-2xl
p-6
">

<div className="
flex
justify-between
">

<h2 className="font-bold">
Experience Progress
</h2>

<span className={style.text}>
{xp} / 5000 XP
</span>

</div>

<div className="
mt-4
h-3
bg-gray-800
rounded-full
overflow-hidden
">

<div

className={`
h-3
rounded-full
${style.button}
transition-all
duration-500
`}

style={{
width:`${progress}%`
}}

/>

</div>

<p className="
mt-3
text-gray-400
text-sm
">

{Math.round(progress)}% completed

</p>

</div>

{/* QUICK ACCESS */}

<h2 className="
text-2xl
font-bold
mt-10
">

Continue Learning

</h2>

<div className="
grid
md:grid-cols-3
gap-5
mt-5
">

<Link
href="/labs"
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

<h3 className="text-xl font-bold">
🧪 Security Labs
</h3>

<p className="text-gray-400 mt-2">
Practice guided cybersecurity labs.
</p>

</Link>

<Link
href="/challenges"
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

<h3 className="text-xl font-bold">
⚔ Challenges
</h3>

<p className="text-gray-400 mt-2">
Solve real security problems.
</p>

</Link>

<Link
href="/profile"
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

<h3 className="text-xl font-bold">
👤 Profile
</h3>

<p className="text-gray-400 mt-2">
View achievements and badges.
</p>

</Link>

</div>

</div>

</ProtectedRoute>

);

}