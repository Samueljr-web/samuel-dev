"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <main className="relative py-4 px-2 h-full overflow-y-auto">
        <Header />
        <div className="mt-14 container max-w-3xl mx-auto">
          <div className="">
            <h2 className="text-[#ACACAC] text-[30px] font-medium">
              Hi, I&apos;m Samuel
            </h2>
            <p className="font-medium">
              I&apos;m a{" "}
              <span className="text-[#33A9DC]">frontend engineer</span> with 4+
              years experience in building & maintaining web apps. I have great
              passion in <span>solving problems</span> with code. I take special
              interest in optimizing the performance & usability of web
              applications. I also enjoy programming & tackling interesting
              software challenges.
            </p>
          </div>
          <section className="mt-5">
            <Skills />
          </section>
          <section className="mt-5">
            <Projects />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
