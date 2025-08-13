export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t px-4 sm:px-6 lg:px-8 py-6 mt-20  backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm ">
          &copy; {currentYear}
           {" "} Sohaib. All rights reserved.
        </p>

        <div className="text-sm space-x-4">
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
