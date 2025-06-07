import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"]});
export const metadata: Metadata = {
  title: "Subin Rai Portfolio",
  description: "A personal portfolio website showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
      >
        
        <Navbar/>
        {children}
      </body>
    </html>
  ); 
}
