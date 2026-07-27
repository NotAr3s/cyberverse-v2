"use client";

import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Medal,
  Star
} from "lucide-react";


const members = [

{
name:"Alex",
rank:"Elite Hacker",
xp:"12,450 XP",
level:"Level 24"
},

{
name:"Sarah",
rank:"Security Analyst",
xp:"9,800 XP",
level:"Level 18"
},

{
name:"David",
rank:"CTF Champion",
xp:"15,200 XP",
level:"Level 30"
}

];


export default function CommunitySection(){

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

<Users size={28}/>

</div>



<h2
className="
text-4xl
font-black
text-white
md:text-5xl
"
>

Join The CyberVerse Community

</h2>


<p
className="
mx-auto
mt-4
max-w-2xl
text-slate-400
"
>

Learn, compete and grow with cybersecurity
enthusiasts around the world.

</p>


</div>





<div
className="
grid
gap-6
md:grid-cols-3
"
>


{
members.map((member,index)=>(


<motion.div

key={member.name}

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
y:-8
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-7
backdrop-blur-xl
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
bg-purple-400/10
text-purple-400
"
>

{
index===0
?
<Trophy/>
:
index===1
?
<Medal/>
:
<Star/>
}

</div>


<span
className="
rounded-full
bg-cyan-400/10
px-3
py-1
text-xs
text-cyan-300
"
>

{member.level}

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

{member.name}

</h3>


<p
className="
mt-2
text-cyan-400
"
>

{member.rank}

</p>



<div
className="
mt-5
rounded-xl
bg-black/20
p-4
"
>

<p className="text-sm text-slate-400">
Experience Points
</p>

<p className="mt-1 font-bold text-white">
{member.xp}
</p>

</div>



</motion.div>


))

}


</div>



</section>

);

}