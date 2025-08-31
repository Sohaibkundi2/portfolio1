const projects = [
  {
    title: "vidTwit",
    description: "Built a full-stack video & Tweet platform with authentication, media uploads, comments, subscriptions, and analytics. Integrated Cloudinary for optimized storage and implemented secure JWT authentication with full video/tweet CRUD.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Cloudinary", "Vercel","Render"],
    github: "https://github.com/sohaibkundi2/mytube",
    live: "https://my-tube-red.vercel.app/",
  },
  {
    title: "NextAuthApp",
    description: "Built a complete authentication system with Next.js, features includes signup, login, email verification, password reset, protected routes, and profile management.",
    tech: ["Next.js","TypeScript", "Node", "MongoDB","Nodemailer", "SMTP"],
    github: "https://github.com/Sohaibkundi2/Next-Auth-App",
    live: "https://next-auth-app-nine-vert.vercel.app",
  },
  {
    title: "URL Shortener",
    description: "Developed a full-stack URL Shortener with JWT authentication, custom slugs, click tracking, and custom domain integration. Users can create, manage, and track their shortened URLs through a user-friendly interface.",
    tech: ["MERN Stack", "JWT","Vercel", "Render"],
    github: "https://github.com/Sohaibkundi2/url-shortner",
    live: "https://shrtit.tech",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-8  bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="backdrop-blur-md p-6 rounded-xl shadow border border-[var(--muted)]/30 transition-all duration-200  flex flex-col justify-between "
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className=" mb-4">
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
