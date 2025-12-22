import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div>
      <div className="fixed inset-0 z-100 flex w-full items-center justify-center bg-black">
        <Image
          src="/og-image.png"
          alt="logo"
          width={80}
          height={80}
          className="animate-pulse"
          priority
        />
      </div>
      <h2>Loading...</h2>
    </div>
  );
}

export default Loading;
