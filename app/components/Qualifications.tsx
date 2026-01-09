
export default function Qualifications() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500">Here’s My</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1A3D64]">Qualifications</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* EDUCATION */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Education</h3>

            <div className="relative pl-8 border-l-2 border-[#1A3D64] space-y-12">
              
              {/* Item 1 */}
              <div className="relative">
                <span className="absolute -left-10.5 top-1 w-5 h-5 bg-[#1A3D64] rounded-full"></span>
                <h4 className="font-semibold">
                  Bachelor of Computer Science
                </h4>
                <p className="text-sm text-gray-500">
                  University of Computer Studies, Mandalay • 2011 ~ 2014
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  Studied core computer science subjects including programming,
                  data structures, databases, and software engineering.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <span className="absolute -left-10.5 top-1 w-5 h-5 bg-[#1A3D64] rounded-full"></span>
                <h4 className="font-semibold">
                  Post Graduate Diploma in Software Development
                </h4>
                <p className="text-sm text-gray-500">
                  Myanmar Institute of Information Technology (MIIT) • 2016 ~ 2017
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  Focused on advanced software development, web technologies,
                  and practical project-based learning.
                </p>
              </div>

            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Experience</h3>

            <div className="relative pl-8 border-l-2 border-[#1A3D64] space-y-12">
              
              {/* Item 1 */}
              <div className="relative">
                <span className="absolute -left-10.5 top-1 w-5 h-5 bg-[#1A3D64] rounded-full"></span>
                <h4 className="font-semibold">
                  Junior Web Developer
                </h4>
                <p className="text-sm text-gray-500">
                  Creative Coder Myanmar • Jan 2025 ~ Present
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  Developed full-stack applications using Laravel, Vue.js,
                  React.js, Inertia.js, and MySQL. Built LMS, cargo shipment,
                  and e-commerce platforms with responsive UI and automation.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <span className="absolute -left-10.5 top-1 w-5 h-5 bg-[#1A3D64] rounded-full"></span>
                <h4 className="font-semibold">
                  Software Developer Intern
                </h4>
                <p className="text-sm text-gray-500">
                  Hornbill IT • Sept 2023 ~ Feb 2024
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  Contributed to a Restaurant POS system using Laravel and Vue.js.
                  Worked on order management, menu configuration, and backend APIs.
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <span className="absolute -left-10.5 top-1 w-5 h-5 bg-[#1A3D64] rounded-full"></span>
                <h4 className="font-semibold">
                  Frontend Developer (Freelance)
                </h4>
                <p className="text-sm text-gray-500">
                  Mandalay Style Restaurant • Oct 2024 ~ Dec 2024
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  Built a responsive, SEO-optimized restaurant website using
                  React.js, Next.js, and Tailwind CSS.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
