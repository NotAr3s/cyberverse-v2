"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {

  const router = useRouter();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);



  async function submit(){


    try {

      setLoading(true);
      setError("");


      const res = await fetch("/api/login",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          email,
          password

        })

      });



      const data = await res.json();



      if(!res.ok){

        setError(
          data.message || "Login failed"
        );

        return;

      }



      router.push("/dashboard");


    }

    catch(error){

      setError(
        "Something went wrong"
      );

    }

    finally{

      setLoading(false);

    }


  }



  return (

    <div className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
    ">


      <div className="
        bg-white/5
        border
        border-gray-800
        rounded-xl
        p-8
        w-96
      ">


        <h1 className="
          text-3xl
          font-bold
        ">

          CyberVerse Login

        </h1>



        <input

          className="
            mt-5
            w-full
            bg-black
            border
            border-gray-700
            p-3
            rounded
          "

          placeholder="Email"

          value={email}

          onChange={
            e=>setEmail(e.target.value)
          }

        />



        <input

          className="
            mt-3
            w-full
            bg-black
            border
            border-gray-700
            p-3
            rounded
          "

          placeholder="Password"

          type="password"

          value={password}

          onChange={
            e=>setPassword(e.target.value)
          }

        />



        <button

          onClick={submit}

          disabled={loading}

          className="
            mt-5
            w-full
            bg-blue-600
            p-3
            rounded
            font-bold
            disabled:opacity-50
          "

        >

          {
            loading
            ?
            "Logging in..."
            :
            "Login"
          }

        </button>



        {
          error &&

          <p className="
            text-red-400
            mt-3
          ">

            {error}

          </p>

        }


      </div>


    </div>

  );

}