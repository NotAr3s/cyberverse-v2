"use client";

import Link from "next/link";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";
import { useProgress } from "@/context/ProgressContext";
import { useAuth } from "@/context/AuthContext";

import CyberCard from "@/components/ui/CyberCard";
import CyberButton from "@/components/ui/CyberButton";
import PageContainer from "@/components/ui/PageContainer";



export default function Dashboard(){


const { theme } = useTheme();

const style =
themes[theme as keyof typeof themes];


const {
xp,
completedLabs,
completedChallenges
}=useProgress();


const {
user
}=useAuth();





const level =
xp < 1000
?
"Beginner"
:
xp < 3000
?
"Intermediate"
:
"Cyber Expert";





const progress =
Math.min(
(xp / 5000) * 100,
100
);






return (

<PageContainer>


<div className="mb-10">


<h1
className="
text-4xl
font-black
md:text-5xl
"
>

Welcome,
<span className="text-cyan-400">
{" "}
{user?.username || "Cyber Recruit"}
</span>

</h1>


<p className="mt-3 text-slate-400">

Your cybersecurity command center.

</p>


</div>







{/* STATS */}

<div
className="
grid
gap-6
md:grid-cols-4
"
>


<StatCard
title="Security Level"
value={level}
/>


<StatCard
title="Experience"
value={`${xp} XP`}
/>


<StatCard
title="Labs Completed"
value={String(completedLabs.length)}
/>


<StatCard
title="Challenges"
value={String(completedChallenges.length)}
/>


</div>







{/* PROGRESS */}


<CyberCard
className="
mt-8
p-8
"
>


<div className="flex justify-between">


<h2 className="text-2xl font-bold">

Security Progress

</h2>


<span className="text-cyan-400">

{Math.round(progress)}%

</span>


</div>




<div
className="
mt-6
h-4
rounded-full
bg-black/40
overflow-hidden
"
>


<div

className="
h-full
rounded-full
bg-gradient-to-r
from-cyan-400
to-violet-500
"

style={{

width:`${progress}%`

}}

/>


</div>



<p className="mt-4 text-slate-400">

Keep completing missions to increase your security level.

</p>


</CyberCard>







{/* MISSIONS */}


<h2
className="
mt-12
mb-6
text-3xl
font-bold
"
>

Active Missions

</h2>



<div
className="
grid
gap-6
md:grid-cols-3
"
>


<MissionCard

title="🧪 Cyber Labs"

text="Practice real vulnerabilities and security concepts."

href="/labs"

/>


<MissionCard

title="⚔ CTF Arena"

text="Solve challenges and earn XP."

href="/ctf"

/>


<MissionCard

title="🏆 Leaderboard"

text="Track your global ranking."

href="/leaderboard"

/>


</div>





</PageContainer>

);


}







function StatCard({

title,
value

}:{

title:string;
value:string;

}){


return (

<CyberCard
className="
p-6
"
>


<p className="text-sm text-slate-400">

{title}

</p>


<h2
className="
mt-3
text-3xl
font-black
text-cyan-400
"
>

{value}

</h2>


</CyberCard>

);


}








function MissionCard({

title,
text,
href

}:{

title:string;
text:string;
href:string;

}){


return (

<CyberCard
className="
p-6
"
>


<h3
className="
text-xl
font-bold
"
>

{title}

</h3>


<p
className="
mt-3
text-slate-400
"
>

{text}

</p>



<Link href={href}>


<CyberButton
className="
mt-6
w-full
"
>

Open Mission

</CyberButton>


</Link>



</CyberCard>

);


}