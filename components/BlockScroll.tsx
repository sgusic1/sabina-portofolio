"use client";

import { useEffect } from "react";

function BlockScroll(props: { time: number }) {
  useEffect(() => {
    const prev = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = prev;
      console.log("you can scroll");
    }, props.time);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = prev;
    };
  }, [props.time]);

  return null;
}

export default BlockScroll;
