"use client";
import { useRef, useEffect } from "react";

function ScrollTo<T extends HTMLElement>(props: {
  time: number;
  behaviour: ScrollBehavior;
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const refElem = useRef<T | null>(null);

  useEffect(() => {
    const id1 = setTimeout(() => {
      /*window.scrollTo({
        top: window.innerHeight,
        behavior: props.behaviour,
      });*/
      props.setReady(true);
    }, props.time);

    return () => clearTimeout(id1);
  }, [props.time, props.behaviour]);
}

export default ScrollTo;
