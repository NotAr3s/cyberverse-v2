import "./globals.css";

import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";
import { ProgressProvider } from "@/context/ProgressContext";
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout({

children

}:{

children:React.ReactNode

}) {


return (

<html lang="en">

<body>


<ThemeProvider>

<AuthProvider>

<ProgressProvider>

{children}

</ProgressProvider>

</AuthProvider>

</ThemeProvider>


</body>

</html>

);


}