import Link from "next/link";
import {
  Shield,
  Globe,
  Mail,
  Users
} from "lucide-react";


export default function Footer(){

return (

<footer
className="
border-t
border-white/10
bg-black/20
px-6
py-12
"
>


<div
className="
mx-auto
max-w-7xl
"
>


<div
className="
grid
gap-10
md:grid-cols-4
"
>


{/* BRAND */}

<div>

<div
className="
flex
items-center
gap-2
text-xl
font-bold
text-white
"
>

<Shield
className="text-cyan-400"
/>

CyberVerse

</div>


<p
className="
mt-4
text-sm
text-slate-400
"
>

Premium cybersecurity learning platform
built for the next generation of security
professionals.

</p>


</div>





{/* PLATFORM */}

<div>

<h3 className="font-bold text-white">
Platform
</h3>


<div
className="
mt-4
space-y-3
text-sm
text-slate-400
"
>

<Link href="/labs">
Labs
</Link>

<br/>

<Link href="/ctf">
CTF Arena
</Link>

<br/>

<Link href="/dashboard">
Dashboard
</Link>

<br/>

<Link href="/leaderboard">
Leaderboard
</Link>


</div>

</div>





{/* RESOURCES */}

<div>

<h3 className="font-bold text-white">
Resources
</h3>


<div
className="
mt-4
space-y-3
text-sm
text-slate-400
"
>

<p>
Documentation
</p>

<p>
Security Blog
</p>

<p>
Community
</p>

<p>
Support
</p>


</div>

</div>





{/* CONNECT */}

<div>

<h3 className="font-bold text-white">
Connect
</h3>


<div
className="
mt-4
space-y-3
text-sm
text-slate-400
"
>

<div className="flex items-center gap-2">

<Globe size={16}/>

CyberVerse Network

</div>


<div className="flex items-center gap-2">

<Users size={16}/>

Community Hub

</div>


<div className="flex items-center gap-2">

<Mail size={16}/>

Contact Support

</div>


</div>


</div>


</div>





<div
className="
mt-12
border-t
border-white/10
pt-6
text-center
text-sm
text-slate-500
"
>

© {new Date().getFullYear()} CyberVerse. All rights reserved.

</div>


</div>


</footer>

);

}