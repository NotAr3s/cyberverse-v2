"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Flag,
  Shield,
  Lock,
  ArrowRight
} from "lucide-react";


const challenges = [

{
title:"SQL Injection",
category:"Web Security",
difficulty:"Easy",
xp:"250 XP",
icon:Shield
},

{
title:"Network Recon",
category:"Network Security",
difficulty:"Medium",
xp:"500 XP",
icon:Flag
},

{
title:"Reverse Engineering",
category:"Binary Analysis",
difficulty:"Hard",
xp:"1000 XP",
icon:Lock
}

];



export default function ChallengePreview(){

return (

<section
className="
mx-auto
max-w-7xl
px-6
py-24
"
>


<div
className="
mb-14
flex
items-end
justify-between
"
>


<div>

<h2
className="
text-4xl
font-black
text-white
md:text-5xl
"
>

Latest Security Challenges

</h2>


<p
className="
mt-4
text-slate-400
"
>

Test your skills with real cybersecurity scenarios.

</p>

</div>


<Link

href="/challenges"

className="
hidden
items-center
gap-2
text-cyan-400
transition
hover:text-cyan-300
md:flex
"

>

View All

<ArrowRight size={18}/>

</Link>


</div>





<div
className="
grid
gap-6
md:grid-cols-3
"
>


{
challenges.map((challenge,index)=>{


const Icon = challenge.icon;


return (

<motion.div

key={challenge.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
delay:index*0.15
}}


whileHover={{
y:-10
}}


className="
group
rounded-3xl
border
border-white/10
bg-white/5
p-7
backdrop-blur-xl
transition
hover:border-cyan-400/40
"

>


<div
className="
flex
items-center
justify-between
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-cyan-400/10
text-cyan-400
"
>

<Icon size={24}/>

</div>


<span
className={`
rounded-full
px-3
py-1
text-xs
font-semibold
${
challenge.difficulty==="Easy"
?
"bg-green-400/10 text-green-400"
:
challenge.difficulty==="Medium"
?
"bg-yellow-400/10 text-yellow-400"
:
"bg-red-400/10 text-red-400"
}
`}
>

{challenge.difficulty}

</span>


</div>





<h3
className="
mt-6
text-xl
font-bold
text-white
"
>

{challenge.title}

</h3>




<p
className="
mt-2
text-sm
text-slate-400
"
>

{challenge.category}

</p>





<div
className="
mt-6
flex
items-center
justify-between
"
>


<span
className="
text-sm
font-semibold
text-cyan-400
"
>

{challenge.xp}

</span>



<button
className="
rounded-lg
border
border-white/10
px-3
py-2
text-xs
text-white
transition
group-hover:bg-white/10
"
>

Start

</button>


</div>


</motion.div>

)

})

}


</div>


</section>

);

}