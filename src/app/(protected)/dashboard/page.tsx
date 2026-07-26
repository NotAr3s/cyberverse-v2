"use client";

import Link from "next/link";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";
import { useProgress } from "@/context/ProgressContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Dashboard(){


const {
theme
}=useTheme();


const style =
themes[theme as keyof typeof themes];


const {

xp,

completedLabs,

completedChallenges

}=useProgress();





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





const stats=[


{
title:"Security Level",
value:level
},


{
title:"XP Points",
value:`${xp} XP`
},


{
title:"Labs Completed",
value:String(completedLabs.length)
},


{
title:"Challenges Solved",
value:String(completedChallenges.length)
}


];





const progress =
Math.min(
(xp/5000)*100,
100
);







}