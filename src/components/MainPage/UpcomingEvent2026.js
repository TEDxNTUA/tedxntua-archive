"use client";
import React from "react";

const UpcomingEvent2026 = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 overflow-hidden rounded-2xl shadow-2xl group cursor-pointer border border-white/10">
      <a
        href="https://2026.tedxntua.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video md:aspect-[21/9] overflow-hidden"
      >
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block transition-transform duration-700 group-hover:scale-105"
        >
          <source src="/2026/output_desktop.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src="/2026/output_android.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500">
          <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <h3 className="text-white text-3xl md:text-5xl font-black mb-2 tracking-tighter">
              TEDx<span className="text-[#eb0027]">NTUA</span> 2026
            </h3>
            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl leading-tight">
              Cycle 0 — Exploring the origins of innovation and the power of ideas that redefine our future.
            </p>
            <div className="mt-4 inline-flex items-center text-white font-bold bg-[#eb0027] px-6 py-2 rounded-full transform transition-transform duration-300 group-hover:scale-110">
              Visit 2026 Site
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Subtle Glow */}
        <div className="absolute -inset-1 bg-[#eb0027]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
      </a>
    </div>
  );
};

export default UpcomingEvent2026;
