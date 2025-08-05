export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 py-6 mt-20 bg-white dark:bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {currentYear} Sohaib Kundi. All rights reserved.
        </p>

        <div className="text-sm text-gray-600 dark:text-gray-400 space-x-4">
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
