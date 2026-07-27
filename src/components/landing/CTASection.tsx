"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";


export default function CTASection(){

return (

<section
className="
mx-auto
max-w-7xl
px-6
py-24
"
>


<motion.div

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

className="
relative
overflow-hidden
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-br
from-cyan-500/10
via-purple-500/10
to-transparent
p-10
text-center
md:p-16
"

>


<div
className="
absolute
inset-0
bg-gradient-to-r
from-cyan-400/5
to-purple-500/5
blur-3xl
"
/>



<div className="relative">


<div
className="
mx-auto
mb-6
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-cyan-400
"
>

<Shield size={32}/>

</div>



<h2
className="
text-4xl
font-black
text-white
md:text-6xl
"
>

Ready To Become
<br/>

<span
className="
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
"
>

Cyber Elite?

</span>

</h2>



<p
className="
mx-auto
mt-6
max-w-2xl
text-lg
text-slate-400
"
>

Start your cybersecurity journey with
interactive labs, challenges and AI-powered
security training.

</p>



<div
className="
mt-10
flex
justify-center
"
>


<Link
href="/register"
className="
flex
items-center
rounded-xl
bg-gradient-to-r
from-cyan-400
to-purple-500
px-8
py-4
font-bold
text-black
transition
hover:scale-105
"
>

Get Started

<ArrowRight
className="ml-2"
size={18}
/>

</Link>


</div>


</div>


</motion.div>


</section>

);

}