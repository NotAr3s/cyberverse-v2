"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Crown,
  Medal,
  Shield
} from "lucide-react";



const players = [

{
rank:1,
name:"ShadowRoot",
xp:9850,
level:"Elite Hacker"
},

{
rank:2,
name:"ZeroTrace",
xp:8200,
level:"Security Analyst"
},

{
rank:3,
name:"CyberNova",
xp:7600,
level:"Security Analyst"
},

{
rank:4,
name:"PacketGhost",
xp:5400,
level:"Cyber Expert"
},

{
rank:5,
name:"RootHunter",
xp:4300,
level:"Intermediate"
}

];





export default function Leaderboard(){


return (

<div className="
space-y-10
"
>





{/* HEADER */}


<div>

<div className="
flex
items-center
gap-3
"
>

<Trophy
size={38}
className="text-yellow-400"
/>


<h1 className="
text-4xl
md:text-5xl
font-black
"
>

CyberVerse Leaderboard

</h1>


</div>



<p className="
mt-3
text-slate-400
"
>

Compete with hackers worldwide and climb the ranks.

</p>


</div>









{/* TOP THREE */}


<div className="
grid
gap-6
md:grid-cols-3
"
>


{

players.slice(0,3).map((player,index)=>(


<motion.div

key={player.name}

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
"

>


{

index===0

?

<Crown
className="mx-auto text-yellow-400"
size={40}
/>

:

<Medal
className="mx-auto text-cyan-400"
size={40}
/>

}



<h2 className="
mt-5
text-2xl
font-black
"
>

#{player.rank}

</h2>


<p className="
mt-2
text-xl
font-bold
"
>

{player.name}

</p>



<p className="
mt-3
text-cyan-400
font-bold
"
>

{player.xp} XP

</p>



<p className="
mt-2
text-slate-400
"
>

{player.level}

</p>


</motion.div>


))


}


</div>









{/* FULL RANKING */}


<div className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
"
>


<h2 className="
text-2xl
font-black
mb-6
"
>

Global Ranking

</h2>





<div className="
space-y-4
"
>


{

players.map(player=>(


<div

key={player.rank}

className="
flex
items-center
justify-between
rounded-xl
border
border-white/10
bg-black/20
p-5
"

>


<div className="
flex
items-center
gap-4
"
>


<div className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-cyan-400/10
text-cyan-400
font-bold
"
>

{player.rank}

</div>




<div>

<h3 className="
font-bold
"
>

{player.name}

</h3>


<p className="
text-sm
text-slate-400
"
>

{player.level}

</p>


</div>



</div>






<div className="
flex
items-center
gap-2
text-yellow-400
font-bold
"
>


<Shield size={18}/>

{player.xp} XP


</div>



</div>


))


}



</div>


</div>







</div>

);


}