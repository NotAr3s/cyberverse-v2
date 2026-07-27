import React from "react";


export default function CyberCard({
children,
className=""
}:{
children:React.ReactNode;
className?:string;
}){


return (

<div

className={`
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-xl
shadow-[0_0_40px_rgba(6,182,212,0.05)]
transition
duration-300
hover:border-cyan-400/30
hover:bg-white/[0.07]
${className}
`}

>

{children}

</div>

);


}