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
    <section id="projects">
      <div className="flex items-center justify-center py-10">
        <h2 className="text-3xl font-semibold">My Projects</h2>
      </div>

      <div className="relative">
        {allSlides.map((slide, i) => (
          <div
            key={i}
            className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 gap-4"
            style={{ zIndex: i + 1 }}
          >
            <div
              className="w-full bg-white rounded-2xl p-4 shadow-md mt-10"
              style={{ marginTop: `${i * 20}px` }}
            >
              {slide.isFirst && (
                <h3 className="text-2xl font-semibold mb-2">{slide.title}</h3>
              )}

              <p className="text-xs text-gray-400 mb-2">
                {slide.label} · {slide.current} / {slide.total}
              </p>

              <div className="w-full h-[200px] md:h-[320px] relative">
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>

              {slide.isFirst && (
                <>
                  <p className="text-gray-500 text-sm mt-2 text-center">
                    {slide.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap justify-center mt-2">
                    {slide.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-sm px-3 py-1 bg-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
