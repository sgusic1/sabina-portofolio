"use client";

import TextType from "./TextType";
import { useState, useRef, useLayoutEffect } from "react";
import useDelay from "@/hooks/useDelay";
import HeaderName from "./HeaderName";

function WelcomeMessage() {
  const textRef = useRef<HTMLDivElement>(null);
  const [startTop, setStartTop] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [fade, setFade] = useState(false);
  const [fadeFixedName, setFadeFixedName] = useState(false);
  const [slideUpFixedName, setSlideUpFixedName] = useState(false);

  useDelay(12000, setReady);
  useDelay(5500, setFade);
  useDelay(5800, setFadeFixedName);
  useDelay(8500, setSlideUpFixedName);

  useLayoutEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setStartTop(rect.top);
    }
  });

  return (
    <>
      {!ready && (
        <div
          ref={textRef}
          className={`relative h-screen flex items-center justify-center transition-colors duration-4500 ${fade ? "bg-transparent" : "bg-black"}`}
        >
          (
          <TextType
            text={["Hi, my name is", "Sabina"]}
            typingSpeed={100}
            deletingSpeed={60}
            loop={false}
            showCursor={false}
            cursorCharacter="|"
            cursorBlinkDuration={0.6}
            startOnVisible={false}
            className={`sticky w-full text-white text-[31px] text-center z-50 transition-opacity duration-3500 ${fade ? "opacity-0" : "opacity-100"}`}
          />
          )
        </div>
      )}
      {
        <div
          className={`fixed w-full z-50 transition-[top] duration-1500 ease-out ${slideUpFixedName ? "top-0" : "top-[47.5%]"} `}
        >
          <div
            className={`flex items-center justify-center text-white text-center bg-black/45 py-1 transition-opacity duration-500 
              ${fadeFixedName ? "opacity-100" : "opacity-0"} `}
          >
            <HeaderName />
          </div>
        </div>
      }
    </>
  );
}

export default WelcomeMessage;
