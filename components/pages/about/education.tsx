import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import ReactIcon from "@/components/icons/react";
import Python from "@/components/icons/python";
import Tailwind from "@/components/icons/tailwind";
import Frontend from "@/components/icons/frontend";
import Ui from "@/components/icons/ui";
import Backend from "@/components/icons/backend";
import Responsive from "@/components/icons/responsive";
import Database from "@/components/icons/database";
import Rocket from "@/components/icons/rocket";
import { SiNextdotjs, SiSupabase, SiMysql } from "react-icons/si";

export default function education() {
  return (
    <section id="education" className="text-black">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">My Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 w-11/12">
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
              <span>Responsive website design for all devices</span>
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
        <section className="w-full px-4 md:px-10 mt-10 mb-10">
          <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 bg-gray-100 border border-gray-200 rounded-xl py-5 px-6">
              <div className="shrink-0">
                <Image
                  src="/images/sti.png"
                  alt="STI College Balagtas"
                  width={56}
                  height={56}
                  className="rounded-md object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-base">
                  Bachelor of Science in Information Technology
                </span>
                <span className="text-sm text-gray-600">
                  STI College Balagtas
                </span>
                <span className="text-xs text-white bg-gray-800 rounded-full px-3 py-1 w-fit mt-1">
                  2022 – Present
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-100 border border-gray-200 rounded-xl py-5 px-6">
              <Image
                src="/images/afgbmts.png"
                alt="Assemblywoman Felicita G. Berdinardino Memorial Trade School"
                width={56}
                height={56}
                className="rounded-md object-contain"
              />
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-base">
                  Secondary Education
                </span>
                <span className="text-sm text-gray-600">
                  Assemblywoman Felicita G. Berdinardino Memorial Trade School
                </span>
                <span className="text-xs text-white bg-gray-800 rounded-full px-3 py-1 w-fit mt-1">
                  2015 – 2021
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col justify-center bg-gray-300 mt-10 w-full h-40 p-4 gap-4">
        <span className="w-full text-center text-xl font-semibold italic block">
          "Think twice, Code once."
        </span>
        <span className="text-lg font-semibold text-end">- Waseem Latif</span>
      </div>

      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-2xl font-semibold mt-4">TECH STACK</h1>
        <div className="w-full my-10">
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            <div className="flex flex-row items-center gap-20 px-5">
              <Image
                src="/js.svg"
                alt="JavaScript"
                width={48}
                height={48}
                className="md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
              <Image
                src="/java.svg"
                alt="Java"
                width={48}
                height={48}
                className="md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
              <Image
                src="/python.svg"
                alt="Python"
                width={48}
                height={48}
                className="md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
              <Tailwind className="md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <ReactIcon className="md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <Image
                src="/csharp.svg"
                alt="C#"
                width={48}
                height={48}
                className="md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
              <SiMysql className="text-blue-600 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <Image
                src="/laravel.svg"
                alt="Laravel"
                width={48}
                height={48}
                className="md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
              <SiNextdotjs className="text-black w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <SiSupabase className="text-green-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <Image
                src="/github.svg"
                alt="GitHub"
                width={48}
                height={48}
                className="md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
              <Image
                src="/figma.svg"
                alt="Figma"
                width={48}
                height={48}
                className="md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
