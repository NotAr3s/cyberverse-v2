"use client";

import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";


export default function ProtectedLayout({

children,

}: {

children: React.ReactNode;

}) {


return (

<div
className="
relative
flex
min-h-screen
overflow-hidden
bg-[#030712]
text-white
"
>


{/* Background Glow */}

<div
className="
pointer-events-none
absolute
inset-0
bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_30%)]
"
/>




{/* Sidebar */}

<aside
className="
relative
z-20
"
>

<Sidebar />

</aside>





{/* Main Content */}

<motion.main

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.4
}}

className="
relative
z-10
flex-1
min-w-0
overflow-x-hidden
"
>


<div
className="
min-h-screen
p-6
md:p-10
"
>

{children}

</div>


</motion.main>



</div>

);

}