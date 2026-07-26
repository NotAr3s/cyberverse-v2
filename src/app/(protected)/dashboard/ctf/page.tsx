export default function CTF() {

  const challenges = [
    {
      name: "SQL Injection",
      difficulty: "Easy",
      xp: 100
    },
    {
      name: "Network Analysis",
      difficulty: "Medium",
      xp: 250
    },
    {
      name: "Reverse Engineering",
      difficulty: "Hard",
      xp: 500
    },
    {
      name: "Malware Investigation",
      difficulty: "Expert",
      xp: 1000
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white p-10">


      <h1 className="
        text-4xl
        font-bold
        text-green-400
      ">
        CTF Arena
      </h1>


      <p className="text-gray-400 mt-3">
        Solve cybersecurity challenges and earn XP.
      </p>



      <div className="
        grid
        md:grid-cols-2
        gap-6
        mt-10
      ">


        {challenges.map((challenge)=>(

          <div
            key={challenge.name}
            className="
            bg-white/5
            border
            border-gray-800
            rounded-2xl
            p-6
            hover:border-green-400
            transition
            "
          >

            <h2 className="text-2xl font-bold">
              {challenge.name}
            </h2>


            <div className="flex justify-between mt-4">


              <span className="
                text-gray-400
              ">
                Difficulty:
              </span>


              <span className="text-green-400">
                {challenge.difficulty}
              </span>


            </div>


            <div className="flex justify-between mt-2">

              <span className="text-gray-400">
                Reward:
              </span>

              <span className="text-cyan-400">
                {challenge.xp} XP
              </span>

            </div>



            <button
              className="
              mt-6
              w-full
              py-2
              rounded-lg
              bg-green-400
              text-black
              font-bold
              hover:scale-105
              transition
              "
            >
              Start Challenge
            </button>


          </div>

        ))}


      </div>


    </div>
  );
}