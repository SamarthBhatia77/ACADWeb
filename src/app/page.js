import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return(
    <div id="container"className="flex flex-col items-center justify-center  text-center font-mono text-black bg-white">
      <p className="text-[20px] my-3 font-bold">Please select the rescources to view</p>
      <ul>
        <li className="border border-white rounded-[10px]  my-4 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <Link href="/firstyr/grpselect">First year</Link></li>
        <li className="border border-white rounded-[10px]  mb-7 px-40 py-3 cursor-pointer hover:bg-[#f0f1f0] transition 0.4s ease">
          <Link href="/secondyr">Second year</Link></li>
      </ul>
    </div>
  );
}
