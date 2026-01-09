// app/components/Hero.tsx or components/Hero.tsx
import QuoteIcon from "@/public/Icons/QuoteIcon";
import Image from "next/image";


export default function Hero() {
  return (
    <section className=" bg-white">
        <div className="max-w-7xl mx-auto pt-20">
            <div className="mb-12 text-center">
            <p className="font-medium mb-3">
                <span className="text-[#1A3D64]">—</span> Hello There!
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                I’m <span className="text-[#1A3D64]">Hay Mar Kyaw</span>
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
                Software Engineer based in Myanmar
            </p>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mb-20 px-6 flex justify-between items-center flex-col md:flex-row gap-10">
            <div className="max-w-sm mt-10">
                <QuoteIcon />
                <p className="mt-5 text-gray-500 text-justify">
                Motivated Software Engineer with hands-on experience in full-stack
                development using Laravel, Vue.js, React.js, and Next.js. Passionate
                about clean code, performance, and scalable solutions.
                </p>
                {/* CTA BUTTONS */}
                <div className="flex gap-4 mt-24">
                    <a
                    href="#projects"
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
                    >
                    Portfolio
                    <span className="bg-[#1A3D64] w-6 h-6 rounded-full flex items-center justify-center text-sm">
                        +
                    </span>
                    </a>

                    <a
                    href="#contact"
                    className="px-6 py-3 border border-gray-300 rounded-full hover:border-[#1A3D64] hover:text-[#1A3D64] transition"
                    >
                    Hire Me
                    </a>
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
                { name: "React.js", top: "-7%", left: "37%" },
                { name: "Next.js", top: "20%", right: "-15%" },
                { name: "Laravel", bottom: "15%", right: "-10%" },
                { name: "Vue.js", bottom: "-10%", left: "25%" },
                { name: "Firebase", bottom: "-15%", left: "55%" },
                { name: "Tailwind", top: "20%", left: "-15%" },
                { name: "MySQL", top: "55%", left: "-20%" },
            ].map((skill, i) => (
                <span
                key={skill.name}
                className="absolute px-4 py-2 text-sm rounded-full bg-white shadow-md animate-float"
                style={{
                    ...skill,
                    animationDelay: `${i * 0.5}s`,
                }}
                >
                {skill.name}
                </span>
            ))}
            </div>
        </div>
    </section>
  );
}
