import Link from "next/link";
export default function firstyr() {
    return(
        <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
      <p className="text-[20px] my-3 font-bold">Select Group</p>
      <ul className="w-full">
        <li className="border border-[#8c8c8c] rounded-[10px]  my-4 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <Link href="/firstyr/semSelectGroup1">Group-1</Link></li>
        <li className="border border-[#8c8c8c] rounded-[10px]  mb-3 lg:px-40 py-3 cursor-pointer hover:bg-[#d1d1d1] transition 0.4s ease">
          <Link href="/firstyr/semSelectGroup2">Group-2</Link></li>
      </ul>
    </div>
    );
}