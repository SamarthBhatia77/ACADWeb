import Link from "next/link";
export default function firstyr() {
    return(
        <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
      <p className="text-[20px] my-3 font-bold">Select Semester</p>
      <ul className="w-full">
        <li className="border border-[#8c8c8c] rounded-[10px]  my-4 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <Link href="/firstyr/g1sem1">Sem-1</Link></li>
        <li className="border border-[#8c8c8c] rounded-[10px]  mb-3 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <Link href="/firstyr/g1sem2">Sem-2</Link></li>
        <li className="border border-[#8c8c8c] rounded-[10px]  mb-3 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <a href="https://drive.google.com/drive/u/1/folders/1ihfGtHRclOwRzVlk2iI7z22MWIGEsqGh" target="_blank">GRADING STATS</a></li>
      </ul>
    </div>
    );
}