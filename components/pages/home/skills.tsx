import React from "react";
import Fullstack from "@/components/icons/fullstack";
import UI from "@/components/icons/ui";
import Database from "@/components/icons/database";

export default function skills() {
  return (
    <section id="skills" className="flex flex-col items-center text-black">
      <h1 className="text-3xl font-bold">Skills</h1>
      <span className="text-[0.725rem] mt-2">
        Core skills and technologies I use in Web Development.
      </span>
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex flex-row justify-start items-center gap-4 rounded-lg bg-gray-300 p-4">
          <div className="flex h-10 w-10 items-center justify-center">
            <Fullstack />
          </div>
          <span>
            Full-Stack <br /> Web Development
          </span>
        </div>
        <div className="flex flex-row justify-start items-center gap-4 rounded-lg bg-gray-300 p-4">
          <div className="flex h-10 w-10 items-center justify-center">
            <UI />
          </div>
          <span>
            UI/UX <br /> Design
          </span>
        </div>
        <div className="flex flex-row justify-start items-center gap-4 rounded-lg bg-gray-300 p-4">
          <div className="flex h-10 w-10 items-center justify-center">
            <Database />
          </div>
          <span>
            Database <br /> Management
          </span>
        </div>
      </div>
    </section>
  );
}
