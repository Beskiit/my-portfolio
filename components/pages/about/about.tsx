import React from "react";
import Download from "@/components/icons/download";
import Figma from "@/components/icons/figma";
import Vsc from "@/components/icons/vsc";
import Vs from "@/components/icons/vs";
import Frontend from "@/components/icons/frontend";
import Ui from "@/components/icons/ui";
import Backend from "@/components/icons/backend";
import Responsive from "@/components/icons/responsive";
import Database from "@/components/icons/database";
import Rocket from "@/components/icons/rocket";
import Node from "@/components/icons/node";

export default function about() {
  return (
    <section className="flex flex-col items-center gap-4 text-black">
      <h1 className="text-3xl font-semibold">Airone Gamil</h1>
      <span className="text-center text-[0.725rem] mt-2 w-3/4 text-gray-600">
        I create modern, scalable web applications that help turn ideas into
        practical, real-world solutions. My focus is on building systems that
        are easy to use, fast, and reliable, while ensuring the design feels
        intuitive and engaging for users. By combining thoughtful planning,
        clean development, and attention to user experience, I deliver web
        solutions that support your goals and grow with your business.
      </span>

      <button className="flex flex-row items-center justify-center gap-4 border-2 border-black rounded-2xl px-4 py-2">
        <Download /> Download CV
      </button>

      <div className="flex flex-row gap-4 mt-4">
        <Figma />
        <Vsc />
        <Vs />
        <Node />
      </div>

      <hr className="border-2 border-gray-400 w-10/12" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">My Services</h1>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex flex-col w-3/4 items-center justify-center gap-4">
            <div className="flex justify-start items-center gap-3 bg-gray-300 rounded-lg py-2 px-4 h-20 w-full">
              <div className="flex justify-center items-center w-10 shrink-0">
                <Ui />
              </div>
              <span>UI/UX design using Figma</span>
            </div>

            <div className="flex justify-start items-center gap-3 bg-gray-300 rounded-lg py-2 px-4 h-20 w-full">
              <div className="flex justify-center items-center w-10 shrink-0">
                <Backend />
              </div>
              <span>Back-end development</span>
            </div>

            <div className="flex justify-start items-center gap-3 bg-gray-300 rounded-lg py-2 px-4 h-20 w-full">
              <div className="flex justify-center items-center w-10 shrink-0">
                <Responsive />
              </div>
              <span>
                Responsive website <br /> design for all devices
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 bg-gray-300 rounded-lg py-2 px-4 h-20 w-full">
              <div className="flex justify-center items-center w-10 shrink-0">
                <Frontend />
              </div>
              <span>Front-end development</span>
            </div>

            <div className="flex justify-start items-center gap-3 bg-gray-300 rounded-lg py-2 px-4 h-20 w-full">
              <div className="flex justify-center items-center w-10 shrink-0">
                <Database />
              </div>
              <span>Custom full-stack web application development</span>
            </div>

            <div className="flex justify-start items-center gap-3 bg-gray-300 rounded-lg py-2 px-4 h-20 w-full">
              <div className="flex justify-center items-center w-10 shrink-0">
                <Rocket />
              </div>
              <span>Website Deployment and Hosting setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
