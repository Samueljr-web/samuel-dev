import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Header() {
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
      icon: FaLinkedinIn,
      href: "",
    },
    {
      id: 3,
      icon: MdEmail,
      href: "mailto:samueladeyemi.me@gmail.com",
    },
  ];

  return (
    <>
      <div className="flex gap-2 float-right">
        {icons.map((icon) => (
          <a
            href={icon.href}
            className="text-2xl"
            target="_blank"
            key={icon.id}
          >
            <icon.icon />
          </a>
        ))}
      </div>
      {/* <hr className="mt-12 border-[#303030]" /> */}
    </>
  );
}
