"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function SideSocial() {
  interface IconType {
    id: number;
    icon: React.ComponentType;
    href: string;
  }

  const icons: IconType[] = [
    {
      id: 0,
      icon: FaGithub,
      href: "https://github.com/Samueljr-web",
    },

    {
      id: 1,
      icon: FaXTwitter,
      href: "https://x.com/Samueljrweb",
    },
    {
      id: 2,
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/samueljrweb",
    },
    {
      id: 3,
      icon: MdEmail,
      href: "mailto:samueladeyemi.me@gmail.com",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col items-center fixed top-0 left-10">
      <div className="w-[1px] bg-[#AAB2BF]  h-[13rem]"></div>
      <div className="flex flex-col gap-3 mt-2 float-right">
        {icons.map((icon) => (
          <a
            href={icon.href}
            className="text-xl text-[#AAB2BF]"
            target="_blank"
            key={icon.id}
          >
            <icon.icon />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SideSocial;
