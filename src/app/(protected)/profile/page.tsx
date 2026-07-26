"use client";

import { useState } from "react";
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
} from "lucide-react";

import { useProgress } from "@/context/ProgressContext";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";


export default function Profile() {


const {theme}=useTheme();

const style =
themes[theme as keyof typeof themes];


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



const [skills,setSkills]=useState([
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
]);



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





return (

<div className="
min-h-screen
bg-black
text-white
p-10
">


{/* HEADER */}

<div className="flex justify-between items-center">


<div>

<h1 className={`
text-4xl
font-bold
${style.text}
`}>
Security Profile
</h1>


<p className="
text-gray-400
mt-2
">
Manage your CyberVerse identity and achievements
</p>


</div>



<button

onClick={()=>setEditing(!editing)}

className="
flex
items-center
gap-2
px-5
py-3
rounded-xl
bg-white/10
border
border-gray-700
hover:bg-white/20
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
Edit Profile
</>
}


</button>


</div>







{/* PROFILE CARD */}

<div className="
mt-8
bg-white/5
border
border-gray-800
rounded-3xl
p-8
max-w-5xl
">


<div className="
flex
gap-6
items-center
">


<div className={`
w-28
h-28
rounded-full
flex
items-center
justify-center
text-4xl
font-bold
${style.button}
`}>

CV

</div>



<div>


{
editing
?

<input

value={username}

onChange={(e)=>
setUsername(e.target.value)
}

className="
bg-black
border
border-gray-700
rounded-lg
p-2
text-2xl
font-bold
"

/>

:

<h2 className="
text-3xl
font-bold
">
{username}
</h2>

}


<p className="text-gray-400 mt-2">
Cybersecurity Researcher
</p>


<div className="
flex
gap-3
mt-3
">

<span className="
px-3
py-1
rounded-full
bg-green-500/20
text-green-400
text-sm
">

● Online

</span>


<span className="
px-3
py-1
rounded-full
bg-blue-500/20
text-blue-400
text-sm
">

{rank}

</span>


</div>


</div>


</div>








{/* STATS */}

<div className="
grid
md:grid-cols-4
gap-5
mt-10
">


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







{/* SKILLS */}

<h2 className="
text-2xl
font-bold
mt-10
">
Security Skills
</h2>


<div className="
mt-5
space-y-5
">


{
skills.map((skill)=>{


const Icon=skill.icon;


return (

<div
key={skill.name}
>


<div className="
flex
justify-between
mb-2
">

<div className="flex gap-2 items-center">

<Icon size={18}/>

{skill.name}

</div>


<span>
{skill.value}%
</span>

</div>


<div className="
h-3
bg-gray-800
rounded-full
">

<div

className={`
h-3
rounded-full
${style.button}
`}

style={{
width:`${skill.value}%`
}}

/>


</div>


</div>

)

})

}


</div>








{/* BADGES */}

<h2 className="
text-2xl
font-bold
mt-10
">
Achievements
</h2>


<div className="
grid
md:grid-cols-3
gap-5
mt-5
">


<Badge
icon={<Lock/>}
name="First Exploit"
/>


<Badge
icon={<Shield/>}
name="Security Learner"
/>


<Badge
icon={<Trophy/>}
name="CTF Rookie"
/>


</div>



</div>


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
bg-black/40
border
border-gray-800
rounded-xl
p-5
">

<div className="text-cyan-400">
{icon}
</div>

<p className="
text-gray-400
mt-3
">
{title}
</p>

<h3 className="
text-xl
font-bold
mt-1
">
{value}
</h3>


</div>

)

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
bg-white/5
border
border-gray-800
rounded-xl
p-5
flex
items-center
gap-3
hover:scale-105
transition
">

<div className="text-yellow-400">
{icon}
</div>

{name}

</div>

)

}