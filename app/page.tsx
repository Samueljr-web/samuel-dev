"use client";

import { useState, useLayoutEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import Confetti from "react-confetti";

const BirthdayModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center transform scale-100 hover:scale-105 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full p-4 shadow-lg">
            🎉
          </div>
        </div>

        <h1 className="mt-4 md:text-3xl text-2xl font-extrabold text-gray-800 mb-2">
          It&apos;s Samuel&apos;s Birthday!
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Let’s celebrate this special day with joy and happiness!
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  const [isBirthday, setIsBirthday] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useLayoutEffect(() => {
    const today = new Date();
    if (today.getMonth() === 11 && today.getDate() === 20) {
      setIsBirthday(true);
      setShowModal(true);
      setShowConfetti(true);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setShowConfetti(false);
    setIsBirthday(false);
  };

  return (
    <div
      className={`h-screen overflow-hidden ${
        isBirthday ? "birthday-background" : ""
      }`}
    >
      {showConfetti && (
        <Confetti
          colors={["#ff0000", "#00ff00", "#0000ff", "#ffffff", "#ffff00"]}
        />
      )}

      <main className="relative py-4 px-5 md:px-2 h-full overflow-y-auto">
        <Header />
        {showModal && <BirthdayModal onClose={handleClose} />}
        <div className="mt-14 container max-w-3xl mx-auto">
          <div>
            <h2 className="text-[#ACACAC] text-[22px] md:text-[30px] font-medium">
              Hi! I&apos;m Samuel
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
