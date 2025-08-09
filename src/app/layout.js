import "./globals.css";
import Image from "next/image";
import bitslogo from "./bitslogo.jpg";
import Link from "next/link";

import { HomeIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
export const metadata = {
  title: "Acad Web | Study Companion",
  description: "Academic resources for BITSians",
  icons: {
    icon: "/favicon3.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white/30">
        <div className="fixed top-0 left-0 w-full bg-white/50 z-50 backdrop-blur-md border border-[#8c8c8c] flex align-centers items-center justify-between mb-10">
            <header className="text-black text-[25px] lg:text-[2em] font-sans font-bold p-4">ACADWeb : Study like never before</header>
            <div className="flex gap-5">
            <Link href="/"><HomeIcon className="h-6 w-6 text-black-600 mr-4"/></Link>
            <a href="https://github.com/SamarthBhatia77/ACADWeb" target="_blank"><StarIcon className="h-6 w-6 text-[#FFEA6B] mr-8 transition-transform duration-200 hover:scale-140" /></a>
            </div>
        </div>
        <main className="flex-grow mt-45 lg:mt-30">
          {children}
        </main>
        <footer className="font-sans text-black mt-21 bg-white">
  <p className="text-4xl font-bold ml-6 mt-5 mb-10">
    <Link href="/">ACADWeb</Link>
  </p>

  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start ml-6 mr-6">
    {/* Right section - moves above on mobile */}
    <div className="order-1 lg:order-2 lg:text-right">
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-20">
        <div>
          <p className="font-bold mb-6 text-[20px] underline">Year-wise resources</p>
          <Link href="/firstyr/grpselect"><p className="mb-4 hover:text-[#0070f0]">First year</p></Link>
          <Link href="/secondyr"><p className="mb-6 hover:text-[#0070f0]">Second year</p></Link>
        </div>
        <div>
          <p className="font-bold mb-6 text-[20px] underline">Contact us</p>
          <a href="" target="_blank"><p className="mb-4 hover:text-[#0070f0]">Gmail</p></a>
          <a href="https://in.linkedin.com/in/samarth-bhatia-2092ab313?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"><p className="mb-6 hover:text-[#0070f0]">Linkedin</p></a>
        </div>
        <div className="lg:mr-20">
          <p className="font-bold mb-6 text-[20px] underline ">Support📈</p>
          <a href="https://github.com/SamarthBhatia77/ACADWeb" target="_blank"><p className="mb-4 hover:text-[#0070f0]">Star on Github ✨</p></a>
          <a href="https://in.linkedin.com/in/samarth-bhatia-2092ab313?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"><p className="mb-8 hover:text-[#0070f0]">Follow on Linkedin</p></a>
        </div>
      </div>
    </div>

    {/* Left section - text */}
    <div className="order-2 lg:order-1 lg:max-w-[50%]">
      <p className="py-2 font-mono text-[#7D7D7D]">
        Tap into the shared resources with ease and score a good CGPA with ACADWeb by your side
      </p>
      <p className="mb-2 font-mono text-[#7D7D7D] mt-6 mb-4">
        Credits: Resources pulled from ACAD Drive and others
      </p>
    </div>
  </div>

  <hr className=" border-t-2 border-black ml-6 mt-4 lg:w-[970px] w-[400px]" />
  <p className="p-6 mt-0 text-[13px] text-[#7D7D7D]">&copy; 2025 ACADWeb All rights reserved.</p>
</footer>

      </body>
    </html>
  );
}
