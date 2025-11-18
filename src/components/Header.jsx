import React from "react";

export default function Header() {
  return (
    <header className="w-full py-4 px-4 flex justify-between items-center bg-[#010118]/20 sticky top-0 z-50 backdrop-blur-3xl">
      <div className="text-2xl font-display font-bold text-support">
        Portfolio
      </div>
      <nav>
        <ul className="flex gap-6 text-base font-medium text-accent-white">
          <li className="hover:underline cursor-pointer">Work</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
