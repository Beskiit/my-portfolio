import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/components/pages/project/project-data";

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
        <article className="mt-10 grid items-start gap-7 border-t border-black/15 pt-8 md:grid-cols-12 md:gap-10">
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
          </div>

          <div className="md:col-span-7">
            <div className="rounded-[28px] bg-[#111] p-4 shadow-[0_25px_40px_-20px_rgba(0,0,0,0.65)] md:p-5">
              <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.images[0].src}
                    alt={`${project.title} main showcase`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 56vw"
                    priority
                  />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 md:grid-cols-4">
                {project.images.slice(1).map((img) => (
                  <div
                    key={`${project.title}-${img.src}`}
                    className="overflow-hidden rounded-lg"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={`${project.title} - ${img.label}`}
                        fill
                        className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                        sizes="(max-width: 768px) 30vw, 16vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
