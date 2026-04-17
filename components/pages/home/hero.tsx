import Image from "next/image";
import Location from "@/components/icons/location";
import Mail from "@/components/icons/mail";
import Arrow from "@/components/icons/arrow";
import Download from "@/components/icons/download";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center mt-20 gap-2 px-4 md:flex-row"
    >
      <Image
        src="/images/profile.png"
        alt="Profile Picture"
        width={200}
        height={200}
        style={{ width: "200", height: "200" }}
        className="mb-4"
        loading="eager"
      />
      <h1 className="text-2xl font-bold mb-2 text-black">
        Hi, I&apos;m Airone Gamil
      </h1>
      <p className="text-lg font-semibold mb-4 text-black">
        Your Software Developer
      </p>
      <p className="text-center max-w-xl text-gray-700 text-sm">
        I build modern, scalable web applications designed to solve real-world
        problems through clean architecture, efficient performance, and
        user-centered design.
      </p>
      <div className="flex flex-row justify-center items-center gap-2 mt-2">
        <div className="flex flex-row gap-1 items-center">
          <Location />
          <span className="text-[0.725rem] font-semibold text-black">
            Based in Bulacan
          </span>
        </div>
        <div className="flex flex-row gap-1 items-center text-black">
          <Mail />
          <a
            href="mailto:aironegamil123@gmail.com"
            className="text-[0.725rem] font-semibold"
          >
            aironegamil123@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-10">
        <button className="flex flex-row justify-center items-center gap-2 bg-black text-white px-4 py-2 rounded-2xl">
          <Arrow />
          Contact Me
        </button>
        <button className="flex flex-row justify-center items-center gap-2 bg-white text-black px-4 py-2 rounded-2xl border-2 border-black">
          <Download /> Download CV
        </button>
      </div>
      <hr className="w-11/12 border-2 border-gray-300 rounded-lg my-10" />
      <div className="flex justify-start w-full">
        <span className="flex flex-row text-sm text-black gap-2">
          Follow me:
          <span className="flex flex-row gap-2">
            <a href="" className="hover:underline">
              <Github />
            </a>
            <a href="" className="hover:underline">
              <Linkedin />
            </a>
          </span>
        </span>
      </div>
    </section>
  );
}
