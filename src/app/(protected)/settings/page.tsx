"use client";

import { useState } from "react";

import {
  ShieldCheck,
  Bell,
  Monitor,
  Save,
  Trash2,
  KeyRound,
  Palette,
} from "lucide-react";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";



export default function Settings() {


const {
  theme,
  changeTheme
}=useTheme();


const style =
themes[theme as keyof typeof themes];



const [twoFA,setTwoFA]=useState(true);

const [saved,setSaved]=useState(false);



const [notifications,setNotifications]=useState({

security:true,
labs:true,
challenges:true,
leaderboard:false

});





function saveSettings(){

setSaved(true);

setTimeout(()=>{

setSaved(false);

},2000);

}






return (

<div
className="
min-h-screen
bg-[#030712]
text-white
p-6
md:p-10
"
>



{/* HEADER */}


<div>


<h1
className="
text-4xl
md:text-5xl
font-black
bg-gradient-to-r
from-cyan-400
to-violet-500
bg-clip-text
text-transparent
"
>

Security Settings

</h1>


<p
className="
mt-3
text-slate-400
"
>

Manage your CyberVerse security and platform preferences.

</p>


</div>








{/* SECURITY */}


<Section>


<Header

icon={<ShieldCheck/>}

title="Account Security"

/>



<div
className="
mt-6
space-y-5
"
>



<Row

title="Two Factor Authentication"

description="Protect your account with additional verification."

>


<Toggle

enabled={twoFA}

setEnabled={setTwoFA}

/>


</Row>





<Row

title="Password Security"

description="Last password update: 30 days ago"

>


<KeyRound
className="
text-cyan-400
"
/>


</Row>



</div>


</Section>









{/* NOTIFICATIONS */}


<Section>


<Header

icon={<Bell/>}

title="Notifications"

/>



<div
className="
mt-6
space-y-4
"
>


{
Object.entries(notifications).map(([key,value])=>(


<Row

key={key}

title={key}

description="Receive CyberVerse activity updates."

>


<button

onClick={()=>

setNotifications({

...notifications,

[key]:!value

})

}

className={`

px-5
py-2
rounded-xl
font-bold
transition

${
value

?

"bg-green-400/20 text-green-400 border border-green-400/30"

:

"bg-white/10 text-slate-400"

}

`}

>

{
value
?
"Enabled"
:
"Disabled"
}


</button>


</Row>


))

}


</div>


</Section>









{/* APPEARANCE */}


<Section>


<Header

icon={<Palette/>}

title="Appearance"

/>



<div
className="
mt-6
flex
gap-4
flex-wrap
"
>


{
Object.keys(themes).map((item)=>(


<button

key={item}

onClick={()=>changeTheme(item as keyof typeof themes)}

className={`

px-6
py-3
rounded-xl
border
transition
font-semibold


${
theme===item

?

"bg-gradient-to-r from-cyan-400 to-violet-500 text-black border-transparent"

:

"bg-white/5 border-white/10 text-slate-300 hover:border-cyan-400"

}

`}

>

{item}


</button>


))

}


</div>


</Section>









{/* SESSION */}


<Section>


<Header

icon={<Monitor/>}

title="Active Sessions"

/>



<div
className="
mt-6
rounded-2xl
bg-black/40
border
border-white/10
p-5
flex
justify-between
items-center
"
>


<div>

<h3 className="font-bold">

Windows Chrome

</h3>


<p
className="
text-sm
text-slate-400
"
>

Current session

</p>


</div>


<span
className="
text-green-400
font-bold
"
>

● Active

</span>


</div>


</Section>









{/* SAVE */}


<button

onClick={saveSettings}

className={`

mt-8
flex
items-center
gap-3
px-8
py-4
rounded-xl
font-black
transition
hover:scale-105

${style.button}

`}

>


<Save/>


{
saved

?

"Saved Successfully"

:

"Save Settings"

}


</button>









{/* DANGER */}


<div

className="
mt-10
rounded-3xl
border
border-red-500/30
bg-red-500/10
p-6
"

>


<div
className="
flex
items-center
gap-3
text-red-400
text-xl
font-bold
"
>

<Trash2/>

Danger Zone

</div>



<p
className="
mt-3
text-slate-400
"
>

Delete your CyberVerse account permanently.

</p>



<button

className="
mt-5
px-6
py-3
rounded-xl
bg-red-500
font-bold
hover:bg-red-600
transition
"

>

Delete Account

</button>


</div>






</div>

);

}








function Section({

children

}:{

children:React.ReactNode

}){


return (

<section

className="
mt-8
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-6
md:p-8
shadow-xl
hover:border-cyan-400/20
transition
"

>

{children}

</section>

);

}








function Header({

icon,
title

}:{

icon:React.ReactNode;
title:string;

}){


return (

<div
className="
flex
items-center
gap-3
text-xl
font-bold
"
>


<span
className="
text-cyan-400
"
>

{icon}

</span>


{title}


</div>

);

}








function Row({

title,
description,
children

}:{

title:string;
description:string;
children:React.ReactNode;

}){


return (

<div

className="
flex
items-center
justify-between
gap-4
rounded-2xl
bg-black/30
border
border-white/10
p-5
"

>


<div>


<h3
className="
font-bold
capitalize
"
>

{title}

</h3>


<p
className="
text-sm
text-slate-400
mt-1
"
>

{description}

</p>


</div>



{children}


</div>

);

}








function Toggle({

enabled,
setEnabled

}:{

enabled:boolean;
setEnabled:(value:boolean)=>void;

}){


return (

<button

onClick={()=>setEnabled(!enabled)}

className={`

w-16
h-8
rounded-full
p-1
transition

${
enabled

?

"bg-cyan-400"

:

"bg-gray-700"

}

`}

>


<div

className={`

h-6
w-6
rounded-full
bg-white
transition


${
enabled

?

"translate-x-8"

:

"translate-x-0"

}

`}

/>


</button>

);

}