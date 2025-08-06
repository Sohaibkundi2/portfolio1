"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl w-full space-y-6 backdrop-blur-md p-6 rounded-xl shadow-md border border-[var(--muted)]/30">
        {/* Name + Role */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
          Hi, I am <span className="text-[var(--accent)]">Muhammad Sohaib</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-[var(--muted)]">
          Full Stack Web Developer · Problem Solver · Tech Explorer
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          I craft performant, scalable web applications using modern stacks like React, Next.js, Tailwind,
          Node.js, MongoDB and PostgreSQL. Passionate about clean architecture, maintainable code, and
          meaningful digital experiences.
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-block mt-2 px-5 py-2 rounded-md bg-[var(--accent)] hover:brightness-110 text-white transition font-medium"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
