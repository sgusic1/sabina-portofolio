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

  useDelay(8000, setReady);
  useDelay(5500, setFade);
  useDelay(5800, setFadeFixedName);
  useDelay(10800, setSlideUpFixedName);

  useLayoutEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setStartTop(rect.top);
      console.log(startTop);
    }
  });

  return (
    <div
      ref={textRef}
      className={`relative h-screen flex items-center justify-center overflow-hidden transition-[max-height, colors] duration-4000 ease-in-out
        ${fade ? "bg-transparent" : "bg-black"} ${ready ? "max-h-0" : "max-h-screen"} 
      `}
    >
      <TextType
        text={["Hi, my name is", "Sabina"]}
        typingSpeed={100}
        deletingSpeed={60}
        loop={false}
        showCursor={false}
        startOnVisible={false}
        className={`absolute w-full text-white text-[31px] text-center z-40
          transition-opacity duration-3500
          ${fade ? "opacity-0" : "opacity-100"}
        `}
      />

      <div
        className={`fixed w-full z-50
          transition-[top,opacity] duration-1500 ease-out
          ${fadeFixedName ? "opacity-100" : "opacity-0"} ${slideUpFixedName ? "top-0" : ""}
        `}
      >
        <div className="flex items-center justify-center bg-black/45 py-1 text-white text-center">
          <HeaderName />
        </div>
      </div>
    </div>
  );
}

export default WelcomeMessage;

{
  /*"use client";

import TextType from "./TextType";
import { useState, useRef, useLayoutEffect } from "react";
import useDelay from "@/hooks/useDelay";
import HeaderName from "./HeaderName";

function WelcomeMessage() {
  const textPosRef = useRef<HTMLDivElement>(null);
  const [startTop, setStartTop] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [fade, setFade] = useState(false);
  const [fadeFixedName, setFadeFixedName] = useState(false);
  const [slideUpFixedName, setSlideUpFixedName] = useState(false);

  useDelay(8000, setReady);
  useDelay(5500, setFade);
  useDelay(5800, setFadeFixedName);
  useDelay(10800, setSlideUpFixedName);

  useLayoutEffect(() => {
    if (!fadeFixedName) return;
    if (!textPosRef.current) return;

    const rect = textPosRef.current.getBoundingClientRect();
    setStartTop(rect.top);
  }, [fadeFixedName]);

  return (
    <div
      className={`relative h-screen flex items-center justify-center ${fade ? "bg-transparent" : "bg-black"}`}
    >
      <div
        ref={textPosRef}
        className="absolute w-full z-40 flex justify-center"
      >
        <TextType
          text={["Hi, my name is", "Sabina"]}
          typingSpeed={100}
          deletingSpeed={60}
          loop={false}
          showCursor={false}
          startOnVisible={false}
          className={`absolute w-full text-white text-[31px] text-center z-40
          transition-opacity duration-3500
          ${fade ? "opacity-0" : "opacity-100"}
        `}
        />
      </div>
      {startTop !== null && (
        <div
          className="fixed left-0 w-full z-50 will-change-transform"
          style={{
            top: startTop,
            transform: slideUpFixedName
              ? `translateY(${-startTop}px)`
              : "translateY(0px)",
            transition: "transform 1500ms ease-out, opacity 1500ms ease-out",
            opacity: fadeFixedName ? 1 : 0,
          }}
        >
          <div className="flex items-center justify-center bg-black/45 py-1 text-white text-center">
            <HeaderName />
          </div>
        </div>
      )}
    </div>
  );
}

export default WelcomeMessage;
*/
}
