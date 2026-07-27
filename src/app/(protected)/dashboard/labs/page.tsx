"use client";

import Link from "next/link";
import { labs } from "@/data/labs";
import { motion } from "framer-motion";
import { Shield, Terminal, Trophy, ArrowRight } from "lucide-react";

import PageContainer from "@/components/ui/PageContainer";
import CyberCard from "@/components/ui/CyberCard";



export default function LabsPage() {


  return (

    <PageContainer>


      {/* HEADER */}

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
          duration:0.5
        }}

        className="mb-12"

      >


        <div className="
        flex
        items-center
        gap-3
        "
        >

          <Shield
            className="
            text-cyan-400
            "
            size={32}
          />


          <h1
          className="
          text-5xl
          font-black
          "
          >

            CyberVerse Labs

          </h1>


        </div>



        <p
        className="
        mt-4
        max-w-xl
        text-slate-400
        "
        >

          Master real-world cybersecurity skills through
          interactive penetration testing labs and security missions.

        </p>


      </motion.div>





      {/* LAB GRID */}


      <div
      className="
      grid
      gap-8
      md:grid-cols-2
      lg:grid-cols-3
      "
      >


      {
        labs.map((lab,index)=>(


          <motion.div

          key={lab.id}

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:index*0.1
          }}

          >


          <CyberCard
          className="
          p-7
          h-full
          hover:border-cyan-400/40
          transition
          "
          >



            {/* ICON */}


            <div
            className="
            flex
            items-center
            justify-between
            "
            >

              <div
              className="
              rounded-xl
              bg-cyan-400/10
              p-3
              "
              >

                <Terminal
                className="text-cyan-400"
                />

              </div>



              <span
              className="
              rounded-full
              border
              border-white/10
              px-3
              py-1
              text-xs
              text-slate-400
              "
              >

                {lab.difficulty}

              </span>


            </div>







            <h2
            className="
            mt-6
            text-2xl
            font-bold
            "
            >

              {lab.title}

            </h2>




            <p
            className="
            mt-3
            text-slate-400
            "
            >

              {lab.description}

            </p>






            {/* DETAILS */}


            <div
            className="
            mt-6
            space-y-3
            rounded-xl
            bg-black/30
            p-4
            text-sm
            "
            >


              <div
              className="
              flex
              justify-between
              "
              >

                <span className="text-slate-400">
                  Platform
                </span>

                <span>
                  {lab.platform}
                </span>

              </div>




              <div
              className="
              flex
              justify-between
              "
              >

                <span className="text-slate-400">
                  Reward
                </span>


                <span
                className="
                flex
                items-center
                gap-1
                text-cyan-400
                "
                >

                  <Trophy size={15}/>

                  {lab.xp} XP

                </span>


              </div>


            </div>







            <Link

            href={`/dashboard/labs/${lab.id}`}

            className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-violet-500
            px-5
            py-3
            font-bold
            text-black
            transition
            hover:scale-105
            "

            >

              Enter Lab

              <ArrowRight size={18}/>


            </Link>





          </CyberCard>


          </motion.div>


        ))
      }


      </div>




    </PageContainer>

  );

}