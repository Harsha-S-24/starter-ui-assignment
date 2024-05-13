import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center h-screen">
      <div className="text-4xl text-slate-200 font-bold mb-8">Hello There!</div>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/login">
       Go to Signup Page
      </Link>
    </div>
  );
}
