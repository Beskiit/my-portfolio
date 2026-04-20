import React from "react";
import Mail from "@/components/icons/mail";
import Facebook from "@/components/icons/facebook";
import X from "@/components/icons/x";
import Instagram from "@/components/icons/instagram";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 p-4 text-center text-sm text-black">
      <div className="md:flex md:justify-between md:w-full md:px-10">
        <div className="md:flex md:flex-col md:gap-4">
          <div className="my-2">
            <h1 className="text-2xl font-semibold">Airone Gamil</h1>
          </div>
          <div className="flex mb-2 flex-row justify-center gap-4 md:flex-col">
            <a href="" className="md:flex md: items-center md:gap-3.5">
              <Facebook />
              <span className="hidden md:block hover:underline">Facebook</span>
            </a>
            <a href="" className="md:flex md: items-center md:gap-3.5">
              <X />
              <span className="hidden md:block hover:underline">X</span>
            </a>
            <a href="" className="md:flex md: items-center md:gap-3.5">
              <Instagram />
              <span className="hidden md:block hover:underline">Instagram</span>
            </a>
          </div>
        </div>
        <hr className="bg-black border w-11/12 md:hidden" />
        <div className="md:flex md:flex-col md:gap-4">
          <h1 className="text-xl font-semibold">Menu</h1>
          <nav>
            <ul className="flex flex-col gap-2">
              <a href="" className="hover:underline">
                Home
              </a>
              <a href="" className="hover:underline">
                About Me
              </a>
              <a href="" className="hover:underline">
                Project
              </a>
            </ul>
          </nav>
        </div>
        <hr className="bg-black border w-11/12 md:hidden" />
        <div className="md:flex md:flex-col md:gap-4">
          <h1 className="text-xl font-semibold">Contact Me</h1>
          <div className="flex flex-row gap-2 items-center">
            <Mail />{" "}
            <a href="mailto:aironegamil123@gmail.com" className="text-gray-500">
              aironegamil123@gmail.com
            </a>
          </div>
        </div>
      </div>
      <hr className="hidden md:block md:bg-black md:border md:w-11/12" />
      <p>
        Copyright &copy; {new Date().getFullYear()} Airone Gamil. All rights
        reserved.
      </p>
    </footer>
  );
}
