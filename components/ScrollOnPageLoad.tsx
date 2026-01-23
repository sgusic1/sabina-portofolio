"use client";

import { useEffect } from "react";

function ScrollOnPageLoad(props: { x?: number; y?: number }) {
  const x = props.x ?? 0;
  const y = props.y ?? 0;

  useEffect(() => {
    window.scrollTo(x, y);
  }, []);

  return null;
}

export default ScrollOnPageLoad;
