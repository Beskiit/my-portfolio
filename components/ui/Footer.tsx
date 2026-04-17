import React from "react";
import Mail from "@/components/icons/mail";
import Facebook from "@/components/icons/facebook";
import X from "@/components/icons/x";
import Instagram from "@/components/icons/instagram";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 p-4 text-center text-sm text-black">
      <h1 className="text-2xl font-semibold">Airone Gamil</h1>
      <div className="flex flex-row gap-4">
        <a href="">
          <Facebook />
        </a>
        <a href="">
          <X />
        </a>
        <a href="">
          <Instagram />
        </a>
      </div>
      <hr className="bg-black border w-11/12" />
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
      <hr className="bg-black border w-11/12" />
      <h1 className="text-xl font-semibold">Contact Me</h1>
      <div className="flex flex-row gap-2 items-center">
        <Mail />{" "}
        <a href="mailto:aironegamil123@gmail.com" className="text-gray-500">
          aironegamil123@gmail.com
        </a>
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()} Airone Gamil. All rights
        reserved.
      </p>
    </footer>
  );
}
