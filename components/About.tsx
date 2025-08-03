export default function About() {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-4xl w-full backdrop-blur-md bg-white/60 dark:bg-black/40 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          About Me
        </h2>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a full-stack web developer with a focus on performance, usability, and clean
          architecture. Over the past few years, I have built scalable products using technologies like
          <strong className="font-semibold"> Next.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, and Tailwind CSS</strong>.
          <br /><br />
          I care deeply about writing maintainable code, building meaningful features, and
          collaborating across teams. Whether it's building an API, optimizing frontend UX, or deploying to the cloud — I am focused on outcomes, not just code.
        </p>
      </div>
    </section>
  );
}
