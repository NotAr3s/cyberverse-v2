"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseSpotlight(){

const [position,setPosition] = useState({
x:0,
y:0
});


useEffect(()=>{

const move = (e:MouseEvent)=>{

setPosition({
x:e.clientX,
y:e.clientY
});

};


window.addEventListener(
"mousemove",
move
);


return ()=>{

window.removeEventListener(
"mousemove",
move
);

};


},[]);



return (

<motion.div

animate={{

x:position.x-250,

y:position.y-250

}}

transition={{

type:"spring",

damping:30,

stiffness:100

}}

className="
pointer-events-none
fixed
left-0
top-0
z-[-1]

h-[500px]
w-[500px]
rounded-full
bg-cyan-400/10
blur-[120px]
"

/>

);

}