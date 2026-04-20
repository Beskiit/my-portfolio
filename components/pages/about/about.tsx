import React from "react";
import Download from "@/components/icons/download";
import Figma from "@/components/icons/figma";
import Vsc from "@/components/icons/vsc";
import Vs from "@/components/icons/vs";
import Node from "@/components/icons/node";

export default function about() {
  return (
    <section id="about" className="flex flex-col items-center gap-4 text-black">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold md:text-4xl">Airone Gamil</h1>
        <span className="text-center text-[0.725rem] mt-2 w-3/4 text-gray-600 md:text-lg">
          I create modern, scalable web applications that help turn ideas into
          practical, real-world solutions. My focus is on building systems that
          are easy to use, fast, and reliable, while ensuring the design feels
          intuitive and engaging for users. By combining thoughtful planning,
          clean development, and attention to user experience, I deliver web
          solutions that support your goals and grow with your business.
        </span>

        <button className="flex flex-row items-center justify-center gap-4 border-2 mt-4 border-black rounded-2xl px-4 py-2">
          <Download /> Download CV
        </button>
      </div>

      <div className="flex flex-row gap-4 mt-4">
        <Figma className="md:h-12 md:w-12" />
        <Vsc className="md:h-12 md:w-12" />
        <Vs className="md:h-12 md:w-12" />
        <Node className="md:h-12 md:w-12" />
      </div>

      <hr className="border-2 border-gray-400 w-10/12" />
    </section>
  );
}
