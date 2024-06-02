"use client";

import { useEffect, useState } from "react";

/**
 * Possible mouse position.
 */
type MousePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

/**
 * Mouse position hook.
 */
export function useMouseCSSPos() {
  // Hooks
  const [mousePosition, setMousePosition] = useState<MousePosition>("top-left");
  const handleMouseMove = (event: MouseEvent) => {
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    const { clientX, clientY } = event;
    if (clientY < halfHeight) setMousePosition(clientX < halfWidth ? "top-left" : "top-right");
    else setMousePosition(clientX < halfWidth ? "bottom-left" : "bottom-right");
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Compute CSS & Return
  const cssPos = (() => {
    switch (mousePosition) {
      case "top-left":
        return "top-full left-0 translate-y-4";
      case "top-right":
        return "top-full right-0 translate-y-4";
      case "bottom-left":
        return "bottom-full left-0 -translate-y-4";
      case "bottom-right":
        return "bottom-full right-0 -translate-y-4";
    }
  })();
  return cssPos;
}
