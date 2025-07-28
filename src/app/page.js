'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from 'react';
export default function Home() {
  const [intro,setIntro]=useState(true);
  /*useEffect(()=> {
    if (intro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
    document.body.style.overflow = 'auto';
    };
  },[intro]);*/

  return(
    <>
      
      <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
        <p className="text-[20px] my-3 font-bold">Please select the rescources to view</p>
        <ul>
          <li className="border border-[#8c8c8c] rounded-[10px]  my-4 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
            <Link href="/firstyr/grpselect">First year</Link></li>
          <li className="border border-[#8c8c8c] rounded-[10px]  mb-7 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
            <Link href="/secondyr">Second year</Link></li>
        </ul>
      </div>
    </>
  );
}
