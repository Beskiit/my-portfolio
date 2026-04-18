"use client";
import Image from "next/image";

const projects = [
  {
    title: "TeRMS System",
    desc: "A full-stack records management system built for DepEd.",
    tags: ["Laravel", "React", "MySQL"],
    images: [
      { src: "/images/terms.png", label: "Dashboard" },
      { src: "/images/terms2.png", label: "Records List" },
      { src: "/images/terms3.png", label: "Reports" },
      { src: "/images/terms4.png", label: "Settings" },
    ],
  },
  {
    title: "Apartment System",
    desc: "Full stack apartment management app.",
    tags: ["Laravel", "React"],
    images: [
      { src: "/images/apartment.png", label: "Home" },
      { src: "/images/apartment1.png", label: "Tenants" },
      { src: "/images/apartment2.png", label: "Payments" },
      { src: "/images/apartment3.png", label: "Reports" },
      { src: "/images/apartment4.png", label: "Settings" },
    ],
  },
  {
    title: "CLMS",
    desc: "A classroom learning management system.",
    tags: ["Laravel", "React"],
    images: [
      { src: "/images/clms.png", label: "Dashboard" },
      { src: "/images/clms1.png", label: "Courses" },
      { src: "/images/clms2.png", label: "Students" },
      { src: "/images/clms3.png", label: "Grades" },
      { src: "/images/clms4.png", label: "Settings" },
    ],
  },
];

export default function Projects() {
  const allSlides = projects.flatMap((project) =>
    project.images.map((img, ii) => ({
      ...img,
      title: project.title,
      desc: project.desc,
      tags: project.tags,
      isFirst: ii === 0,
      current: ii + 1,
      total: project.images.length,
    })),
  );

  return (
    <section id="projects" className="text-black">
      <div className="flex items-center justify-center py-10">
        <h2 className="text-3xl font-semibold">My Projects</h2>
      </div>

      {projects.map((project, pi) => (
        <div key={pi} className="relative">
          {/* Description - sits right after first image visually */}
          <div
            className="sticky top-[60vh] bg-white px-6 py-4 flex flex-col gap-2"
            style={{ zIndex: project.images.length + 10 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-500 text-sm">{project.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-sm px-3 py-1 bg-gray-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* All images stack on top of description */}
          {project.images.map((img, ii) => (
            <div
              key={ii}
              className="sticky top-0 h-[60vh] flex items-center justify-center px-6"
              style={{ zIndex: ii + 1 }}
            >
              <div
                className="w-full bg-white rounded-2xl overflow-hidden"
                style={{ marginTop: `${ii * 16}px` }}
              >
                <div className="w-full h-[200px] md:h-[280px] relative">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-400 text-center py-1">
                  {img.label} · {ii + 1} / {project.images.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
