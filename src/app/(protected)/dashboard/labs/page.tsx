"use client";

import Link from "next/link";

import { labs } from "@/data/labs";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/context/themeStyles";


export default function LabsPage() {

  const { theme } = useTheme();

  const style = themes[theme as keyof typeof themes];


  return (

    <div className="
      min-h-screen
      bg-black
      text-white
      p-10
    ">


      <h1 className={`
        text-4xl
        font-bold
        ${style.text}
      `}>
        CyberVerse Labs
      </h1>


      <p className="
        text-gray-400
        mt-2
      ">
        Real cybersecurity training modules.
      </p>




      <div className="
        grid
        md:grid-cols-3
        gap-6
        mt-8
      ">


        {labs.map((lab) => (

          <div
            key={lab.id}
            className={`
              bg-white/5
              border
              ${style.border}
              rounded-2xl
              p-6
            `}
          >


            <h2 className={`
              text-xl
              font-bold
              ${style.text}
            `}>
              {lab.title}
            </h2>



            <p className="
              text-gray-400
              mt-3
            ">
              {lab.description}
            </p>



            <p className="mt-4">
              Difficulty: {lab.difficulty}
            </p>



            <p>
              Reward:
              <span className={style.text}>
                {" "}{lab.xp} XP
              </span>
            </p>



            <p>
              Platform: {lab.platform}
            </p>




            <Link
              href={`/dashboard/labs/${lab.id}`}
              className={`
                inline-block
                mt-5
                px-5
                py-2
                rounded-lg
                ${style.button}
              `}
            >
              View Lab
            </Link>


          </div>

        ))}


      </div>


    </div>

  );

}