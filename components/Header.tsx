"use client";

import React from "react";
import { IoIosDocument } from "react-icons/io";

export default function Header() {
  return (
    <div className="container max-w-3xl md:mx-auto mt-4">
      <div className="flex  mx-3">
        <h2 className="text-white text-2xl">AD/&gt;</h2>
        <button className="ml-auto border border-[#ffffff1a] md:text-lg text-sm  text-white p-2 flex items-center gap-2">
          <IoIosDocument className="text-[#33A9DC]" /> View Resume
        </button>
      </div>

      {/* <hr className="mt-12 border-[#303030]" /> */}
    </div>
  );
}
