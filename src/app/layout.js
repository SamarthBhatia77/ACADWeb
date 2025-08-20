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
        <footer className="font-sans text-black mt-10 bg-white w-full">
  <p className="text-3xl sm:text-4xl font-bold ml-4 sm:ml-6 mt-5 mb-6 sm:mb-10">
    <Link href="/">ACADWeb</Link>
  </p>

  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 sm:px-6">
    {/* Right section */}
    <div className="order-1 lg:order-2 lg:text-right w-full lg:w-auto">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 lg:gap-20">
        <div>
          <p className="font-bold mb-4 sm:mb-6 text-[18px] sm:text-[20px] text-[#0070f0]">Year-wise resources</p>
          <p className="mb-4 sm:mb-6"><Link href="/firstyr/grpselect"><span className="hover:text-[#0070f0] hover:underline">First year</span></Link></p>
          <p className="mb-4 sm:mb-6"><Link href="/secondyr"><span className="hover:text-[#0070f0] hover:underline">Second year</span></Link></p>
        </div>

        <div>
          <p className="font-bold mb-4 sm:mb-6 text-[18px] sm:text-[20px] text-[#0070f0]">Contact us</p>
          <p className="mb-4 sm:mb-6"><a href="mailto:example@gmail.com" target="_blank"><span className="hover:text-[#0070f0] hover:underline">Gmail</span></a></p>
          <p className="mb-4 sm:mb-6"><a href="https://in.linkedin.com/in/samarth-bhatia-2092ab313" target="_blank"><span className="hover:text-[#0070f0] hover:underline">Linkedin</span></a></p>
        </div>

        <div className="lg:mr-20">
          <p className="font-bold mb-4 sm:mb-6 text-[18px] sm:text-[20px] text-[#0070f0]">Support 📈</p>
          <a href="https://github.com/SamarthBhatia77/ACADWeb" target="_blank"><p className="mb-3 sm:mb-4 hover:text-[#0070f0] hover:underline">Star on Github ✨</p></a>
          <a href="https://in.linkedin.com/in/samarth-bhatia-2092ab313" target="_blank"><p className="mb-6 sm:mb-8 hover:text-[#0070f0] hover:underline">Follow on Linkedin</p></a>
        </div>
      </div>
    </div>

    {/* Left section */}
    <div className="order-2 lg:order-1 lg:max-w-[50%] mt-6 lg:mt-0">
      <p className="py-2 font-mono text-[#7D7D7D] text-sm sm:text-base">
        Tap into the shared resources with ease and score a good CGPA with ACADWeb by your side
      </p>
      <p className="font-mono text-[#7D7D7D] mt-4 sm:mt-6 mb-4 text-sm sm:text-base">
        Credits: Resources pulled from ACAD Drive and others
      </p>
    </div>
  </div>

  

  <p className="mt-8 px-4 sm:px-6 py-4 text-[12px] sm:text-[13px] text-[#7D7D7D] text-center lg:text-left">
    &copy; 2025 ACADWeb All rights reserved.
  </p>
</footer>


      </body>
    </html>
  );
}
