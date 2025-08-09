'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from 'react';
import TextType from './TextType';
export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenMessage = sessionStorage.getItem("welcomeShown");
    if (!hasSeenMessage) {
      setShowModal(true);
      sessionStorage.setItem("welcomeShown", "true");
    }
  }, []);
  return(
    <><div>
      <div id="container" >
        {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-4 text-center">
    <p className="text-xl font-semibold mb-6 leading-relaxed font-mono">
      Welcome to <span className="text-blue-600 font-bold text-2xl">ACADWeb</span>, your key to ace academics.
      <br />If you like our website, please consider <span className="text-green-600 font-bold">starring it</span> on GitHub 😊.
    </p>
    <div className="flex flex-col gap-4">
      <a
        href="https://github.com/SamarthBhatia77/ACADWeb"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#8766b0] hover:bg-[#6523b8] text-black font-bold py-3 rounded-xl transition w-full font-mono text-white"
      >
        ⭐ Star on GitHub
      </a>
      <button
        onClick={() => setShowModal(false)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition w-full font-mono"
      >
        Continue to Site
      </button>
    </div>
  </div>
</div>
      )}
      </div>

      {/* Actual landing page */}
        <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
          <p className="text-[20px] my-3 font-bold">Select  Year</p>
          <ul className="w-full">
            <Link href="/firstyr/grpselect"><li className="border border-[#8c8c8c] rounded-[10px]  my-4 lg:px-40  py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
              First year</li></Link>
            <li className="border border-[#8c8c8c] rounded-[10px]  mb-7 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
              <Link href="/secondyr">Second year</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
