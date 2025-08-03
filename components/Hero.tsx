"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl w-full space-y-6 backdrop-blur-md bg-white/60 dark:bg-black/40 p-6 rounded-xl shadow-md">
        {/* Name + Role */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Hi, I'm  <span className="text-blue-600 dark:text-blue-400">Muhmammad Sohaib</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Full Stack Web Developer · Problem Solver · Tech Explorer
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          I craft performant, scalable web applications using modern stacks like React, Next.js, Tailwind,
          Node.js, MongoDB and PostgreSQL. Passionate about clean architecture, maintainable code, and
          meaningful digital experiences.
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-block mt-2 px-5 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
