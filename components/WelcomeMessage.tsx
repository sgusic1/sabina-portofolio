"use client";

import HeaderName from "./HeaderName";
import TextType from "./TextType";
import { useState } from "react";
import useInView from "@/hooks/VisibilityHook";

function WelcomeMessage() {
  const { refName, inView } = useInView<HTMLDivElement>({
    threshold: 0,
    rootMargin: "-53px 0px 0px 0px",
  });

  return (
    <>
      <div
        ref={refName}
        className="relative h-screen bg-black flex items-center justify-center "
      >
        <TextType
          text={["Hi, my name is", "Sabina"]}
          typingSpeed={100}
          deletingSpeed={60}
          loop={false}
          showCursor={false}
          cursorCharacter="|"
          cursorBlinkDuration={0.6}
          startOnVisible={false}
          className="sticky -top-2 w-full text-white text-[33px] text-center z-50 pt-2"
        />
      </div>
      <div
        className={`fixed top-0 w-full flex items-center text-white text-center z-50 bg-black/60 py-1 ${!inView ? "visible" : "invisible"}`}
      >
        <HeaderName />
      </div>
    </>
  );
}
export default WelcomeMessage;
