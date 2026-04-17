import Hero from "@/components/pages/home/hero";
import Skills from "@/components/pages/home/skills";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
      </div>
    </>
  );
}
