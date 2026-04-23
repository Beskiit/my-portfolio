export type ProjectImage = {
  src: string;
  label: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  service: string;
  focus: string;
  images: ProjectImage[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "terms-system",
    title: "TeRMS System",
    desc: "A full-stack records management system built for the teachers of DepEd to lessen the time of making the reports manually by doing it in a template that can be also exported into pdf, word, or excel.",
    tags: ["NodeJS", "React", "MySQL"],
    service: "Frontend Development, Backend System, Deployment",
    focus: "Records automation, reporting clarity, role-based access",
    images: [
      { src: "/images/terms.png", label: "Dashboard" },
      { src: "/images/terms2.png", label: "Records List" },
      { src: "/images/terms3.png", label: "Reports" },
      { src: "/images/terms4.png", label: "Settings" },
    ],
  },
  {
    slug: "apartment-system",
    title: "Apartment System",
    desc: "A Window Forms application that can be used by the owner of the apartment. It can track the new tenants and also the old tenants and the payment dues. It can also create a agreement upon renting an apartment.",
    tags: ["C#", "WinForms", "SQLite"],
    service: "Desktop App Development, Database Design, Property Management",
    focus: "Tenant operations, payment visibility, property insights",
    images: [
      { src: "/images/apartment.png", label: "Home" },
      { src: "/images/apartment1.png", label: "Tenants" },
      { src: "/images/apartment2.png", label: "Payments" },
      { src: "/images/apartment3.png", label: "Reports" },
      { src: "/images/apartment4.png", label: "Settings" },
    ],
  },
  {
    slug: "clms",
    title: "CLMS",
    desc: "A full-stack Computer Laboratory Management System featuring a web dashboard for admins and teachers, and a mobile app for students. Students can report faulty computers and reserve their preferred PC directly from their phone, with all activity logged to a central database in real time.",
    tags: ["PHP", "React", "SQL", "Android Studio", "SQLite"],
    service: "Full-Stack Development, Web Dashboard, Mobile App",
    focus: "PC Reservation, Fault Reporting, Lab Monitoring",
    images: [
      { src: "/images/clms.png", label: "Dashboard" },
      { src: "/images/clms1.png", label: "Courses" },
      { src: "/images/clms2.png", label: "Students" },
      { src: "/images/clms3.png", label: "Grades" },
      { src: "/images/clms4.png", label: "Settings" },
    ],
  },
];
