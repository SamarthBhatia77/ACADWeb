import React from "react";
import Link from "next/link";
export default function firstyr() {
    return(
        <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
      <p className="text-[20px] my-3 font-bold">Select Your Branch</p>
      <ul>
        <li className="border border-white rounded-[10px]  my-4 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <Link href="/secondyr/cse/semselect">CSE</Link></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">MNC</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">ECE</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">EEE</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">ENI</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Mechanical</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Chemical</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Civil</a></li>
      </ul>
    </div>
    );
}