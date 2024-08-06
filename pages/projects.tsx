import { projectsData } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <div>
      <h2 className="font-medium text-2xl text-white">Featured projects</h2>

      {projectsData.map((project: any) => (
        <div key={project} className="mt-4 space-y-2">
          <h2 className="text-white font-medium text-[1rem] md:text-[1.3rem]">
            {project.name}
          </h2>
          <p className="text-[.9rem] md:text-[1rem]">{project.description}</p>
          <div className="flex justify-between">
            <div>
              {project.stack.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="w-auto lowercase bg-[#ffffff1a] h-[32px] px-2 py-1 mr-1 md:mr-2 "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-1 md:gap-2">
              <a href={project.link} target="_blank">
                <Image
                  src="/assets/external-link.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
              <a href={project.github} target="_blank">
                <Image
                  src="/assets/github-line.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
