"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";


export default function Register() {

  const router = useRouter();

  const { register } = useAuth();


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  function submit() {

    register(
      username,
      email,
      password
    );

    router.push("/dashboard");

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

          className="
            mt-5
            w-full
            bg-blue-600
            p-3
            rounded
            font-bold
          "

        >

          Register

        </button>


      </div>


    </div>

  );

}