"use client";

import { useState } from "react";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaravel,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiFirebase } from "react-icons/si";

export default function SkillsSection() {
  const categories = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    Backend: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  };

  const [active, setActive] = useState<keyof typeof categories>("Frontend");

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500">— Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1A3D64]">Skills & Technologies</span>
          </h2>
          
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    active === category
                      ? "bg-[#1A3D64] text-white shadow"
                      : "text-gray-600 hover:text-[#1A3D64]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories[active].map((skill, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-5 py-3 rounded-full
                         bg-white shadow-md text-gray-700
                         hover:bg-gray-900 hover:text-white
                         hover:-translate-y-1 hover:shadow-xl
                         transition-all duration-300"
            >
              <span className="text-xl group-hover:rotate-12 transition">
                {skill.icon}
              </span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
