"use client";
import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

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
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col justify-center items-center gap-4 h-full">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-black"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-black"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-black"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-black"
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
