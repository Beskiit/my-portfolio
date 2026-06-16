import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/components/pages/project/project-data";
import ProjectGallery from "@/components/pages/project/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-[#f2f2f0] px-5 py-14 text-black md:px-8 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-black/60 transition-colors hover:text-black"
        >
          <span aria-hidden="true">←</span> Back to projects
        </Link>
        <article className="mt-6 grid items-start gap-7 border-t border-black/15 pt-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h1 className="text-4xl leading-[1.05] font-semibold md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-black/70">
              {project.desc}
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-[11px] tracking-[0.12em] text-black/45 uppercase">
                  CMS / Stack
                </p>
                <p className="mt-1 text-sm text-black/85">
                  {project.tags.join(" · ")}
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.12em] text-black/45 uppercase">
                  Service
                </p>
                <p className="mt-1 text-sm text-black/85">{project.service}</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.12em] text-black/45 uppercase">
                  Focus
                </p>
                <p className="mt-1 text-sm text-black/85">{project.focus}</p>
              </div>
            </div>

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/80"
                  >
                    View Live Demo
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/25 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                  >
                    View Source
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="md:col-span-7">
            <ProjectGallery title={project.title} images={project.images} />
          </div>
        </article>
      </div>
    </section>
  );
}
