import type { Metadata } from "next";
import {  Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const robotoMono  =Roboto_Mono({
  variable:'--font-Roboto-Mono',
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "npm@navin0507",
  description: "npm string useAuth packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className}  antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
