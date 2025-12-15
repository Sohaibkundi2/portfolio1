import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-4xl w-full backdrop-blur-sm border border-[var(--muted)]/30 p-8 rounded-xl shadow-md text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/sohaibkhan.png"
            alt="Muhammad Sohaib"
            width={150}
            height={150}
            className="rounded-full border-2 border-[var(--muted)]
             transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          About Me
        </h2>

        <div className="space-y-4 text-base sm:text-lg leading-relaxed">
          <p>
            I am a full-stack web developer focused on performance, usability, and clean architecture.
          </p>
          <p>
            Over the past few years, I&rsquo;ve built scalable products using{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Next.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, and Tailwind CSS
            </span>.
          </p>
          <p>
            I care deeply about writing maintainable code, building meaningful features, and collaborating across teams. Whether it&rsquo;s building APIs, optimizing frontend UX, or deploying to the cloud &mdash; I stay focused on outcomes, not just code.
          </p>
          <p>
            Currently strengthening Data Structures & Algorithms with consistent problem-solving practice.
          </p>
        </div>
      </div>
    </section>
  );
}
