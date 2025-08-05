export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Whether you have an idea, opportunity, or just want to say hi — my inbox is open.
        </p>

        <form
          method="POST"
          className="space-y-6 text-left"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg bg-white/70 dark:bg-white/10 backdrop-blur-md border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg bg-white/70 dark:bg-white/10 backdrop-blur-md border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border rounded-lg bg-white/70 dark:bg-white/10 backdrop-blur-md border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-700 dark:text-gray-300 space-y-2 text-sm sm:text-base">
          <p>
            Or email me at:{" "}
            <a
              href="mailto:sohaibkundi2@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              sohaibkundi2@gmail.com
            </a>
          </p>
          <p>
            Connect on LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/sohaibkundi2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/sohaibkundi2
            </a>
          </p>
          <p>
            Connect on GitHub:{" "}
            <a
              href="https://github.com/sohaibkundi2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/sohaibkundi2
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
