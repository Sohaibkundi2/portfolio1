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
          {/* Apertre */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium">
              Project Admin & Maintainer — Apertre 3.0
            </h3>
            <p className="text-sm opacity-70 mb-2">
              Feb 2026 – Mar 2026 · Part-time · Remote
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
              <li>
                Onboarded the vidTwit project into the Apertre 3.0 open-source
                program and managed the repository for smooth contributor coordination.
              </li>
              <li>
                Reviewed and merged pull requests for features including OTP email
                verification, trending videos, watch later, and repost —
                maintaining code quality and project integrity.
              </li>
              <li>
                Designed the frontend roadmap and integrated backend features,
                including a user-friendly playlists UI.
              </li>
            </ul>
          </div>

          {/* 10Pearls */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium">
              Software Development Intern — 10Pearls Pakistan
            </h3>
            <p className="text-sm opacity-70 mb-2">
              Dec 2025 – Feb 2026 · Remote
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
                Wrote unit tests using Mocha/Chai and Jest, used SonarQube for static
                code analysis, and cleared internal assessments in React, Node.js, and
                Unit Testing.
              </li>
            </ul>
          </div>

          {/* Elite Coders */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium">
              Open Source Contributor — Elite Coders
            </h3>
            <p className="text-sm opacity-70 mb-2">
              Jan 2026 · Remote
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