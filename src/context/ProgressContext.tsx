"use client";

import {
createContext,
useContext,
useState,
useEffect
} from "react";


type ProgressContextType = {

xp:number;

completedLabs:string[];

completedChallenges:string[];

completeLab:
(
name:string,
xp:number
)=>void;


completeChallenge:
(
name:string,
xp:number
)=>void;

};



const ProgressContext =
createContext<ProgressContextType | null>(null);



export function ProgressProvider({

children

}:{
children:React.ReactNode

}){


const [xp,setXp]=useState(0);


const [completedLabs,setCompletedLabs]
=
useState<string[]>([]);



const [completedChallenges,setCompletedChallenges]
=
useState<string[]>([]);





useEffect(()=>{


const savedXP =
localStorage.getItem("xp");


const labs =
localStorage.getItem("completedLabs");


const challenges =
localStorage.getItem("completedChallenges");



if(savedXP)
setXp(Number(savedXP));



if(labs)
setCompletedLabs(JSON.parse(labs));



if(challenges)
setCompletedChallenges(JSON.parse(challenges));



},[]);





function completeLab(

name:string,

reward:number

){


if(
completedLabs.includes(name)
)
return;



const updated=[
...completedLabs,
name
];


setCompletedLabs(updated);



const newXP =
xp + reward;


setXp(newXP);



localStorage.setItem(
"completedLabs",
JSON.stringify(updated)
);


localStorage.setItem(
"xp",
String(newXP)
);



}




function completeChallenge(

name:string,

reward:number

){


if(
completedChallenges.includes(name)
)
return;



const updated=[
...completedChallenges,
name
];


setCompletedChallenges(updated);



const newXP =
xp + reward;


setXp(newXP);



localStorage.setItem(
"completedChallenges",
JSON.stringify(updated)
);


localStorage.setItem(
"xp",
String(newXP)
);



}





return (

<ProgressContext.Provider

value={{

xp,

completedLabs,

completedChallenges,

completeLab,

completeChallenge

}}

>


{children}


</ProgressContext.Provider>


);


}





export function useProgress(){


const context =
useContext(ProgressContext);



if(!context){

throw new Error(
"useProgress must be inside ProgressProvider"
);

}



return context;


}