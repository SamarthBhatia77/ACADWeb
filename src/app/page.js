'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from 'react';
export default function Home() {
  const [intro,setIntro]=useState(true);
  useEffect(()=> {
    if (intro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
    document.body.style.overflow = 'auto';
    };
  },[intro]);

  return(
    <>
      {intro? (
        <div id="Messagebg" className="fixed inset-0  backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-500">
          <div id="container" className="flex flex-col items-center justify-center  text-center font-mono text-white bg-[#616161]">
        <p className="text-[20px] my-3 font-bold">Like this project? Leave a ⭐ on Github!</p>
        <ul>
          <a href="https://github.com/SamarthBhatia77/ACADWeb" target="_blank">
            <li className="border border-none bg-[#209fd5] rounded-[10px] text-white font-bold my-4 px-15 lg:px-40 py-3 cursor-pointer transform transition duration-200 ease-in-out hover:scale-105"
            onClick={()=>setIntro(false)}>
              ✨Star on GitHub!✨</li></a>
          <li className="border border-none bg-[#ea2222] rounded-[10px] text-white font-bold mb-7 px-20 lg:px-40 py-3 cursor-pointer transform transition duration-200 ease-in-out hover:scale-105"
          onClick={()=>setIntro(false)}>
            <Link href="">Continue to Site</Link></li>
        </ul>
      </div>
        </div>
      ):null}
      <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
        <p className="text-[20px] my-3 font-bold">Please select the rescources to view</p>
        <ul>
          <li className="border border-white rounded-[10px]  my-4 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
            <Link href="/firstyr/grpselect">First year</Link></li>
          <li className="border border-white rounded-[10px]  mb-7 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
            <Link href="/secondyr">Second year</Link></li>
        </ul>
      </div>
    </>
  );
}
