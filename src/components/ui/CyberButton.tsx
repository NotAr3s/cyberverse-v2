import React from "react";


export default function CyberButton({

children,
className=""

}:{

children:React.ReactNode;
className?:string;

}){


return (

<button

className={`
rounded-xl
bg-gradient-to-r
from-cyan-400
to-violet-500
px-6
py-3
font-semibold
text-black
transition
duration-300
hover:scale-105
hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
${className}
`}

>

{children}

</button>

);


}