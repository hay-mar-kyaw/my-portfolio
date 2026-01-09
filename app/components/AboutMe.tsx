// app/components/About.tsx
import { Mail, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import AboutTitle from "./AboutTitle";


export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1A3D64]">Why Choose Me</span>
          </h2>
        </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        
        {/* LEFT */}
        {/* <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-[#1A3D64] text-white px-3 py-1 rounded-md">
              About Me
            </span>
          </h2>

          <div className="relative w-40 h-40 rounded-full overflow-hidden ">
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
        </div> */}
        <AboutTitle />

        {/* RIGHT */}
        <div className="md:col-span-2">
           <p className="text-gray-600 leading-relaxed text-lg">
            Hi there! I’m <span className="font-semibold text-gray-900">Hay Mar Kyaw</span>, 
            a motivated Software Engineer with hands-on experience working on real-world 
            applications across education, logistics, and e-commerce domains. I enjoy 
            building reliable, user-centered solutions and contributing to impactful projects 
            through collaboration and continuous learning.
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <InfoItem
              icon={<Phone size={20} />}
              label="Phone"
              value="09964033115"
            />
            <InfoItem
              icon={<User size={20} />}
              label="Age"
              value="31 yrs"
            />
            <InfoItem
              icon={<Mail size={20} />}
              label="Email"
              value="38komal@gmail.com"
            />
            <InfoItem
              icon={<MapPin size={20} />}
              label="Location"
              value="Mandalay, Myanmar"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1A3D64] text-white">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}
