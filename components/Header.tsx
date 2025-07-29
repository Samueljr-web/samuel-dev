"use client";

import React from "react";
import { IoIosDocument } from "react-icons/io";

export default function Header() {
  return (
    <div className="w-full  top-0 left-0 bg-[#0d0d0d] z-50">
      <div className="container max-w-3xl mx-auto flex items-center justify-between px-3 pt-6 pb-2">
        <a
          href="/"
          className="px-2 py-1 border border-[#ffffff1a] text-white text-xl"
        >
          &gt;_samuel
        </a>
        <a
          href="https://drive.google.com/file/d/1KFq8aKcGPCpe-HxCcEnAjj_tYEer5tN6/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-[#ffffff1a] md:text-lg text-sm text-white px-2 md:py-1 py-2 gap-2"
        >
          <IoIosDocument className="text-[#33A9DC]" />
          View Resume
        </a>
      </div>
    </div>
  );
}
