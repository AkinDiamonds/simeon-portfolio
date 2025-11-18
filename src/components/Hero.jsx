import React from "react";
import { FaReact, FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4 text-accent-white overflow-hidden">
      
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient */}
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #4B46FF, #0D0D0E)",
          }}
        />
        
        {/* Abstract floating circles / shapes */}
        <div className="absolute w-72 h-72 bg-major opacity-20 rounded-full top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute w-48 h-48 bg-support opacity-15 rounded-full bottom-20 right-16 animate-pulse-slow"></div>

        {/* Tech icons in background */}
        <FaReact className="absolute top-24 left-1/4 text-support text-6xl opacity-10 animate-pulse-slow" />
        <FaJs className="absolute top-40 right-1/3 text-support text-6xl opacity-10" />
        <FaHtml5 className="absolute bottom-32 left-1/3 text-support text-6xl opacity-10" />
        <SiTailwindcss className="absolute bottom-24 right-1/4 text-support text-6xl opacity-10" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center -mb-50">
        <h1 className="text-6xl font-bold font-display drop-shadow-lg text-support">
          Simeon Akinrinola
        </h1>
        <p className="mt-2 text-xl drop-shadow-md text-accent-white">
          High-end Frontend Developer. Interfaces crafted with intent.
        </p>
        <button className="px-11 py-3 m-6 bg-support border-transparent rounded-lg text-2xl text-accent-black font-body font-bold hover:bg-[#c0a7a7] cursor-pointer shadow-2xl shadow-accent-black hover:scale-101 hover:shadow-3xl transition-all duration-500">SEE MY WORKS</button>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 
        bg-linear-to-b from-transparent to-[#0d0d0d]"></div>
    </section>
  );
}
