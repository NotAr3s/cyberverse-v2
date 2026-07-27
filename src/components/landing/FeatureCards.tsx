"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Terminal,
  Trophy,
  Brain,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";


const features = [

{
title:"Interactive Labs",
description:
"Practice real-world cybersecurity skills with guided hands-on environments.",
icon:Shield,
href:"/labs",
color:"cyan"
},

{
title:"SOC Dashboard",
description:
"Monitor your progress, security level, achievements and learning analytics.",
icon:Terminal,
href:"/dashboard",
color:"blue"
},

{
title:"CTF Arena",
description:
"Solve security challenges, capture flags and compete with other hackers.",
icon:Trophy,
href:"/ctf",
color:"purple"
},

{
title:"AI Security",
description:
"Explore AI-powered security tools and modern threat detection techniques.",
icon:Brain,
href:"/ai",
color:"green"
}

];



export default function FeatureCards(){

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
text-center
"
>

<h2
className="
text-4xl
font-black
text-white
md:text-5xl
"
>

Everything You Need To Become A Cyber Expert

</h2>


<p
className="
mx-auto
mt-4
max-w-2xl
text-slate-400
"
>

Learn through labs, simulations, challenges and security operations.

</p>


</div>





<div
className="
grid
gap-6
md:grid-cols-2
lg:grid-cols-4
"
>


{
features.map((feature,index)=>{


const Icon = feature.icon;


return (

<motion.div

key={feature.title}


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


>


<Link

href={feature.href}


className="
group
relative
block
h-full
overflow-hidden
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



{/* Hover Glow */}

<div
className="
absolute
inset-0
bg-gradient-to-br
from-cyan-400/10
via-transparent
to-purple-500/10
opacity-0
transition
group-hover:opacity-100
"
/>





<div
className="
relative
"
>


<div
className="
mb-6
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-cyan-400
transition
group-hover:scale-110
"
>

<Icon size={28}/>


</div>





<h3
className="
flex
items-center
gap-2
text-xl
font-bold
text-white
"
>

{feature.title}


<ArrowUpRight

size={18}

className="
opacity-0
transition
group-hover:opacity-100
"

/>


</h3>




<p
className="
mt-4
text-sm
leading-relaxed
text-slate-400
"
>

{feature.description}

</p>





<div
className="
mt-8
h-[2px]
w-0
bg-gradient-to-r
from-cyan-400
to-purple-500
transition-all
duration-500
group-hover:w-full
"
/>



</div>


</Link>


</motion.div>


)

})

}


</div>


</section>

);

}