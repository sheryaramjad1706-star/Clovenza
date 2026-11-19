
"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] bg-transparent">
      <div
        className="h-full bg-[#78FF00] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
