import Image from "next/image";
import Link from "next/link";
import { projects } from "@/components/pages/project/project-data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f2f2f0] px-5 py-14 text-black md:px-8 lg:px-14"
    >
      <h1 className="text-4xl text-center py-5">My Projects</h1>
      <div
        id="projects-index"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2"
      >
        {projects.map((project, pi) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block overflow-hidden border border-black/15 bg-white"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={project.images[0].src}
                alt={`${project.title} preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={pi === 0}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
