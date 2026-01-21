export default function Experience() {
  return (
    <section
      id="experience"
      className="px-4 lg:px-20 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full backdrop-blur-sm border border-[var(--muted)]/30 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Experience
        </h2>

        <div className="space-y-8">
          {/* 10Pearls */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium">
              Software Development Intern — 10Pearls Pakistan
            </h3>
            <p className="text-sm opacity-70 mb-2">
              Dec 2025 – Present · Remote
            </p>

            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
              <li>
                Built a full-stack Notes application with authentication, CRUD
                operations, and rich-text editing using Node.js, React.js, and
                MongoDB.
              </li>
              <li>
                Developed RESTful APIs, integrated Pino Logger, and implemented
                global exception handling for improved reliability.
              </li>
              <li>
                Wrote unit tests using Mocha/Chai and Jest, and used SonarQube for
                static code analysis.
              </li>
            </ul>
          </div>

          {/* Elite Coders */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium">
              Open Source Contributor — Elite Coders
            </h3>
            <p className="text-sm opacity-70 mb-2">
              Jan 2026 – Present · Remote
            </p>

            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
              <li>
                Contributed to multiple open-source projects through feature
                development, bug fixes, and documentation improvements.
              </li>
              <li>
                Collaborated with maintainers via GitHub issues, discussions, and
                pull requests.
              </li>
            </ul>
          </div>

          {/* Internship Pakistan */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium">
              Frontend Developer Intern — Internship Pakistan
            </h3>
            <p className="text-sm opacity-70 mb-2">
              Jan 2025 – Feb 2025 · Remote
            </p>

            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
              <li>
                Developed 5+ web applications, including multiple React projects
                with fully responsive interfaces.
              </li>
              <li>
                Designed mobile-first UI and optimized frontend performance
                across devices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
