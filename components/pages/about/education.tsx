import React from "react";
import Js from "@/components/icons/js";
import ReactIcon from "@/components/icons/react";
import Node from "@/components/icons/node";
import Python from "@/components/icons/python";
import Tailwind from "@/components/icons/tailwind";
import Sql from "@/components/icons/sql";
import Csharp from "@/components/icons/csharp";
import Java from "@/components/icons/java";

export default function education() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-semibold mt-4">Education</h1>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex flex-row justify-end gap-2 px-2">
          <span className="text-sm">(2022 - Present)</span>
          <span className="text-sm">
            Bachelor of Science in Information Technology
          </span>
        </div>
        <div className="flex flex-row justify-end gap-2 px-2">
          <span className="text-sm">STI College Balagtas</span>
        </div>
        <div className="flex flex-row justify-end gap-2 px-2 mt-4">
          <span className="text-sm">(2015 - 2021)</span>
          <span className="text-sm">Secondary</span>
        </div>
        <div className="flex flex-col justify-end px-2">
          <span className="text-sm text-end">
            Assemblywoman Felicita G. Berdinardino Memorial Trade
          </span>
          <span className="text-sm text-end">School</span>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-gray-300 mt-10 w-full h-40 p-4 gap-4">
        <span className="w-full text-center text-xl font-semibold italic block">
          "Think twice, Code once."
        </span>
        <span className="text-lg font-semibold text-end">- Waseem Latif</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mt-4">TECH STACK</h1>\
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <Js />
            <Java />
            <Python />
            <Tailwind />
            <ReactIcon />
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <Csharp />
            <Node />
            <Sql />
          </div>
        </div>
      </div>
    </section>
  );
}
