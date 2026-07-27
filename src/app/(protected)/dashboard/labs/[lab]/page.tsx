"use client";

import { use } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  Shield,
  Terminal,
  Trophy,
  ExternalLink,
  CheckCircle,
  Target
} from "lucide-react";


import { labs } from "@/data/labs";

import { useProgress } from "@/context/ProgressContext";

import PageContainer from "@/components/ui/PageContainer";
import CyberCard from "@/components/ui/CyberCard";



export default function LabPage({

params

}:{

params:Promise<{
lab:string
}>

}){


const {lab:labId}=use(params);



const {
completeLab
}=useProgress();



const [completed,setCompleted]=useState(false);

const [message,setMessage]=useState("");




const lab =
labs.find(
(item)=>item.id===labId
);





if(!lab){

return(

<PageContainer>

<CyberCard className="p-10">

<h1 className="text-3xl font-black">
Lab Not Found
</h1>

<p className="mt-3 text-slate-400">
The requested cybersecurity mission does not exist.
</p>

</CyberCard>

</PageContainer>

);

}






async function finishLab(){


try{


const res =
await fetch(
"/api/progress/lab",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

labId:lab.id,

title:lab.title,

xp:lab.xp

})

}

);



const data =
await res.json();



if(!res.ok){

setMessage(
data.message || "Failed"
);

return;

}




completeLab(
lab.title,
lab.xp
);



setCompleted(true);


setMessage(
"✅ Lab completed and XP added"
);



}

catch(error){


setMessage(
"Server error"
);


}


}






return(

<PageContainer>



<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="mb-10"

>


<div className="
flex
items-center
gap-3
">


<Shield
size={36}
className="text-cyan-400"
/>


<h1 className="
text-5xl
font-black
">

{lab.title}

</h1>


</div>




<p className="
mt-4
max-w-3xl
text-slate-400
">

{lab.description}

</p>


</motion.div>







<div className="
grid
gap-6
md:grid-cols-3
">


<InfoCard

icon={<Target/>}

title="Difficulty"

value={lab.difficulty}

/>



<InfoCard

icon={<Trophy/>}

title="Reward"

value={`${lab.xp} XP`}

/>



<InfoCard

icon={<Terminal/>}

title="Platform"

value={lab.platform}

/>


</div>








<CyberCard

className="
mt-10
p-8
"

>


<h2 className="
flex
items-center
gap-2
text-3xl
font-black
">


<Terminal
className="text-cyan-400"
/>


Mission Brief


</h2>





<p className="
mt-4
text-slate-400
">

Complete this cybersecurity exercise and improve your
practical security skills.

</p>








<div className="
mt-8
rounded-xl
border
border-white/10
bg-black/50
p-5
font-mono
text-sm
">


<p className="text-green-400">

$ cyberverse init {lab.id}

</p>



<p className="mt-3 text-slate-400">

&gt; loading environment...

<br/>

&gt; vulnerability modules loaded

<br/>

&gt; mission ready

</p>


</div>








<div className="
mt-8
rounded-xl
bg-white/5
p-6
">


<h3 className="
text-xl
font-bold
">

Objectives

</h3>



<ul className="
mt-4
space-y-3
text-slate-400
">


<li className="flex gap-2">

<CheckCircle
size={18}
className="text-cyan-400"
/>

Understand vulnerability

</li>



<li className="flex gap-2">

<CheckCircle
size={18}
className="text-cyan-400"
/>

Complete practical exercise

</li>



<li className="flex gap-2">

<CheckCircle
size={18}
className="text-cyan-400"
/>

Submit completion

</li>


</ul>


</div>








<div className="
mt-8
flex
flex-wrap
gap-4
">



<a

href={lab.url}

target="_blank"

className="
flex
items-center
gap-2
rounded-xl
bg-gradient-to-r
from-cyan-400
to-violet-500
px-6
py-3
font-bold
text-black
hover:scale-105
transition
"

>

Launch Lab

<ExternalLink size={18}/>

</a>







<button

disabled={completed}

onClick={finishLab}

className="
flex
items-center
gap-2
rounded-xl
border
border-white/10
bg-white/5
px-6
py-3
font-bold
hover:bg-white/10
transition
disabled:opacity-50
"

>


<CheckCircle size={18}/>


{
completed
?
"Completed ✓"
:
"Mark Completed"
}


</button>



</div>





{
message &&

<p className="
mt-5
font-bold
text-cyan-400
">

{message}

</p>

}




</CyberCard>






</PageContainer>


);

}








function InfoCard({

icon,
title,
value

}:{

icon:React.ReactNode;
title:string;
value:string;

}){


return(

<CyberCard className="p-6">


<div className="text-cyan-400">

{icon}

</div>


<p className="
mt-4
text-sm
text-slate-400
">

{title}

</p>


<h2 className="
mt-2
text-xl
font-bold
">

{value}

</h2>


</CyberCard>

);


}