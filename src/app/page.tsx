// app/page.tsx
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import OpenSource from "../../components/OpenSource";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-24">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <OpenSource />
      <Contact />
    </main>
  );
}
