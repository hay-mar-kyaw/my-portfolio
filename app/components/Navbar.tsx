"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 z-50 mt-3">
      <div className="mx-auto w-[90%] lg:w-[80%] bg-white border border-[#1A3D64] rounded-full shadow-md">
        <div className="px-6 h-12 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="text-[#1A3D64]">H</span>ayMar
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <Link
              href="#"
              className="relative hover:text-[#1A3D64] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#1A3D64] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>

            <Link
              href="#projects"
              className="relative hover:text-[#1A3D64] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#1A3D64] hover:after:w-full after:transition-all after:duration-300"
            >
              Projects
            </Link>
          </nav>

          
          


          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-5 text-xl">
            <Link
              href="https://www.facebook.com/haymarkyaw.komal18"
              target="_blank"
              className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaFacebook className="text-gray-600 hover:text-[#1A3D64]" />
            </Link>

            <Link
              href="https://github.com/hay-mar-kyaw"
              target="_blank"
              className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaGithub className="text-gray-600 hover:text-[#1A3D64]" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/komal-kumari-hmk/"
              target="_blank"
              className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaLinkedin className="text-gray-600 hover:text-[#1A3D64]" />
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 mx-auto w-[90%] bg-white border border-[#1A3D64] rounded-2xl shadow-md p-6">
          <nav className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            <Link href="#" onClick={() => setOpen(false)}>Home</Link>
            <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          </nav>

          <div className="flex gap-6 mt-6 text-lg">
            <FaFacebook />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
      )}
    </header>
  );
}
