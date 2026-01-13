"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";


export function TypewriterEffectWord() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "Hay",
      className: "text-[#1A3D64] dark:text-[#1A3D64]",
    },
    {
      text: "Mar",
      className: "text-[#1A3D64] dark:text-[#1A3D64]",
    },
    {
      text: "Kyaw",
      className: "text-[#1A3D64] dark:text-[#1A3D64]",
    },
    
  ];
  return (
    
      <TypewriterEffect words={words} />
      
  );
}
