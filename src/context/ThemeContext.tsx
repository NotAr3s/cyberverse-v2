"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const ThemeContext = createContext<any>(null);


export function ThemeProvider({
  children
}:{
  children:React.ReactNode
}){


  const [theme,setTheme] = useState("Cyber Dark");


  useEffect(()=>{

    const saved =
      localStorage.getItem("cyber-theme");

    if(saved){
      setTheme(saved);
    }

  },[]);



  const changeTheme=(newTheme:string)=>{

    setTheme(newTheme);

    localStorage.setItem(
      "cyber-theme",
      newTheme
    );

  };



  return(

    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >

      {children}

    </ThemeContext.Provider>

  )

}



export function useTheme(){

  return useContext(ThemeContext);

}