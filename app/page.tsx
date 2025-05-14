"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import SideSocial from "@/components/sidesocial";
import Image from "next/image";
import Contacts from "@/pages/contacts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const geoLineRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(geoLineRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        delay: 0.6,
        scale: 0.9,
        ease: "power3.out",
      });
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(paraRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <SideSocial />
      <main className="py-4 px-3 md:px-2">
        <div className="mt-28 container max-w-3xl mx-auto">
          <div className="relative" ref={heroRef}>
            <h2
              ref={headingRef}
              className="text-[#ACACAC] text-[20px] md:text-[30px] font-medium"
            >
              Hi! I&apos;m Samuel
            </h2>
            <p
              ref={paraRef}
              className="font-medium md:text-[20px] text-[16px] md:w-[750px] w-full"
            >
              I&apos;m a{" "}
              <span className="text-[#33A9DC]">frontend engineer</span> with 4+
              years experience in building & maintaining web apps. I have great
              passion in{" "}
              <span className="text-[#33A9DC] ">solving problems</span> with
              code. I take special interest in optimizing the performance &
              usability of web applications. I also enjoy programming & tackling
              interesting software challenges.
            </p>
            <div className="hidden md:block absolute -z-10 top-6 -left-14">
              <Image
                ref={geoLineRef}
                id="geoline"
                src="/assets/hero-line.svg"
                alt=""
                width={250}
                height={250}
              />
            </div>
          </div>

          <section className="md:mt-[270px] mt-[100px]">
            <Skills />
          </section>
          <section className="md:mt-[270px] mt-[100px]">
            <Projects />
          </section>
          <section className="md:mt-[270px] mt-[100px]">
            <Contacts />
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
