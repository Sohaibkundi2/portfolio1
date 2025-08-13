const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js (App Router)", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "MongoDB", "SQL (PostgreSQL) ", "Prisma", "RESTful APIs"],
  tools: ["Git / GitHub","Cloudinary", "Vercel / Render" , "Docker", "Figma", "Postman"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-8 py-16 bg-transparent min-h-[60vh] flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="backdrop-blur-md p-6 border border-[var(--muted)]/30 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-medium capitalize mb-4 ">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
