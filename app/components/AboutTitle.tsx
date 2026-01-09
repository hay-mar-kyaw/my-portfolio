import Image from "next/image";

export default function AboutTitle() {
  return (
    <div className="relative inline-block">
      {/* Diagonal pattern */}
      <div className="absolute rounded-full left-0 -top-10 w-40 h-40 bg-[repeating-linear-gradient(45deg,#e5e7eb_0,#e5e7eb_2px,transparent_2px,transparent_6px)] opacity-50" />
       
      {/* Semi circle */}
      <div className="absolute -top-20  left-15 w-30 h-30 border-10 border-[#1A3D64] rounded-full  opacity-40" />

      {/* Text */}
      <h2 className="relative left-20 text-2xl md:text-3xl font-bold text-gray-900">
        About Me
      </h2>

      {/* Underline */}
      <span className="absolute left-20 block mt-1 w-12 h-1  bg-[#1A3D64] rounded-full" />
    </div>
  );
}
