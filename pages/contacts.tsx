"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contacts() {
  interface IconType {
    id: number;
    icon: React.ComponentType;
    text: string;
    href: string;
  }

  const icons: IconType[] = [
    {
      id: 1,
      icon: FaXTwitter,
      text: "@samueljrweb",
      href: "https://x.com/Samueljrweb",
    },
    {
      id: 2,
      icon: FaLinkedin,
      text: "@samueljrweb",
      href: "https://www.linkedin.com/in/samueljrweb",
    },
    {
      id: 3,
      icon: MdEmail,
      text: "samueladeyemi.me@gmail.com",
      href: "mailto:samueladeyemi.me@gmail.com",
    },
  ];
  return (
    <div>
      <h2 className="section-title font-medium text-2xl text-white">
        <b></b>Contacts
      </h2>

      <div className="flex md:flex-row flex-col justify-between mt-4 ">
        <h2>
          {" "}
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </h2>
        <div className="w-fit h-fit p-2 border border-[#ffffff1a]">
          <div className="flex flex-col gap-4 p-4">
            {icons.map((icon) => (
              <a
                href={icon.href}
                className="text-xl text-white flex gap-2 items-center"
                target="_blank"
                key={icon.id}
              >
                <icon.icon />
                <h3 className="md:text-xl text-sm">{icon.text}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
