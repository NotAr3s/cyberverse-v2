"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Shield,
  Trophy,
  Target,
  Zap,
  Edit3,
  Check,
  Lock,
  Code,
  Network,
  Brain,
  Crown,
  Activity
} from "lucide-react";


import { useProgress } from "@/context/ProgressContext";





export default function Profile(){


const {
xp,
completedLabs,
completedChallenges
}=useProgress();



const [editing,setEditing]=useState(false);


const [username,setUsername]=useState(
"Cyber Warrior"
);




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




const rank =
xp > 5000
?
"Elite Hacker"
:
xp > 3000
?
"Security Analyst"
:
"Junior Analyst";






const skills=[

{
name:"Web Security",
value:85,
icon:Code
},

{
name:"Network Security",
value:70,
icon:Network
},

{
name:"AI Security",
value:60,
icon:Brain
}

];





return (

<div className="
space-y-10
"
>





{/* HEADER */}


<div className="
flex
justify-between
items-center
"
>


<div>


<h1 className="
text-4xl
md:text-5xl
font-black
"
>

Security Profile

</h1>


<p className="
mt-3
text-slate-400
"
>

Your CyberVerse identity and security progression.

</p>


</div>





<button

onClick={()=>setEditing(!editing)}

className="
flex
items-center
gap-2
rounded-xl
border
border-white/10
bg-white/5
px-5
py-3
hover:bg-white/10
"

>

{

editing

?

<>

<Check size={18}/>

Save

</>

:

<>

<Edit3 size={18}/>

Edit

</>

}


</button>



</div>









{/* PROFILE CARD */}


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
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
"

>


<div className="
flex
items-center
gap-6
"
>


<div className="
flex
h-28
w-28
items-center
justify-center
rounded-full
bg-gradient-to-r
from-cyan-400
to-violet-500
text-4xl
font-black
text-black
"
>

CV

</div>





<div>


{

editing

?

<input

value={username}

onChange={(e)=>setUsername(e.target.value)}

className="
rounded-lg
border
border-white/10
bg-black/40
p-3
text-2xl
font-bold
"

/>

:

<h2 className="
text-3xl
font-black
"
>

{username}

</h2>

}



<p className="
mt-2
text-slate-400
"
>

Cybersecurity Researcher

</p>




<div className="
mt-4
flex
gap-3
"
>


<span className="
rounded-full
bg-green-400/10
px-4
py-1
text-sm
text-green-400
"
>

● Online

</span>



<span className="
rounded-full
bg-cyan-400/10
px-4
py-1
text-sm
text-cyan-400
"
>

{rank}

</span>



</div>


</div>


</div>





{/* STATS */}


<div className="
mt-10
grid
gap-5
md:grid-cols-4
"
>


<Stat
icon={<Zap/>}
title="XP"
value={`${xp}`}
/>


<Stat
icon={<Shield/>}
title="Level"
value={level}
/>


<Stat
icon={<Target/>}
title="Labs"
value={`${completedLabs.length}`}
/>


<Stat
icon={<Trophy/>}
title="Challenges"
value={`${completedChallenges.length}`}
/>


</div>




</motion.div>









{/* SKILLS */}


<section>


<h2 className="
text-3xl
font-black
"
>

Security Skills

</h2>



<div className="
mt-6
space-y-6
"
>


{

skills.map((skill,index)=>{


const Icon=skill.icon;


return (

<motion.div

key={skill.name}

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:index*0.1
}}

>


<div className="
mb-2
flex
justify-between
"
>


<div className="
flex
items-center
gap-2
"
>

<Icon
size={18}
className="text-cyan-400"
/>

{skill.name}

</div>



<span className="
text-cyan-400
"
>

{skill.value}%

</span>


</div>




<div className="
h-3
overflow-hidden
rounded-full
bg-white/10
"
>


<div

className="
h-full
rounded-full
bg-gradient-to-r
from-cyan-400
to-violet-500
"

style={{
width:`${skill.value}%`
}}

/>


</div>


</motion.div>


);


})


}


</div>


</section>









{/* ACHIEVEMENTS */}



<section>


<h2 className="
text-3xl
font-black
"
>

Achievements

</h2>




<div className="
mt-6
grid
gap-5
md:grid-cols-3
"
>


<Badge
icon={<Lock/>}
name="First Exploit"
/>


<Badge
icon={<Shield/>}
name="Security Learner"
/>


<Badge
icon={<Crown/>}
name="CTF Rookie"
/>


</div>



</section>









</div>

);

}







function Stat({

icon,
title,
value

}:{

icon:React.ReactNode;

title:string;

value:string;

}){


return (

<div className="
rounded-2xl
border
border-white/10
bg-white/5
p-5
"
>


<div className="
text-cyan-400
"
>

{icon}

</div>


<p className="
mt-3
text-sm
text-slate-400
"
>

{title}

</p>


<h3 className="
mt-2
text-xl
font-bold
"
>

{value}

</h3>


</div>


);


}







function Badge({

icon,
name

}:{

icon:React.ReactNode;

name:string;

}){


return (

<div className="
flex
items-center
gap-3
rounded-2xl
border
border-white/10
bg-white/5
p-5
transition
hover:-translate-y-1
hover:border-cyan-400/40
"
>


<div className="
text-yellow-400
"
>

{icon}

</div>


<span className="
font-bold
"
>

{name}

</span>


</div>

);


}