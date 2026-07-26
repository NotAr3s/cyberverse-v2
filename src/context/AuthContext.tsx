"use client";

import {
createContext,
useContext,
useState,
useEffect
} from "react";


type User = {

username:string;
email:string;

};



type AuthContextType = {

user:User|null;

login:
(email:string,password:string)=>boolean;

register:
(username:string,email:string,password:string)=>boolean;

logout:
()=>void;

};



const AuthContext =
createContext<AuthContextType|null>(null);





export function AuthProvider({

children

}:{
children:React.ReactNode
}){


const [user,setUser]=useState<User|null>(null);



useEffect(()=>{


const saved =
localStorage.getItem("user");


if(saved){

setUser(
JSON.parse(saved)
);

}


},[]);





function register(

username:string,
email:string,
password:string

){


const account={

username,
email,
password

};



localStorage.setItem(
"account",
JSON.stringify(account)
);



setUser({
username,
email
});


localStorage.setItem(
"user",
JSON.stringify({
username,
email
})
);



return true;


}





function login(

email:string,
password:string

){


const saved =
localStorage.getItem("account");



if(!saved)
return false;



const account =
JSON.parse(saved);



if(

account.email===email
&&
account.password===password

){


setUser({

username:account.username,
email

});


localStorage.setItem(
"user",
JSON.stringify({
username:account.username,
email
})
);



return true;


}



return false;


}





function logout(){


setUser(null);


localStorage.removeItem(
"user"
);


}




return (

<AuthContext.Provider

value={{

user,

login,

register,

logout

}}

>


{children}


</AuthContext.Provider>


);


}





export function useAuth(){


const context =
useContext(AuthContext);



if(!context){

throw new Error(
"useAuth must be inside AuthProvider"
);

}



return context;


}