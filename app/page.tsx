"use client";

import { useState, useLayoutEffect, useRef, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import SideSocial from "@/components/sidesocial";
import Image from "next/image";
import Contacts from "@/pages/contacts";
// import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";

export default function Home() {
  // const lenisRef = useRef<any>(null);

  // useLayoutEffect(() => {
  //   if (lenisRef.current && lenisRef.current?.lenis) {
  //     lenisRef.current?.lenis?.scrollTo(0, { duration: 0 });
  //   }
  // }, []);

  return (
    <>
      <Header />
      <SideSocial />
      {/* <ReactLenis ref={lenisRef}> */}
      <main className="py-4 px-3 md:px-2">
        <div className="mt-28 container max-w-3xl mx-auto">
          <div className="relative">
            <h2 className="text-[#ACACAC] text-[20px] md:text-[30px] font-medium">
              Hi! I&apos;m Samuel
            </h2>
            <p className="font-medium md:text-[20px] text-[16px] md:w-[750px] w-full">
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
                src="/assets/hero-line.svg"
                alt=""
                width={250}
                height={250}
              />
            </div>
          </div>
          <section className="mt-[270px]">
            <Skills />
          </section>
          <section className="mt-[270px]">
            <Projects />
          </section>
          <section className="mt-[270px]">
            <Contacts />
          </section>
        </div>
        <Footer />
      </main>
      {/* </ReactLenis> */}
    </>
  );
}
