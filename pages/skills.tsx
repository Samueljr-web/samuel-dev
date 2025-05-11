"use client";

import React from "react";
import { skillsData } from "@/data/data";
import Image from "next/image";

export default function Skills() {
  return (
    <div>
      {" "}
      <h2 className="section-title mb-4 font-medium text-2xl text-white">
        <b></b>skills
      </h2>
      <div className="hidden lg:flex flex-col items-center">
        <div className="flex">
          {skillsData.slice(0, 3).map((skill) => (
            <div
              key={skill.id}
              className="flex w-[170px] h-11 p-2 m-4 gap-4 items-center border border-[#ffffff1a]"
            >
              <Image src={skill.icon} alt="" width={30} height={30} />
              <h3 className="uppercase">{skill.name}</h3>
            </div>
          ))}
        </div>
        <div className="flex">
          {skillsData.slice(3, 7).map((skill) => (
            <div
              key={skill.id}
              className="flex w-[170px] h-11 items-center  gap-4 m-4 p-2 border border-[#ffffff1a]"
            >
              <Image src={skill.icon} alt="" width={30} height={30} />
              <h3 className="uppercase">{skill.name}</h3>
            </div>
          ))}
        </div>
        <div className="flex">
          {skillsData.slice(7, 10).map((skill) => (
            <div
              key={skill.id}
              className="flex w-[170px] h-11 items-center  p-2 m-4 gap-4 border border-[#ffffff1a]"
            >
              <Image src={skill.icon} alt="" width={30} height={30} />
              <h3 className="uppercase">{skill.name}</h3>
            </div>
          ))}
        </div>
        <div className="flex">
          {skillsData.slice(10, 12).map((skill) => (
            <div
              key={skill.id}
              className="flex w-[170px] h-11 items-center  gap-4 m-4 p-2 border border-[#ffffff1a]"
            >
              <Image src={skill.icon} alt="" width={30} height={20} />
              <h3 className="uppercase">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <section>
        <div className="md:hidden grid gap-4 grid-cols-2 justify-center">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="flex w-[160px] h-11 items-center gap-4 p-2 border border-[#ffffff1a]"
            >
              <Image src={skill.icon} alt="" width={24} height={24} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
