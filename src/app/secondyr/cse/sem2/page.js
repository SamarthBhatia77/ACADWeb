import React from "react";
export default function firstyr() {
    return(
      <div id="container" className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
      <p className="text-[20px] my-3 font-bold">Select Course to view rescources</p>
      <ul className="w-full">
        <li className="border border-[#8c8c8c] rounded-[10px]  my-4 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <a href="https://drive.google.com/drive/u/1/folders/1kLJ7me8gU8Xf5in9ZZhbG1C8fDpKv5S-" target="_blank">DSA</a></li>
        <li className="border border-[#8c8c8c] rounded-[10px]  mb-3 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <a href="https://drive.google.com/drive/u/1/folders/1ptM728sTyHYb1iaYVnbT-LsZ3r8vfVL8" target="_blank">Database Systems</a></li>
        <li className="border border-[#8c8c8c] rounded-[10px]  mb-3 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <a href="https://drive.google.com/drive/u/1/folders/1unHCApJq_HLqAg3pKMNEK1Z3qbLVoAPq" target="_blank">Microprocessors & Interfacing</a></li>
        <li className="border border-[#8c8c8c] rounded-[10px]  mb-3 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <a href="https://drive.google.com/drive/u/1/folders/1vHINVzGUR-xWeCKZM49lML_I31yZYC4Q" target="_blank">Public Administration</a></li>
        <li className="border border-[#8c8c8c] rounded-[10px]  mb-3 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <a href="https://drive.google.com/drive/u/1/folders/1OvWixEDkIw1sWt9rGzFn42pftnS-N1Il" target="_blank">Intro to Globalization</a></li>
      </ul>
    </div>
    );
}