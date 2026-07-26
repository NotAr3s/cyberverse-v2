"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



import {
  LayoutDashboard,
  Shield,
  Flag,
  BookOpen,
  User,
  Settings
} from "lucide-react";


import {useTheme} from "@/context/ThemeContext";
import {themes} from "@/context/themeStyles";



const menu = [

{
name:"Dashboard",
href:"/dashboard",
icon:LayoutDashboard
},

{
name:"Labs",
href:"/labs",
icon:Shield
},

{
name:"Challenges",
href:"/challenges",
icon:Shield
},

{
name:"CTF Arena",
href:"/ctf",
icon:Flag
},

{
name:"Courses",
href:"/courses",
icon:BookOpen
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





export default function (){


const pathname = usePathname();


const {
theme
}=useTheme();


const style = themes[theme as keyof typeof themes];


return (

<aside

className="
fixed
left-0
top-0
h-screen
w-72
bg-black/60
backdrop-blur-xl
border-r
border-gray-800
p-6
"

>



<h1

className={`
text-3xl
font-bold
mb-10
${style.text}
`}

>

CyberVerse

</h1>




<nav className="space-y-3">


{
menu.map(item=>{


const Icon=item.icon;


const active =
pathname===item.href;



return (

<Link

key={item.name}

href={item.href}

className={`

flex
items-center
gap-4
px-4
py-3
rounded-xl
transition


${
active

?

`bg-black/40
${style.text}
${style.border}
border`

:

"text-gray-400 hover:bg-white/5"

}

`}

>


<Icon size={22}/>


<span>
{item.name}
</span>


</Link>


)


})

}



</nav>


</aside>


);


}