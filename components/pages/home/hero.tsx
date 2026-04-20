import Image from "next/image";
import Location from "@/components/icons/location";
import Mail from "@/components/icons/mail";
import Arrow from "@/components/icons/arrow";
import Download from "@/components/icons/download";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center mt-20 gap-2 px-4">
      <div className="">
        <Image
          src="/images/profile.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="mb-4 w-32 h-32 md:w-52 md:h-52 lg:w-52 lg:h-52"
          loading="eager"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2 text-black md:text-3xl">
          Hi, I&apos;m Airone Gamil
        </h1>
        <p className="text-lg font-semibold mb-4 text-black md:text-xl">
          Your Software Developer
        </p>
        <p className="text-center max-w-xl text-gray-700 text-sm md:text-lg">
          I build modern, scalable web applications designed to solve real-world
          problems through clean architecture, efficient performance, and
          user-centered design.
        </p>
        <div className="flex flex-row justify-center items-center gap-2 mt-2">
          <div className="flex flex-row gap-1 items-center">
            <Location className="md:h-8 md:w-8" />
            <span className="text-[0.725rem] font-semibold text-black md:text-lg">
              Based in Bulacan, Philippines
            </span>
          </div>
          <div className="flex flex-row gap-1 items-center text-black">
            <Mail className="md:h-8 md:w-8" />
            <a
              href="mailto:aironegamil123@gmail.com"
              className="text-[0.725rem] font-semibold md:text-lg"
            >
              aironegamil123@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center mt-10">
          <button className="flex flex-row justify-center items-center gap-2 bg-black text-white px-4 py-2 rounded-2xl">
            <Arrow />
            Contact Me
          </button>
          <button className="flex flex-row justify-center items-center gap-2 bg-white text-black px-4 py-2 rounded-2xl border-2 border-black">
            <Download /> Download CV
          </button>
        </div>
        <hr className="w-11/12 border-2 border-gray-300 rounded-lg my-10" />
        <div className="flex justify-start items-center w-full">
          <span className="flex flex-row text-sm text-black gap-2 md:text-lg">
            Follow me:
            <span className="flex flex-row gap-2">
              <a
                href="https://github.com/Beskiit"
                target="_blank"
                className="hover:underline"
              >
                <Github className="md:h-8 md:w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/airone-gamil-313882274"
                target="_blank"
                className="hover:underline"
              >
                <Linkedin className="md:h-8 md:w-8" />
              </a>
            </span>
          </span>
        </div>
      </div>

      <Image
        src="/images/skills.png"
        alt="Profile Picture"
        width={200}
        height={200}
        style={{ width: "100%", height: "200" }}
        className="mt-4"
        loading="eager"
      />
    </section>
  );
}
