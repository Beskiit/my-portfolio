import Hero from "@/components/pages/home/hero";
import Skills from "@/components/pages/home/skills";
import About from "@/components/pages/about/about";
import Education from "@/components/pages/about/education";
import Project from "@/components/pages/project/project";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <About />
        <Education />
        <Project />
      </div>
    </>
  );
}
