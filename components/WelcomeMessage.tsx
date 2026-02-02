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

  useDelay(7000, setReady);
  useDelay(5500, setFade);
  useDelay(5600, setFadeFixedName);
  useDelay(7270, setSlideUpFixedName);

  useLayoutEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setStartTop(rect.bottom);
      console.log(
        `the type_text is: top: ${rect.top}, bottom: ${rect.bottom}, left: ${rect.left}, right: ${rect.right}, height: ${rect.height}`,
      );
    }
  }, []);

  return (
    <div
      className={`relative h-screen flex items-center justify-center overflow-hidden transition-[max-height, colors] duration-3500 ease-in-out 
        ${fade ? "bg-transparent" : "bg-black"} ${ready ? "max-h-0" : "max-h-screen"}`}
    >
      <div ref={textRef} className="absolute w-full z-40 flex justify-center">
        <TextType
          text={["Hi, my name is", "Sabina"]}
          typingSpeed={100}
          deletingSpeed={60}
          loop={false}
          showCursor={false}
          startOnVisible={false}
          className={`absolute w-full text-white text-[31px] text-center z-40
          transition-opacity duration-2000
          ${fade ? "opacity-0" : "opacity-100"}
        `}
        />

        {startTop && (
          <div
            className={`fixed w-full z-50
              transition-[top,opacity] ease-out ${fadeFixedName ? "opacity-100" : "opacity-0"}`}
            style={{
              top: slideUpFixedName ? 0 : startTop - 5,
              transition:
                "top 3000ms cubic-bezier(0.22, 1, 0.36, 1), opacity 3500ms ease-out",
            }}
          >
            <div className="flex items-center justify-center bg-black/45 py-1 text-white text-center">
              <HeaderName />
            </div>
          </div>
        )}
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
