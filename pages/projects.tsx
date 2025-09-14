"use client";

import { projectsData } from "@/data/data";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.from(ref, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          delay: 0.6 + index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <div>
      <h2 className="section-title font-medium text-2xl text-white">
        <b></b>Featured projects
      </h2>

      {projectsData.map((project, index: number) => {
        const { id, name, stack, link, github, isPrivate, description } =
          project;

        return (
          <div
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            key={id}
            className="mt-4 space-y-2"
          >
            <h2 className="text-white font-medium text-[1rem] md:text-[1.3rem]">
              {name}
            </h2>
            <p className="text-[.9rem] md:text-[1rem]">{description}</p>
            <div className="flex justify-between">
              <div>
                {stack.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="w-auto lowercase bg-[#ffffff1a] h-[32px] px-2 py-1 mr-1 md:mr-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-1 md:gap-2">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/external-link.svg"
                    alt="External Link"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href={isPrivate ? undefined : github}
                  aria-disabled={isPrivate}
                  target={isPrivate ? undefined : "_blank"}
                  rel={isPrivate ? undefined : "noopener noreferrer"}
                  title={isPrivate ? "Private Project" : "View on GitHub"}
                  className={isPrivate ? " cursor-default text-gray-400" : ""}
                >
                  <Image
                    src="/assets/github-line.svg"
                    alt="GitHub Link"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
