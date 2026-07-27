import "./globals.css";

import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono
} from "next/font/google";

import { ThemeProvider } from "@/context/ThemeContext";
import { ProgressProvider } from "@/context/ProgressContext";
import { AuthProvider } from "@/context/AuthContext";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight:[
    "400",
    "500",
    "600",
    "700"
  ],
});


const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});


export const metadata: Metadata = {
  title: "CyberVerse",
  description: "Learn Cybersecurity Through Interactive Labs",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html
      lang="en"
      className={`
      ${inter.variable}
      ${space.variable}
      ${mono.variable}
      `}
      suppressHydrationWarning
    >

      <body
        className="
        min-h-screen
        bg-[#030712]
        text-white
        antialiased
        "
      >

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