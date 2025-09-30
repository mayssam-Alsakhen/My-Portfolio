import Timeline from "@/components/Timeline";
import Hero from "@/components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Volunteering from "../components/sections/Volunteering";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Timeline />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Volunteering />
        <Contact/>
    </main>
  );
}
