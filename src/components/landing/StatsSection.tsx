"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Trophy,
  Target
} from "lucide-react";


const stats = [

{
number:"10,000+",
label:"Cyber Learners",
icon:Users
},

{
number:"500+",
label:"Security Challenges",
icon:Target
},

{
number:"50+",
label:"Hands-on Labs",
icon:ShieldCheck
},

{
number:"#1",
label:"Growing CTF Community",
icon:Trophy
}

];


export default function StatsSection(){

return (

<section
className="
mx-auto
max-w-7xl
px-6
py-20
"
>


<div
className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>


{
stats.map((stat,index)=>{


const Icon = stat.icon;


return (

<motion.div

key={stat.label}


initial={{
opacity:0,
scale:0.8
}}


whileInView={{
opacity:1,
scale:1
}}


viewport={{
once:true
}}


transition={{
delay:index*0.15
}}


whileHover={{
y:-8
}}


className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
text-center
backdrop-blur-xl
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
"


>


<div
className="
mx-auto
mb-5
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-cyan-400
"
>

<Icon size={28}/>

</div>



<h3
className="
text-4xl
font-bold
text-white
"
>

{stat.number}

</h3>



<p
className="
mt-2
text-slate-400
"
>

{stat.label}

</p>


</motion.div>

)

})

}


</div>


</section>

);

}