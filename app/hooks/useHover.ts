import { useState, useRef, useEffect } from "react";

export function useHover<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mouseenter", handleEnter);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return { ref, hovered };
}
