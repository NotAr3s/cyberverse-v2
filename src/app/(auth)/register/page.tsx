"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Register() {

  const router = useRouter();


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  async function submit() {


    try {

      setLoading(true);
      setMessage("");


      const res = await fetch("/api/register", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          name: username,
          email,
          password

        }),

      });



      const data = await res.json();



      if(!res.ok){

        setMessage(data.message || "Registration failed");

        return;

      }



      setMessage("Account created successfully");


      setTimeout(()=>{

        router.push("/login");

      },1000);



    }

    catch(error){

      setMessage("Something went wrong");

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
          Create Account
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

          placeholder="Username"

          value={username}

          onChange={
            e=>setUsername(e.target.value)
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
            "Creating..."
            :
            "Register"
          }

        </button>



        {
          message &&

          <p className="
            mt-4
            text-center
            text-sm
          ">

            {message}

          </p>

        }


      </div>


    </div>

  );

}