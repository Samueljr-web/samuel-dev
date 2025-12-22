"use client";

import { projectsData } from "@/constants/constant-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const animations: gsap.core.Tween[] = [];

    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        const anim = gsap.fromTo(
          ref,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
        animations.push(anim);
      }
    });

    // Cleanup function to kill animations on unmount
    return () => {
      animations.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <h2 className="section-title font-medium text-2xl text-white">
        <b></b>Featured projects
      </h2>

      <div className="mt-6 grid gap-6 md:gap-8">
        {projectsData.map((project, index: number) => {
          const {
            id,
            name,
            stack,
            link,
            github,
            isPrivate,
            description,
            image,
          } = project;

          return (
            <div
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              key={id}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#ffffff10] hover:border-[#ffffff25] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {image && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden aspect-video"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent z-10 opacity-60" />
                  <Image
                    src={image}
                    alt={`${name} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-500 z-20 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                      View Project →
                    </span>
                  </div>
                </a>
              )}

              <div className="p-5 md:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-semibold text-lg md:text-xl">
                    {name}
                  </h2>
                  <div className="flex gap-2 md:gap-3">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#ffffff08] hover:bg-[#ffffff15] transition-colors duration-300"
                    >
                      <Image
                        src="/assets/external-link.svg"
                        alt="External Link"
                        width={18}
                        height={18}
                        className="opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </a>
                    <a
                      href={isPrivate ? undefined : github}
                      aria-disabled={isPrivate}
                      target={isPrivate ? undefined : "_blank"}
                      rel={isPrivate ? undefined : "noopener noreferrer"}
                      title={isPrivate ? "Private Project" : "View on GitHub"}
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isPrivate
                          ? "cursor-default opacity-40 bg-[#ffffff05]"
                          : "bg-[#ffffff08] hover:bg-[#ffffff15]"
                      }`}
                    >
                      <Image
                        src="/assets/github-line.svg"
                        alt="GitHub Link"
                        width={18}
                        height={18}
                        className={
                          isPrivate
                            ? "opacity-50"
                            : "opacity-70 hover:opacity-100 transition-opacity"
                        }
                      />
                    </a>
                  </div>
                </div>

                <p className="text-[#a0a0a0] text-sm md:text-[0.95rem] leading-relaxed line-clamp-3">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {stack.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="text-xs lowercase px-3 py-1.5 rounded-full bg-[#ffffff1a] border border-[#ffffff10] text-[#c0c0c0] hover:border-[#ffffff20] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
