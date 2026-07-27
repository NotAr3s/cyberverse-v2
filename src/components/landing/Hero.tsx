"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Trophy } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {

  return (

    <section
      className="
      flex
      min-h-screen
      items-center
      overflow-hidden
      px-6
      pt-20
      "
    >

      <div
        className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        lg:grid-cols-2
        "
      >


        {/* LEFT SIDE */}


        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >


          <div
            className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-400/10
            px-4
            py-2
            text-sm
            text-cyan-300
            "
          >

            <ShieldCheck size={18}/>

            Cybersecurity Learning Platform

          </div>




          <h1
            className="
            text-5xl
            font-black
            leading-tight
            text-white
            md:text-7xl
            "
          >

            Master


            <span
              className="
              inline-block
              min-w-[430px]
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >

              {" "}


              <TypeAnimation

                sequence={[
                  "Cybersecurity",
                  2000,
                  "Ethical Hacking",
                  2000,
                  "Security Research",
                  2000,
                  "Cyber Defense",
                  2000
                ]}

                wrapper="span"

                speed={50}

                repeat={Infinity}

              />


            </span>


            <br/>

            Through Practice


          </h1>




          {/* Terminal */}


          <motion.div

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:0.4
            }}

            className="
            mt-6
            rounded-xl
            border
            border-white/10
            bg-black/30
            p-4
            font-mono
            text-sm
            "

          >

            <p className="text-cyan-300">

              <span className="text-green-400">
                $
              </span>

              {" "}
              initializing_security_environment...

            </p>


            <p className="mt-2 text-slate-400">

              &gt; labs_loaded
              <br/>

              &gt; challenges_ready
              <br/>

              &gt; threat_simulation_online

            </p>


          </motion.div>





          <p
            className="
            mt-6
            max-w-xl
            text-lg
            text-slate-400
            "
          >

            Learn ethical hacking, security operations,
            CTF challenges and AI security through
            interactive hands-on labs.

          </p>





          <div
            className="
            mt-10
            flex
            gap-4
            "
          >


            <Link

              href="/register"

              className="
              flex
              items-center
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-violet-500
              px-7
              py-4
              font-semibold
              text-black
              transition
              hover:scale-[1.02]
              "

            >

              Start Learning


              <ArrowRight
                className="ml-2"
                size={18}
              />


            </Link>




            <Link

              href="/labs"

              className="
              rounded-xl
              border
              border-white/20
              px-7
              py-4
              text-white
              transition
              hover:bg-white/10
              "

            >

              Explore Labs


            </Link>


          </div>






          {/* Stats */}



          <div
            className="
            mt-12
            flex
            gap-10
            "
          >


            <Stat

              icon={<Zap size={18}/>}

              value="500+"

              label="Challenges"

            />



            <Stat

              icon={<Trophy size={18}/>}

              value="50+"

              label="Labs"

            />


          </div>



        </motion.div>






        {/* RIGHT CARD */}



        <Tilt

          tiltMaxAngleX={8}

          tiltMaxAngleY={8}

          perspective={1000}

          scale={1.02}

          transitionSpeed={1500}

        >


          <motion.div


            initial={{
              opacity:0,
              scale:0.9,
              y:30
            }}


            animate={{
              opacity:1,
              scale:1,
              y:0
            }}


            transition={{
              duration:0.8
            }}



            className="
            rounded-3xl
            border
            border-cyan-400/20
            bg-white/5
            p-8
            backdrop-blur-xl
            shadow-[0_0_80px_rgba(34,211,238,0.15)]
            "

          >



            <p className="text-slate-400">
              Security Level
            </p>



            <h2
              className="
              mt-3
              text-4xl
              font-bold
              text-white
              "
            >

              Beginner

            </h2>





            <div
              className="
              mt-8
              h-3
              rounded-full
              bg-white/10
              "
            >


              <motion.div

                initial={{
                  width:0
                }}

                animate={{
                  width:"60%"
                }}

                transition={{
                  duration:1.5
                }}


                className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-violet-500
                "

              />


            </div>






            <div
              className="
              mt-8
              grid
              grid-cols-3
              gap-4
              "
            >

              <Box title="XP" value="2400"/>

              <Box title="Labs" value="25"/>

              <Box title="Rank" value="#124"/>


            </div>



          </motion.div>



        </Tilt>


      </div>


    </section>

  );

}





function Stat({
icon,
value,
label
}:{
icon:React.ReactNode;
value:string;
label:string;
}){


return (

<div className="flex items-center gap-3">


<div className="text-cyan-400">

{icon}

</div>


<div>

<p className="font-bold text-white">

{value}

</p>


<p className="text-sm text-slate-400">

{label}

</p>


</div>


</div>

);

}






function Box({
title,
value
}:{
title:string;
value:string;
}){


return (

<div
className="
rounded-xl
bg-black/30
p-4
"
>

<p className="text-xs text-slate-400">

{title}

</p>


<p className="mt-2 font-bold text-white">

{value}

</p>


</div>

);

}