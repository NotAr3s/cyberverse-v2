"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Globe,
  Network,
  LockKeyhole,
  Terminal,
  Bot,
  ArrowRight
} from "lucide-react";

import { challenges } from "@/data/challenges";



const categories = [

{
id:"web-security",
name:"Web Security",
icon:Globe,
color:"cyan",
description:"OWASP vulnerabilities, exploits and web attacks."
},


{
id:"network-security",
name:"Network Security",
icon:Network,
color:"blue",
description:"Packets, protocols and infrastructure defense."
},


{
id:"cryptography",
name:"Cryptography",
icon:LockKeyhole,
color:"purple",
description:"Encryption, hashes and secure communication."
},


{
id:"linux-security",
name:"Linux Security",
icon:Terminal,
color:"green",
description:"Linux privilege escalation and hardening."
},


{
id:"ai-security",
name:"AI Security",
icon:Bot,
color:"pink",
description:"Machine learning threats and AI defense."
}

];





export default function Challenges(){


return (

<div
className="
min-h-screen
"
>


{/* HEADER */}

<div className="mb-10">


<h1

className="
text-4xl
md:text-5xl
font-black
"

>

<span className="
text-cyan-400
">
⚔
</span>

 CyberVerse Challenges

</h1>



<p

className="
mt-3
text-slate-400
max-w-2xl
"

>

Test your cybersecurity skills through
real-world attack simulations and security missions.

</p>


</div>







{/* TERMINAL */}

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
mb-10
rounded-2xl
border
border-white/10
bg-black/30
p-5
font-mono
"

>


<p className="
text-green-400
">

$ challenge_system.status

</p>


<p className="
mt-2
text-slate-400
">

&gt; modules_loaded<br/>

&gt; vulnerability_database_ready<br/>

&gt; mission_environment_online

</p>


</motion.div>







{/* CATEGORY CARDS */}


<div

className="
grid
gap-6
md:grid-cols-3
"

>


{

categories.map((cat,index)=>{


const Icon=cat.icon;


const count =
challenges.filter(
(c)=>c.category===cat.id
).length;



return (

<motion.div

key={cat.id}

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

>


<Link

href={`/dashboard/challenges/${cat.id}`}

className="
block
h-full
rounded-2xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
transition
hover:border-cyan-400/40
hover:bg-white/10
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
rounded-xl
bg-cyan-400/10
p-3
text-cyan-400
"

>

<Icon size={26}/>

</div>



<ArrowRight

className="
text-slate-500
transition
group-hover:text-cyan-400
"

/>


</div>





<h2

className="
mt-6
text-2xl
font-bold
"

>

{cat.name}

</h2>




<p

className="
mt-3
text-slate-400
"

>

{cat.description}

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
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-3
py-1
text-sm
text-cyan-300
"

>

{count} Challenges

</span>



<span

className="
text-sm
text-slate-500
"

>

+ XP Rewards

</span>



</div>



</Link>


</motion.div>


);


})

}


</div>





</div>

);

}