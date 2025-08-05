export default function About() {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-4xl w-full backdrop-blur-sm bg-white/90 dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-700 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          About Me
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          <p className="text-gray-800 dark:text-gray-300 ">
            I am a full-stack web developer focused on performance, usability, and clean architecture.
          </p>
          <p>
            Over the past few years, I’ve built scalable products using{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Next.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, and Tailwind CSS
            </span>.
          </p>
          <p>
            I care deeply about writing maintainable code, building meaningful features, and collaborating across teams. Whether it’s building APIs, optimizing frontend UX, or deploying to the cloud — I stay focused on outcomes, not just code.
          </p>
        </div>
      </div>
    </section>
  );
}
