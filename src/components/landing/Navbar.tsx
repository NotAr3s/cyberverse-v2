"use client";

import Link from "next/link";
import { Shield, Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";


const navLinks = [
  {
    name:"Labs",
    href:"/labs",
  },
  {
    name:"Challenges",
    href:"/ctf",
  },
  {
    name:"Leaderboard",
    href:"/leaderboard",
  },
  {
    name:"Pricing",
    href:"/pricing",
  },
];


export default function Navbar(){

const [open,setOpen] = useState(false);
const [scrolled,setScrolled] = useState(false);

const [user,setUser] = useState<any>(null);

const router = useRouter();



useEffect(()=>{


const handleScroll=()=>{

setScrolled(window.scrollY > 20);

};


window.addEventListener(
"scroll",
handleScroll
);


return ()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);





useEffect(()=>{


fetch("/api/auth/me")

.then(res=>res.json())

.then(data=>{

if(data.user){

setUser(data.user);

}

})

.catch(()=>{});


},[]);





async function logout(){

await fetch(
"/api/auth/logout",
{
method:"POST"
}
);


setUser(null);

router.push("/");

}





return (

<motion.header

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

className={`
fixed
top-0
left-0
z-50
w-full
transition-all
duration-300

${
scrolled
?
"bg-[#030712]/80 backdrop-blur-xl border-b border-white/10"
:
"bg-transparent"
}

`}

>


<div
className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-6
"
>


{/* LOGO */}

<Link
href="/"
className="
flex
items-center
gap-3
"
>

<Shield
className="
h-8
w-8
text-cyan-400
"
/>


<span
className="
text-xl
font-bold
text-white
"
>

Cyber
<span className="text-cyan-400">
Verse
</span>

</span>


</Link>






{/* DESKTOP LINKS */}

<nav
className="
hidden
md:flex
items-center
gap-8
"
>


{
navLinks.map(item=>(

<Link

key={item.name}

href={item.href}

className="
text-sm
text-slate-300
hover:text-cyan-400
transition
"

>

{item.name}

</Link>

))

}


</nav>






{/* AUTH */}

<div
className="
hidden
md:flex
items-center
gap-4
"
>


{
user ?

<>

<Link

href="/dashboard"

className="
flex
items-center
gap-2
text-sm
text-white
hover:text-cyan-400
"

>

<User size={16}/>

Dashboard

</Link>


<button

onClick={logout}

className="
rounded-xl
border
border-white/10
px-4
py-2
text-sm
text-slate-300
hover:text-white
"

>

Logout

</button>


</>


:


<>

<Link

href="/login"

className="
text-sm
text-slate-300
hover:text-white
"

>

Login

</Link>


<Link

href="/register"

className="
rounded-xl
bg-gradient-to-r
from-cyan-400
to-violet-500
px-5
py-2.5
text-sm
font-semibold
text-black
hover:scale-105
transition
"

>

Get Started

</Link>


</>

}



</div>






<button

onClick={()=>setOpen(!open)}

className="
text-white
md:hidden
"

>

{
open
?
<X/>
:
<Menu/>
}

</button>


</div>





{/* MOBILE */}

<AnimatePresence>

{

open &&

<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

exit={{
opacity:0,
height:0
}}

className="
md:hidden
overflow-hidden
border-t
border-white/10
bg-[#030712]/95
"

>


<div
className="
flex
flex-col
gap-5
p-6
"
>


{
navLinks.map(item=>(

<Link

key={item.name}

href={item.href}

onClick={()=>setOpen(false)}

className="
text-slate-300
hover:text-cyan-400
"

>

{item.name}

</Link>

))

}



{
user ?

<>

<Link href="/dashboard">
Dashboard
</Link>

<button
onClick={logout}
className="text-left"
>
Logout
</button>

</>

:

<>

<Link href="/login">
Login
</Link>


<Link
href="/register"
className="
rounded-xl
bg-cyan-400
px-5
py-3
text-center
font-semibold
text-black
"
>

Get Started

</Link>

</>

}


</div>


</motion.div>

}


</AnimatePresence>


</motion.header>


);


}