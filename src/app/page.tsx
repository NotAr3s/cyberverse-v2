import Link from "next/link";
import { Shield, Terminal, Trophy, Brain } from "lucide-react";


const features = [
  {
    title: "Interactive Labs",
    description: "Practice cybersecurity through hands-on exercises.",
    icon: Shield,
    href: "/labs",
  },
  {
    title: "SOC Dashboard",
    description: "Track your learning progress and achievements.",
    icon: Terminal,
    href: "/dashboard",
  },
  {
    title: "CTF Arena",
    description: "Solve challenges and earn XP.",
    icon: Trophy,
    href: "/ctf",
  },
  {
    title: "AI Security",
    description: "Explore AI-powered security tools.",
    icon: Brain,
    href: "/ai",
  },
];


export default function Home() {


return (

<main className="min-h-screen bg-slate-950 text-white">


<section className="mx-auto max-w-7xl px-6 py-24">


<div className="text-center">


<p className="
mb-4
inline-flex
rounded-full
border
border-cyan-500/30
bg-cyan-500/10
px-4
py-1
text-sm
text-cyan-300
">

CyberVerse Platform

</p>




<h1 className="
text-6xl
font-extrabold
leading-tight
">

Learn

<span className="text-cyan-400">

 Cybersecurity 

</span>

Through Practice

</h1>




<p className="
mx-auto
mt-8
max-w-3xl
text-lg
text-gray-400
">

Build practical cybersecurity skills through interactive labs,
challenges, simulations, and AI-powered learning.

</p>





<div className="
mt-10
flex
flex-wrap
justify-center
gap-4
">


<Link

href="/dashboard"

className="
rounded-xl
bg-cyan-400
px-8
py-4
font-semibold
text-black
transition
hover:bg-cyan-300
"

>

Open Dashboard

</Link>




<Link

href="/labs"

className="
rounded-xl
border
border-cyan-400
px-8
py-4
transition
hover:bg-cyan-400
hover:text-black
"

>

Explore Labs

</Link>



</div>





{/* LOGIN REGISTER */}


<div className="
mt-6
flex
justify-center
gap-4
">


<Link

href="/login"

className="
rounded-xl
border
border-white/20
px-8
py-3
transition
hover:bg-white/10
"

>

Login

</Link>




<Link

href="/register"

className="
rounded-xl
bg-purple-600
px-8
py-3
font-semibold
transition
hover:bg-purple-500
"

>

Create Account

</Link>



</div>



</div>







<div className="
mt-20
grid
gap-6
md:grid-cols-2
lg:grid-cols-4
">


{

features.map((feature)=>{


const Icon = feature.icon;



return (

<Link

key={feature.title}

href={feature.href}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
transition
hover:border-cyan-400
hover:bg-white/10
"

>


<Icon

className="
mb-4
h-10
w-10
text-cyan-400
"

/>



<h2 className="
text-xl
font-bold
">

{feature.title}

</h2>




<p className="
mt-3
text-gray-400
">

{feature.description}

</p>



</Link>


)


})


}


</div>





</section>


</main>

);


}