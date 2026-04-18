"use client";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white ${isOpen ? "h-full" : "h-auto"}`}
    >
      <div className="flex flex-row justify-between px-4 py-2">
        <p></p>
        <span className="font-bold text-lg text-black">AIRONE GAMIL</span>
        <button
          type="button"
          className="text-black md:hidden "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col justify-center items-center gap-4 h-full">
          <li>
            <a
              className="text-black"
              href="#hero"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-black"
              href="#skills"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-black"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-black"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
