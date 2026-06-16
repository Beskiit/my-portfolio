"use client";

import React, { useState } from "react";
import Location from "@/components/icons/location";
import Mail from "@/components/icons/mail";

const EMAIL = "aironegamil123@gmail.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio inquiry from ${name || "a visitor"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full text-black mt-15 justify-center min-h-[70vh]  p-2 md:flex-row md:gap-4 md:h-96 md:p-4 lg:my-20"
    >
      <div className="flex flex-col w-full h-70 border-2 justify-start border-black p-4 rounded-r-full md:h-140 md:justify-between md:rounded-r-[30%]">
        <div className="lg:flex lg:flex-col lg:gap-4">
          <h1 className="text-3xl font-bold md:text-4xl">Contact Me</h1>
          <span className="text-sm mt-2 md:text-lg">
            Feel free to reach out to me for any inquiries or collaborations.
          </span>
        </div>
        <div className="">
          <a
            href={`mailto:${EMAIL}`}
            className="flex flex-row gap-2 items-center mt-4"
          >
            <Mail className="md:h-6 md:w-6" />
            <span className="text-sm font-semibold md:text-base">{EMAIL}</span>
          </a>
          <div className="flex flex-row gap-1 items-center mt-2">
            <Location className="md:h-6 md:w-6" />
            <span className="text-sm font-semibold text-black md:text-base">
              Based in Bulacan, Philippines
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10 w-full">
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-name" className="text-sm font-medium">
            Your Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Juan Dela Cruz"
            className="border border-gray-400 p-4 w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-email" className="text-sm font-medium">
            Your Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="border border-gray-400 p-4 w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-message" className="text-sm font-medium">
            Your Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project or inquiry..."
            rows={4}
            className="border border-gray-400 p-4 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-4 w-full mt-2 transition-colors hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
