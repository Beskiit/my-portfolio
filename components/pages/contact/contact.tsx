import React from "react";
import Location from "@/components/icons/location";
import Mail from "@/components/icons/mail";

export default function contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full text-black mt-15 justify-center min-h-[70vh]  p-2 md:flex-row md:gap-4 md:h-96 md:p-4 lg:my-20"
    >
      <div className="flex flex-col w-full h-70 border-2 justify-start border-black p-4 rounded-r-full md:h-140 md:justify-between md:rounded-r-[30%]">
        <div className="lg:flex lg:flex-col lg:gap-4">
          <h1 className="text-3xl font-bold md:text-4xl">Contact Me</h1>
          <span className="text-[0.725rem] mt-2 md:text-lg">
            Feel free to reach out to me for any inquiries or collaborations.
          </span>
        </div>
        <div className="">
          <a
            href="mailto:aironegamil123@gmail.com"
            className="flex flex-row gap-2 items-center mt-4"
          >
            <Mail className="md:h-6 md:w-6" />
            <span className="text-[0.725rem] font-semibold md:text-sm">
              aironegamil123@gmail.com
            </span>
          </a>
          <div className="flex flex-row gap-1 items-center mt-2">
            <Location className="md:h-6 md:w-6" />
            <span className="text-[0.725rem] font-semibold text-black md:text-sm">
              Based in Bulacan, Philippines
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-10 w-full">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-400 p-4 w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-400 p-4 w-full"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="border border-gray-400 p-4 w-full"
        />
        <button className="bg-black text-white p-4 w-full mt-4 hover:bg-gray-800">
          Send Message
        </button>
      </div>
    </section>
  );
}
