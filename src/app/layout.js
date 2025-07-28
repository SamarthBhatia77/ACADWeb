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
          <p className="font-mono text-2xl font-bold ml-6 mt-5 mb-4"><Link href="/">ACADWeb</Link></p>
          <p className="ml-6 py-2 font-mono text-[#7D7D7D]">Tap into the shared rescources with ease and score a good CGPA with ACADWeb by your side</p>
          <p className="ml-6 mb-2 font-mono text-[#7D7D7D] mt-6 mb-4">Credits: Rescources pulled from ACAD Drive and others</p>
          <hr className="w-1/2 border-t-2 border-black " />
          <p className="p-6 mt-0 text-[13px]">&copy; 2025 ACADWeb by Samarth Bhatia. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
