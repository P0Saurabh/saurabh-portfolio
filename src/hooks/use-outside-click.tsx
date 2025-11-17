// src/hooks/use-outside-click.tsx

import { useEffect } from "react";
import type { RefObject } from "react"; 

// Generic hook to correctly handle null from useRef<T>(null)
export const useOutsideClick = <T extends HTMLElement | null>(
    ref: RefObject<T>, 
    callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check for ref.current (the expanded card) and if the click target is outside it.
      if (ref.current && ref.current instanceof Node && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on cleanup (corrected typo)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, [ref, callback]);
};