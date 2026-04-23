"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigateToSection = (sectionId: string) => {
    setIsOpen(false);
    if (pathname === "/") return;
    router.push(`/#${sectionId}`);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white ${isOpen ? "h-full" : "h-auto"}`}
    >
      <div className="flex flex-row justify-between px-4 py-2">
        <p className="md:hidden"></p>
        <span className="font-bold text-lg text-black">AIRONE GAMIL</span>
        <button
          type="button"
          className="text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden md:flex gap-6">
          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
              onClick={() => navigateToSection("hero")}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
              onClick={() => navigateToSection("about")}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
              onClick={() => navigateToSection("projects")}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <Link
              href="/contact"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col justify-center items-center gap-4 h-full">
          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-black"
              onClick={() => navigateToSection("hero")}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-black"
              onClick={() => navigateToSection("about")}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-black"
              onClick={() => navigateToSection("projects")}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <Link
              href="/contact"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
