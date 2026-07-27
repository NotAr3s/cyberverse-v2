"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  LayoutDashboard,
  FlaskConical,
  Trophy,
  Settings,
  User,
  Flag,
  LogOut,
  Shield,
  Terminal,
  Crown
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";


const menu = [

{
name:"Home",
href:"/",
icon:Home
},

{
name:"Dashboard",
href:"/dashboard",
icon:LayoutDashboard
},

{
name:"Labs",
href:"/dashboard/labs",
icon:FlaskConical
},

{
name:"Challenges",
href:"/dashboard/challenges",
icon:Trophy
},

{
name:"CTF Arena",
href:"/dashboard/ctf",
icon:Flag
},

{
name:"Leaderboard",
href:"/leaderboard",
icon:Crown
},

{
name:"Profile",
href:"/profile",
icon:User
},

{
name:"Settings",
href:"/settings",
icon:Settings
}

];




export default function Sidebar(){


const pathname = usePathname();

const {
user,
logout
}=useAuth();




return (

<aside

className="
hidden
md:flex
sticky
top-0
h-screen
w-72
flex-col
border-r
border-white/10
bg-[#050816]/80
backdrop-blur-2xl
p-6
"

>


{/* LOGO */}

<Link

href="/"

className="
flex
items-center
gap-3
mb-10
"

>

<div
className="
rounded-xl
bg-cyan-400/10
p-3
shadow-lg
shadow-cyan-400/10
"
>

<Shield className="text-cyan-400"/>

</div>


<div>

<h1 className="
text-2xl
font-black
text-white
">

Cyber<span className="text-cyan-400">
Verse
</span>

</h1>


<p className="
text-xs
text-slate-500
">

Security Platform

</p>


</div>


</Link>





{/* USER CARD */}

<div

className="
rounded-2xl
border
border-white/10
bg-white/5
p-4
mb-8
"

>

<div className="
flex
items-center
gap-3
">

<div

className="
h-11
w-11
rounded-full
bg-gradient-to-r
from-cyan-400
to-violet-500
flex
items-center
justify-center
font-black
text-black
"

>

{
user?.username?.charAt(0) || "C"
}

</div>



<div>

<p className="
font-bold
text-white
">

{
user?.username || "Cyber Recruit"
}

</p>


<p className="
text-xs
text-slate-400
">

Security Level: Beginner

</p>


</div>


</div>



<div className="
mt-5
h-2
rounded-full
bg-black/40
overflow-hidden
">

<div

className="
h-full
w-[35%]
rounded-full
bg-gradient-to-r
from-cyan-400
to-violet-500
"

/>

</div>


<p className="
mt-2
text-xs
text-slate-400
">

XP Progress

</p>


</div>






{/* NAVIGATION */}

<nav className="
flex-1
space-y-2
">


{
menu.map((item)=>{

const Icon = item.icon;


const active =
pathname === item.href ||
pathname.startsWith(item.href + "/");



return (

<Link

key={item.name}

href={item.href}

className={`

group

flex
items-center
gap-3
rounded-xl
px-4
py-3
transition-all
duration-300

${
active

?

"bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shadow-lg shadow-cyan-400/5"

:

"text-slate-400 hover:bg-white/5 hover:text-white"

}

`}

>


<Icon

size={20}

className="
transition-transform
duration-300
group-hover:scale-110
"

/>


<span className="
font-medium
">

{item.name}

</span>


</Link>

);

})

}


</nav>







{/* STATUS */}

<div

className="
rounded-xl
border
border-white/10
bg-black/30
p-4
mb-4
"

>


<div className="
flex
items-center
gap-2
text-green-400
font-mono
text-sm
">

<Terminal size={16}/>

System Online

</div>


<p className="
mt-2
text-xs
text-slate-500
">

Threat monitoring active

</p>


</div>






{/* LOGOUT */}

<button

onClick={logout}

className="
flex
items-center
gap-3
rounded-xl
px-4
py-3
text-red-400
transition
hover:bg-red-400/10
"

>

<LogOut size={20}/>

Logout

</button>



</aside>

);

}