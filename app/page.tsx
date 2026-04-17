import Hero from "@/components/pages/home/hero";
import Skills from "@/components/pages/home/skills";
import About from "@/components/pages/about/about";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <About />
      </div>
    </>
  );
}
