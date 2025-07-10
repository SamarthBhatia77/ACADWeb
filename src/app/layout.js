import "./globals.css";
import Image from "next/image";
import bitslogo from "./bitslogo.jpg";
import Link from "next/link";
import { HomeIcon } from '@heroicons/react/24/outline';
export const metadata = {
  title: "Acad Web | Study Companion",
  description: "Academic resources for BITSians",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="fixed top-0 left-0 w-full z-50  backdrop-blur-md border-b-[1px] border-[#7B7B7B] flex align-centers items-center justify-between mb-10">
            <header className="backdrop-blur-md text-black text-[25px] lg:text-[2em] font-mono font-bold p-4">ACADWeb: Your go-to Study Place</header>
            <Link href="/"><HomeIcon className="h-6 w-6 text-black-600 mr-4"/></Link>
        </div>
        <main className="flex-grow mt-45 lg:mt-30">
          {children}
        </main>
        <footer className="font-sans text-black mt-21 bg-white">
          <p className="font-mono text-2xl font-bold ml-6 mt-5 mb-1">ACADWeb</p>
          <p className="ml-6 py-2 font-mono text-[#7D7D7D]">Tap into the shared rescources with ease and score a good CGPA with ACADWeb by your side</p>
          <p className="ml-6 mb-2 font-mono text-[#7D7D7D]">Credits: Rescources pulled from ACAD Drive, website by : Samarth Bhatia</p>
          <hr className="w-1/2 border-t-2 border-black " />
          <p className="p-6 font-mono text-[#7D7D7D]">&copy; 2025 ACADWeb by Samarth Bhatia. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
