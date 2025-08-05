const projects = [
  {
    title: "myTubeX",
    description: "A full-featured video, tweet platform like YouTube, X(twitter) with auth, uploads, likes, comments, and a React frontend.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/sohaibkundi2/mytube",
    live: "https://mytube.example.com",
  },
  {
    title: "NextAuthApp",
    description: "An online learning platform with instructor dashboards, secure video hosting, and course enrollment.",
    tech: ["Next.js","TypeScript", "Node", "MongoDB", "SMTP"],
    github: "https://github.com/Sohaibkundi2/Next-Auth-App",
    live: "https://next-auth-app-nine-vert.vercel.app",
  },
  {
    title: "URL Shortener",
    description: "A minimal and fast link shortener with analytics, user dashboard, and JWT-based auth.",
    tech: ["MERN", "JWT", "Render", "Vercel"],
    github: "https://github.com/Sohaibkundi2/url-shortner",
    live: "https://shrtit.tech",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="backdrop-blur-md bg-white/60 dark:bg-black/40 p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
