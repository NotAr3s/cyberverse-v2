"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Bell,
  Moon,
  Lock,
  Monitor,
  Save,
  Trash2,
  KeyRound,
} from "lucide-react";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";


export default function Settings(){


const {theme,changeTheme}=useTheme();


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

<div className="
min-h-screen
bg-black
text-white
p-10
">


<div>

<h1 className={`
text-4xl
font-bold
${style.text}
`}>
Security Settings
</h1>


<p className="
text-gray-400
mt-2
">
Configure your CyberVerse security preferences.
</p>


</div>






{/* SECURITY */}


<section className="
mt-8
bg-white/5
border
border-gray-800
rounded-2xl
p-6
max-w-5xl
">


<div className="
flex
items-center
gap-3
text-xl
font-bold
">

<ShieldCheck/>

Account Security

</div>




<div className="
mt-6
flex
justify-between
items-center
bg-black/40
p-5
rounded-xl
">


<div>

<h3 className="font-bold">
Two Factor Authentication
</h3>

<p className="
text-gray-400
text-sm
">
Protect your account using an extra verification step.
</p>


</div>



<button

onClick={()=>setTwoFA(!twoFA)}

className={`
w-16
h-8
rounded-full
transition
${twoFA
?
"bg-green-500"
:
"bg-gray-700"
}
`}

>

<div className={`
w-6
h-6
bg-white
rounded-full
transition
${twoFA
?
"translate-x-8"
:
"translate-x-1"
}
`}

/>

</button>



</div>




<div className="
mt-5
flex
items-center
gap-3
bg-black/40
p-5
rounded-xl
">

<KeyRound/>

<p>
Password last changed:
<span className="text-gray-400 ml-2">
30 days ago
</span>
</p>


</div>



</section>








{/* NOTIFICATIONS */}


<section className="
mt-8
bg-white/5
border
border-gray-800
rounded-2xl
p-6
max-w-5xl
">


<div className="
flex
items-center
gap-3
text-xl
font-bold
">

<Bell/>

Notifications

</div>



{

Object.entries(notifications).map(([key,value])=>(


<div

key={key}

className="
mt-5
flex
justify-between
items-center
bg-black/40
rounded-xl
p-4
"

>


<span className="capitalize">
{key.replace("_"," ")}
</span>



<button

onClick={()=>

setNotifications({

...notifications,

[key]:
!value

})

}

className={`
px-4
py-2
rounded-lg
${value
?
"bg-green-500/20 text-green-400"
:
"bg-gray-700"
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



</div>


))

}



</section>









{/* APPEARANCE */}


<section className="
mt-8
bg-white/5
border
border-gray-800
rounded-2xl
p-6
max-w-5xl
">


<div className="
flex
gap-3
items-center
text-xl
font-bold
">

<Moon/>

Appearance

</div>



<div className="
mt-5
flex
gap-4
flex-wrap
">


{
Object.keys(themes).map((item)=>(


<button

key={item}

onClick={()=>changeTheme(item as keyof typeof themes)}

className={`

px-5
py-3
rounded-xl
border

${
theme===item
?
style.button
:
"border-gray-700 bg-black"
}

`}

>

{item}

</button>


))

}


</div>


</section>









{/* SESSIONS */}


<section className="
mt-8
bg-white/5
border
border-gray-800
rounded-2xl
p-6
max-w-5xl
">


<div className="
flex
gap-3
items-center
text-xl
font-bold
">

<Monitor/>

Active Sessions

</div>



<div className="
mt-5
bg-black/40
rounded-xl
p-5
flex
justify-between
">


<div>

<p>
Windows Chrome
</p>

<p className="
text-gray-400
text-sm
">
Current session
</p>

</div>


<span className="
text-green-400
">
Active
</span>


</div>



</section>









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
font-bold
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


<section className="
mt-10
bg-red-500/10
border
border-red-500/30
rounded-2xl
p-6
max-w-5xl
">


<div className="
flex
gap-3
items-center
text-red-400
text-xl
font-bold
">

<Trash2/>

Danger Zone

</div>


<p className="
text-gray-400
mt-3
">
Delete your CyberVerse account permanently.
</p>


<button className="
mt-5
px-5
py-3
rounded-lg
bg-red-600
font-bold
">

Delete Account

</button>


</section>




</div>

);

}