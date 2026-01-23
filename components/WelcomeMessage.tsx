"use client";

import TextType from "./TextType";
import { useState } from "react";

function WelcomeMessage() {
  const [done, isDone] = useState(false);
  return (
    <>
      <div className="relative h-screen bg-black flex items-center justify-center ">
        <TextType
          text={["Hi, my name is", "Sabina"]}
          typingSpeed={100}
          deletingSpeed={60}
          loop={false}
          showCursor={false}
          cursorCharacter="|"
          cursorBlinkDuration={0.6}
          startOnVisible={false}
          className="sticky top-0 w-full text-white text-[34px] text-center z-50 bg-black/60 px-4 py-2"
        />
      </div>
      <div className="sticky top-0 w-full text-white text-[34px] text-center z-50 bg-black/60 px-4 py-2">
        <TextType
          text={["Hi, my name is", "Sabina"]}
          typingSpeed={100}
          deletingSpeed={60}
          loop={false}
          showCursor={!done}
          onSentenceComplete={(sentence, index) => {
            if (index === 1) isDone(true);
          }}
          cursorCharacter="|"
          cursorBlinkDuration={0.6}
          startOnVisible={false}
        />
      </div>
    </>
  );
}
export default WelcomeMessage;
