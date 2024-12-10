import { useEffect, useRef } from "react";

function useClickOutside<T extends HTMLElement>(handler : () => void) {
const ref = useRef<T | null>(null);
  useEffect(() => {
    const handleClickOutside = (event : MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as Node)
      ) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return ref;
}

export default useClickOutside;
