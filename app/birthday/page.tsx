"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const images = [
  "/birthday/portrait1.png",
  "/birthday/portrait2.png",
  "/birthday/portrait3.png",
];

export default function BirthdayPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const endSectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;

        gsap.fromTo(
          slide,
          {
            opacity: 0,
            scale: 0.8,
            rotateY: -15,
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
              onEnter: () => setCurrentSlide(index),
              onEnterBack: () => setCurrentSlide(index),
            },
          }
        );

        const img = slide.querySelector(".slide-image");
        if (img) {
          gsap.to(img, {
            y: -30,
            scrollTrigger: {
              trigger: slide,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      if (endSectionRef.current) {
        gsap.from(endSectionRef.current.children, {
          opacity: 0,
          y: 60,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: endSectionRef.current,
            start: "top 70%",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0d0d0d] overflow-hidden"
    >
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: `rgba(51, 169, 220, ${Math.random() * 0.3 + 0.1})`,
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentSlide === index ? "bg-[#33A9DC] scale-150" : "bg-white/20"
            }`}
          />
        ))}
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#33A9DC]/10 via-transparent to-transparent" />

        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl font-bold text-center mb-6 relative"
        >
          <span className="text-white">It&apos;s My</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A9DC] via-[#5BC4F1] to-[#33A9DC] animate-gradient">
            Birthday! 🎂
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-[#acacac] text-lg md:text-2xl text-center max-w-2xl"
        >
          December 20th, Another year of building cool stuff
        </p>

        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-8 h-8 text-[#33A9DC]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
      {/* images */}
      {images.map((src, index) => (
        <section
          key={index}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div
            ref={(el) => {
              slidesRef.current[index] = el;
            }}
            className="relative group"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#33A9DC]/30 to-[#1a5a7a]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="slide-image">
                <Image
                  src={src}
                  alt={`Birthday portrait ${index + 1}`}
                  width={400}
                  height={500}
                  className="object-cover w-[320px] h-[400px] md:w-[400px] md:h-[500px] transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 border border-[#33A9DC]/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#33A9DC]/20 rounded-full" />
          </div>
        </section>
      ))}

      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#33A9DC]/10 via-transparent to-transparent" />

        <div ref={endSectionRef} className="text-center relative z-10">
          <p className="text-[#acacac] text-xl md:text-3xl mb-4">
            Done scrolling? 👀
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Now{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A9DC] to-[#5BC4F1]">
              Hire Me
            </span>{" "}
            😉
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/"
              className="group relative px-8 py-4 bg-[#33A9DC] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#33A9DC]/30"
            >
              <span className="relative z-10">Back to Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#33A9DC] to-[#1a8fc2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <a
              href="https://drive.google.com/file/d/1zI2SG_PJiSTJFczsyzsI8hoaxA7sXwpR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-[#33A9DC] hover:text-[#33A9DC] transition-all duration-300"
            >
              View Resume
            </a>
          </div>

          <p className="mt-12 text-[#acacac]/60 text-sm">
            &gt;_ Thanks for stopping by!
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
