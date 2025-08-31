export default function OpenSource() {
  return (
    <section
      id="opensource"
      className=" px-4 sm:px-6 lg:px-20 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full backdrop-blur-sm border border-[var(--muted)]/30 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Open Source & Community
        </h2>

        <ul className="list-disc list-inside space-y-4 text-base sm:text-lg leading-relaxed">
          <li>
            Raised issues and suggested improvements in{" "}
            <a
              href="https://github.com/sohamkamani/gemini-cli/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Gemini CLI
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/date-fns/date-fns/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              date-fns
            </a>
            , showcasing collaboration and problem-solving.
          </li>
          <li>
            Reviewed contributions in{" "}
            <a
              href="https://github.com/freeCodeCamp/freeCodeCamp/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              freeCodeCamp
            </a>
            , including grammar fixes and small improvements.
          </li>
          <li>
            Made a pull request to the{" "}
            <a
              href="https://github.com/firstcontributions/first-contributions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              First Contributions
            </a>{" "}
            repository as part of onboarding into open source.
          </li>
          <li>
            Maintain and improve personal repositories on{" "}
            <a
              href="https://github.com/sohaibkundi2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            , following clean commit practices and structured documentation.
          </li>
        </ul>
      </div>
    </section>
  );
}
