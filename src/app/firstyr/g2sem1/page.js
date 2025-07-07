import React from "react";
export default function firstyr() {
    return(
        <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
      <p className="text-[20px] my-3 font-bold">Select the course you want to view</p>
      <ul>
        <li className="border border-white rounded-[10px]  my-4 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">EEE</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Gen-Chem</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Chem Lab</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Mathematics-1</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Mathematics-2</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">PnS</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Workshop Practice</a></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">MeOW</a></li>
        <li className="border border-white rounded-[10px]  mb-7 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <a href="#">Physics Lab</a></li>
      </ul>
    </div>
    );
}