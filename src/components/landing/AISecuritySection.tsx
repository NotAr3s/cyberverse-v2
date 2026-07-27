"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ShieldAlert,
  Activity,
  Cpu
} from "lucide-react";


const threats = [
  {
    name:"Phishing Attack",
    status:"Blocked",
    level:"High"
  },
  {
    name:"Malware Detection",
    status:"Analyzed",
    level:"Medium"
  },
  {
    name:"Network Intrusion",
    status:"Monitoring",
    level:"Low"
  }
];


export default function AISecuritySection(){

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
grid
items-center
gap-12
lg:grid-cols-2
"
>


{/* LEFT */}


<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<div
className="
mb-6
inline-flex
items-center
gap-2
rounded-full
border
border-purple-400/30
bg-purple-400/10
px-4
py-2
text-sm
text-purple-300
"
>

<Brain size={18}/>

AI Security Engine

</div>



<h2
className="
text-4xl
font-black
text-white
md:text-5xl
"
>

AI Powered
<br/>

<span
className="
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
"
>

Cyber Defense

</span>

</h2>



<p
className="
mt-6
max-w-xl
text-lg
text-slate-400
"
>

Explore AI-powered threat detection,
security automation and intelligent
defense systems.

</p>


</motion.div>





{/* RIGHT SOC PANEL */}



<motion.div

initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

className="
rounded-3xl
border
border-white/10
bg-black/30
p-6
backdrop-blur-xl
"

>


<div
className="
mb-6
flex
items-center
gap-3
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

<Cpu/>

</div>


<div>

<p className="font-bold text-white">
Cyber AI Monitor
</p>

<p className="text-sm text-slate-400">
Live Threat Analysis
</p>

</div>


</div>





<div
className="
space-y-4
"
>


{
threats.map((threat,index)=>(


<motion.div

key={threat.name}

initial={{
opacity:0,
x:20
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.2
}}

className="
flex
items-center
justify-between
rounded-xl
border
border-white/10
bg-white/5
p-4
"

>


<div className="flex items-center gap-3">

<ShieldAlert
size={20}
className="text-cyan-400"
/>


<div>

<p className="text-white font-semibold">

{threat.name}

</p>

<p className="text-xs text-slate-400">

AI Analysis Complete

</p>

</div>


</div>





<span
className="
flex
items-center
gap-2
text-sm
text-green-400
"
>

<Activity size={16}/>

{threat.status}

</span>


</motion.div>


))

}


</div>



</motion.div>



</div>


</section>

);

}
