"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section id="contact" className="relative py-20 px-6 lg:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
            <p className="text-gray-500">— Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1A3D64]">Let’s Work Together</span>
          </h2>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            I’m open to full-time roles, freelance projects, or collaborations.
            Feel free to reach out directly.
          </p>
          
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Email */}
          <a
            href="mailto:38komal@gmail.com"
            className="group rounded-2xl border border-[#1A3D64] p-6 hover:border-[#1A3D64] hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-full bg-[#1A3D64]/10 flex items-center justify-center mb-4 group-hover:bg-[#1A3D64] transition">
              <FaEnvelope className="text-[#1A3D64] group-hover:text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-sm text-gray-600 mt-1">
              38komal@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+951234567890"
            className="group rounded-2xl border border-[#1A3D64] p-6 hover:border-[#1A3D64] hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-full bg-[#1A3D64]/10 flex items-center justify-center mb-4 group-hover:bg-[#1A3D64] transition">
              <FaPhoneAlt className="text-[#1A3D64] group-hover:text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-sm text-gray-600 mt-1">
              +95 09-964033115
            </p>
          </a>

          {/* Location */}
        <div className="rounded-2xl border border-[#1A3D64] p-6">
            <div className="w-12 h-12 rounded-full bg-[#1A3D64]/10 flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-[#1A3D64]" />
            </div>
            <h3 className="font-semibold text-gray-900">Location</h3>
            <p className="text-sm text-gray-600 mt-1">
              Mandalay, Myanmar
            </p>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/komal-kumari-hmk/"
            target="_blank"
            className="group rounded-2xl border border-[#1A3D64] p-6 hover:border-[#1A3D64] hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-full bg-[#1A3D64]/10 flex items-center justify-center mb-4 group-hover:bg-[#1A3D64] transition">
              <FaLinkedin className="text-[#1A3D64] group-hover:text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">LinkedIn</h3>
            <p className="text-sm text-gray-600 mt-1">
              Connect with me
            </p>
          </a>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:38komal@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1A3D64] text-white font-medium hover:bg-[#163457] transition"
          >
            Start a Conversation →
          </a>
        </div>

      </div>
    </section>
  );
}
