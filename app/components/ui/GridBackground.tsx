import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import QuoteIcon from "@/public/Icons/QuoteIcon";
import { Type } from "lucide-react";

import Image from "next/image";
import React from "react";
import { FaLaravel, FaReact, FaVuejs } from "react-icons/fa";
import { SiFirebase, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TypewriterEffectWord } from "./TypeWriterWord";

export function GridBackground() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="z-50 w-[80%]">
        <div className="max-w-7xl mx-auto pt-20">
            <div className="mb-12 text-center">
            <p className="font-medium mb-3">
                <span className="text-[#1A3D64]">—</span> Hello There!
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                <TypewriterEffectWord />
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
                Software Engineer based in Myanmar
            </p>
            </div>
        </div>
        <div className="mb-20 px-6 flex justify-between items-center flex-col md:flex-row gap-10">
                <div className="max-w-sm mt-10">
                    <QuoteIcon />
                    <p className="mt-5 text-gray-500 text-justify">
                    Motivated Software Engineer with hands-on experience in full-stack
                    development using Laravel, Vue.js, React.js, and Next.js. Passionate
                    about clean code, performance, and scalable solutions.
                    </p>
                    {/* CTA BUTTONS */}
                    <div className="flex gap-4 mt-24">
                        
                        <button
                        className="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-36  group max-w-full h-14 flex items-center justify-start hover:bg-[#1A3D64] text-white transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]"
                        >
                        <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                            <div
                            className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                            ></div>
                            <div
                            className="rounded-full shrink-0 flex justify-center items-center  h-full aspect-square bg-[#1A3D64] text-white transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black"
                            >
                            <div
                                className="size-[0.8rem] text-white group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                                height="100%"
                                width="100%"
                                >
                                <path
                                    fill="currentColor"
                                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                                ></path>
                                </svg>
                            </div>
                            </div>
                        </div>
                        <div
                            className="pl-[4.3rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-[#1A3D64] "
                        >
                            Portfolio
                        </div>
                        </button>
                        <button
                    className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-[#1A3D64] rounded-full border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
                    >
                    <span className="relative z-80">Hire Me</span>

                    <span
                        className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
                    ></span>

                    <span
                        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#1A3D64] absolute h-[20%] rounded-tl-full border-l-2 border-t-2 top-0 left-0"
                    ></span>
                    <span
                        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#1A3D64] absolute group-hover:h-full h-[60%] rounded-tr-full border-r-2 border-t-2 top-0 right-0"
                    ></span>
                    <span
                        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#1A3D64] absolute h-[60%] group-hover:h-[90%] rounded-bl-full border-l-2 border-b-2 left-0 bottom-0"
                    ></span>
                    <span
                        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#1A3D64] absolute h-[20%] rounded-br-full border-r-2 border-b-2 right-0 bottom-0"
                    ></span>
                        </button>

                    </div>
                </div>
                <div className="relative w-[320px] h-80 mx-auto">
                {/* Profile Image */}
                {/* <Image
                    src="/profile.png"
                    alt="Hay Mar Kyaw"
                    width={400}
                    height={400}
                    className="object-cover rounded-full "
                /> */}
                <div className="relative w-full h-full mx-auto overflow-hidden ">
                            <Image
                            src="/blob.png"
                            alt="Hay Mar Kyaw"
                            fill
                            className="object-cover"
                            />
                            <Image
                            src="/profile.png"
                            alt="Hay Mar Kyaw"
                            fill
                            className="object-cover"
                            />
                        </div>

                {/* Skills */}
                {[
                    { name: "React.js", icon: <FaReact/>, top: "-7%", left: "37%" },
                    { name: "Next.js", icon: <SiNextdotjs />, top: "20%", right: "-15%" },
                    { name: "Laravel", icon: <FaLaravel />, bottom: "15%", right: "-10%" },
                    { name: "Vue.js", icon: <FaVuejs />, bottom: "-10%", left: "25%" },
                    { name: "Firebase", icon: <SiFirebase />, bottom: "-15%", left: "55%" },
                    { name: "Tailwind", icon: <SiTailwindcss />, top: "20%", left: "-15%" },
                    { name: "MySQL", icon: <SiMysql />, top: "55%", left: "-20%" },
                ].map((skill, i) => (
                    <span
                    key={skill.name}
                    className="flex items-center gap-1 absolute px-4 py-2 text-sm rounded-full bg-white shadow-md animate-float"
                    style={{
                        ...skill,
                        animationDelay: `${i * 0.5}s`,
                    }}
                    >

                    {skill.icon} {skill.name}
                    </span>
                ))}
                </div>
        </div>
      </div>
    </div>
  );
}
