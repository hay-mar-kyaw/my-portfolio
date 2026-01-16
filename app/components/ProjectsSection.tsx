"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ExternalLink } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Learning Management System",
      description:
        "Clean and intuitive UI designed for an e-learning experience.Focused on usability, accessibility, and responsive design across devices.",
      image: "/projects/lms.png",
      tech: ["Laravel", "Vue.js", "Inertia.js"],
      live: "https://hay-mar-kyaw.github.io/hornbill-it/",
    },
    {
      title: "Cargo Shipment Platform",
      description:
        "Shipment tracking and cargo management system with admin dashboard.",
      image: "/projects/Cargo.png",
      tech: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
      live: "https://www.cargopromyanmar.com/app/login",
    },
    {
      title: "Restaurant Website",
      description:
        "High-performance, SEO-optimized restaurant website built with Next.js.",
      image: "/projects/restaurant.png",
      tech: ["React", "Next.js", "Tailwind"],
      live: "https://mandalaystylerestaurant.sg",
    },
    {
      title: "OPOM POS",
      description:
        "Modern POS system with a fast, responsive interface and secure backend APIs.Optimized for performance, scalability, and real-world business use",
      image: "/projects/POS.png",
      tech: ["Laravel","React", "Next.js", "Tailwind","MySQL"],
      live: "https://opom-pos-nextjs.vercel.app/login",
    },
    {
      title: "DJ Pack Myanmar",
      description:
        "Modern and visually engaging UI design for a DJ service platform.Focused on clean layout, responsive design, and smooth user experience.",
      image: "/projects/DJPack.png",
      tech: ["Laravel","Vue.js", "Tailwind"],
      live: "https://www.djpackmm.com/",
    },
  ];

  return (
    <section
  id="projects"
  className="relative  pb-10 bg-linear-to-b
             from-slate-50 via-gray-50/40 to-slate-100 overflow-hidden"
>
  


      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500">— Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1A3D64]">Featured Projects</span>
          </h2>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and clean architecture.
          </p>
        </div>
        

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
                  }`}
                >
                  {/* Card */}
                  <div className="rounded-3xl overflow-hidden shadow-md bg-white/90 backdrop-blur">

                    {/* Image (TOP, always visible) */}
                    <div className="relative h-56">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Glass content (BOTTOM) */}
                    <div
                    className="relative p-6 backdrop-blur-xl
                                bg-white/60 border-t border-white/30
                                shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                    >

                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                        <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full
                                    border border-slate-200 text-slate-600
                                    bg-white hover:border-primary hover:text-primary
                                    transition-colors duration-200"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>


                      {/* CTA */}
                      <a
                        href={project.live}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-medium
                                   text-primary hover:underline"
                      >
                        View Project
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
