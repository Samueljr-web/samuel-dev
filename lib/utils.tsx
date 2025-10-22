"use client";
import ReactLenis from "lenis/react";
import React from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
