import { useEffect, useState } from "react";

  export const useResponsiveFont = () => {
  const [fontSize, setFontSize] = useState(10);

  useEffect(() => {
    const updateFontSize = () => {
      const size = Math.max(10, Math.min(window.innerWidth * 0.01, 44));
      setFontSize(size);
    };

    updateFontSize(); 
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);
  return fontSize;
}