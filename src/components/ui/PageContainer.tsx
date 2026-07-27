import React from "react";


export default function PageContainer({

children

}:{

children:React.ReactNode;

}){


return (

<div

className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
px-6
py-10
text-white
"

>


{/* Background Grid */}

<div

className="
pointer-events-none
absolute
inset-0
opacity-[0.04]
"

style={{

backgroundImage:`
linear-gradient(
white 1px,
transparent 1px
),
linear-gradient(
90deg,
white 1px,
transparent 1px
)
`,
backgroundSize:"50px 50px"

}}

/>


<div

className="
relative
z-10
mx-auto
max-w-7xl
"

>

{children}

</div>


</div>

);


}