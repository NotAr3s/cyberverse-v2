"use client";

import { motion } from "framer-motion";

const particles = [
  [10, 20],
  [25, 70],
  [40, 35],
  [55, 80],
  [70, 25],
  [85, 60],
  [15, 85],
  [35, 15],
  [60, 50],
  [90, 30],
  [45, 90],
  [75, 75],
  [20, 45],
  [50, 10],
  [80, 40],
];


export default function AnimatedBackground() {

return (

<div className="fixed inset-0 -z-0 overflow-hidden bg-[#030712]">


{/* Cyan Glow */}

<motion.div

animate={{
x:[0,120,0],
y:[0,60,0],
scale:[1,1.2,1]
}}

transition={{
duration:12,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
left-[-200px]
top-[-100px]
h-[600px]
w-[600px]
rounded-full
bg-cyan-500/30
blur-[160px]
"

/>



{/* Purple Glow */}

<motion.div

animate={{
x:[0,-100,0],
y:[0,-50,0],
scale:[1,1.3,1]
}}

transition={{
duration:15,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
right-[-200px]
bottom-[-150px]
h-[600px]
w-[600px]
rounded-full
bg-purple-500/30
blur-[160px]
"

/>



{/* Grid */}

<div

className="
absolute
inset-0
opacity-20
"

style={{

backgroundImage:`
linear-gradient(
rgba(255,255,255,.12) 1px,
transparent 1px
),
linear-gradient(
90deg,
rgba(255,255,255,.12) 1px,
transparent 1px
)
`,

backgroundSize:"45px 45px"

}}

/>



{/* Particles */}

{
particles.map(([x,y],i)=>(

<motion.div

key={i}

animate={{

y:[0,-40,0],

opacity:[
0.2,
1,
0.2
]

}}

transition={{

duration:3+i%4,

repeat:Infinity,

delay:i*.2

}}

className="
absolute
h-1.5
w-1.5
rounded-full
bg-cyan-300
shadow-[0_0_15px_#22d3ee]
"

style={{

left:`${x}%`,

top:`${y}%`

}}

/>

))
}



{/* Dark overlay */}

<div

className="
absolute
inset-0
bg-gradient-to-b
from-transparent
via-[#030712]/40
to-[#030712]
"

/>


</div>

)

}