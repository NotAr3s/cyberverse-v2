"use client";

import Link from "next/link";

import { challenges } from "@/data/challenges";


const categories = [
  {
    id: "web-security",
    name: "Web Security"
  },
  {
    id: "network-security",
    name: "Network Security"
  },
  {
    id: "cryptography",
    name: "Cryptography"
  },
  {
    id: "linux-security",
    name: "Linux Security"
  },
  {
    id: "ai-security",
    name: "AI Security"
  }
];


export default function Challenges() {


  return (

    <div className="
      min-h-screen
      bg-black
      text-white
      p-10
    ">


      <h1 className="
        text-4xl
        font-bold
      ">
        ⚔ CyberVerse Challenges
      </h1>



      <div className="
        grid
        md:grid-cols-3
        gap-6
        mt-10
      ">


        {
          categories.map((cat) => (

            <Link

              key={cat.id}

              href={`/dashboard/challenges/${cat.id}`}

              className="
                bg-white/5
                border
                border-gray-700
                rounded-xl
                p-6
                hover:scale-105
                transition
              "

            >


              <h2 className="
                text-2xl
                font-bold
              ">
                {cat.name}
              </h2>



              <p className="
                mt-3
                text-gray-400
              ">

                {
                  challenges.filter(
                    c => c.category === cat.id
                  ).length
                }

                {" "}Challenges

              </p>


            </Link>

          ))

        }


      </div>


    </div>

  );

}