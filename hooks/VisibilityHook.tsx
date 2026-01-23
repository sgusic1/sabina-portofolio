"use client";
import { useState, useEffect, useRef } from "react";

function useInView(options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  const refName = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!refName.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(refName.current);

    return () => {
      observer.disconnect;
    };
  }, [options]);

  return { refName, inView };
}

export default useInView;
