import Link from "next/link";
export default function firstyr() {
    return(
        <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
      <p className="text-[20px] my-3 font-bold">Select the course you want to view</p>
      <ul>
        <li className="border border-white rounded-[10px]  my-4 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <Link href="/firstyr/g2sem1">G1-Sem2 & G2-Sem1</Link></li>
        <li className="border border-white rounded-[10px]  mb-3 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <Link href="/firstyr/g2sem2">G1-Sem1 & G2-Sem2</Link></li>
      </ul>
    </div>
    );
}