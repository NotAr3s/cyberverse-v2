"use client";

import { motion } from "framer-motion";

import {
  Flag,
  Skull,
  Network,
  Bug,
  Code2,
  Trophy,
  Zap
} from "lucide-react";



const challenges = [

{
name:"SQL Injection",
difficulty:"Easy",
xp:100,
icon:Bug,
description:"Exploit vulnerable databases and discover hidden information.",
category:"Web Exploitation"
},


{
name:"Network Analysis",
difficulty:"Medium",
xp:250,
icon:Network,
description:"Analyze traffic packets and identify malicious activity.",
category:"Network Security"
},


{
name:"Reverse Engineering",
difficulty:"Hard",
xp:500,
icon:Code2,
description:"Analyze binaries and uncover hidden logic.",
category:"Binary Analysis"
},


{
name:"Malware Investigation",
difficulty:"Expert",
xp:1000,
icon:Skull,
description:"Investigate malware samples and identify threats.",
category:"Threat Intelligence"
}

];





export default function CTF(){


return (

<div className="
min-h-screen
space-y-10
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

<Flag
size={36}
className="text-green-400"
/>


<h1 className="
text-4xl
md:text-5xl
font-black
"
>

CTF Arena

</h1>


</div>



<p className="
mt-3
text-slate-400
max-w-2xl
"
>

Enter the cyber battlefield. Solve security
missions, capture flags and increase your rank.

</p>


</motion.div>









{/* TERMINAL */}


<div

className="
rounded-2xl
border
border-green-400/20
bg-black/40
p-6
font-mono
"

>


<p className="
text-green-400
">

$ ctf_arena.initialize()

</p>



<p className="
mt-3
text-slate-400
">

&gt; challenges_loaded<br/>

&gt; attack_environment_ready<br/>

&gt; waiting_for_hackers...

</p>


</div>









{/* CHALLENGE GRID */}



<div className="
grid
md:grid-cols-2
gap-6
"
>


{

challenges.map((challenge,index)=>{


const Icon=challenge.icon;



return (


<motion.div

key={challenge.name}

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-7
backdrop-blur-xl
hover:border-green-400/40
transition
"

>


<div className="
flex
justify-between
items-start
"
>


<div

className="
rounded-xl
bg-green-400/10
p-3
text-green-400
"

>

<Icon size={28}/>

</div>




<div className="
flex
items-center
gap-2
text-yellow-400
"
>

<Trophy size={18}/>

{challenge.xp} XP

</div>


</div>






<h2 className="
mt-6
text-2xl
font-bold
"
>

{challenge.name}

</h2>




<p className="
mt-3
text-slate-400
"
>

{challenge.description}

</p>







<div className="
mt-6
flex
justify-between
items-center
"
>


<span className="
rounded-full
border
border-white/10
px-3
py-1
text-sm
text-slate-300
"
>

{challenge.category}

</span>



<span

className={`

text-sm
font-bold

${

challenge.difficulty==="Easy"

?

"text-green-400"

:

challenge.difficulty==="Medium"

?

"text-yellow-400"

:

challenge.difficulty==="Hard"

?

"text-orange-400"

:

"text-red-400"

}

`}

>

{challenge.difficulty}

</span>


</div>







<button

className="
mt-7
flex
w-full
items-center
justify-center
gap-2
rounded-xl
bg-gradient-to-r
from-green-400
to-cyan-400
py-3
font-bold
text-black
transition
hover:scale-105
"

>


<Zap size={18}/>

Start Challenge


</button>






</motion.div>


);


})


}



</div>







</div>

);


}