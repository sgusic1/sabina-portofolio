"use client";
import { useState, useEffect, useRef } from "react";

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  const refName = useRef<T | null>(null);

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
