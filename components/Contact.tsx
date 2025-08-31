"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget; // Strongly typed now
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });


    if (res.ok) {
      setStatus("Thanks for reaching out! I'll get back to you as soon as possible.");
      form.reset();
    } else {
      setStatus("Hmm, something went wrong. Could you try again?");
    }
  }


  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="mb-10">
          Whether you have an idea, opportunity, or just want to say hi — my inbox is open.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg backdrop-blur-md border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg backdrop-blur-md border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border rounded-lg backdrop-blur-md border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm mt-2 text-center">
              {status}
            </p>
          )}
        </form>

        {/* Direct Contact Links */}
        <div className="mt-10 space-y-2 text-sm sm:text-base">
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
