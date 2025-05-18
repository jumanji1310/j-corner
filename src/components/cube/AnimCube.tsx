"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// Declare the global AnimCube3 function for TypeScript
declare global {
  interface Window {
    AnimCube3: (config: string) => void;
  }
}

export function AnimCube({ config }: { config: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Load the AnimCube3.js script
  useEffect(() => {
    initializeCube();
    function initializeCube() {
      if (
        typeof window !== "undefined" &&
        typeof window.AnimCube3 === "function" &&
        containerRef.current
      ) {
        // Clear any previous content
        containerRef.current.innerHTML = "";

        // Create script element to execute AnimCube3
        const cubeScript = document.createElement("script");
        cubeScript.innerHTML = `AnimCube3("${config}")`;
        containerRef.current.appendChild(cubeScript);
      }
    }

    // Cleanup function
    return () => {
      // No need to remove the main script as it might be used by other components
    };
  }, [config]);

  return <div ref={containerRef} className="w-full h-full" />;
}

export default function Cube({ moves, initMoves }: { moves: string, initMoves?: string }) {
  // Base config strings for different themes
  const lightConfig = "bgcolor=0a1e30&slidercolor=dfe9f1&butbgcolor=135594&troughcolor=135594&";
  const darkConfig = "bgcolor=fee9f4&slidercolor=0e0d0d&butbgcolor=fea6d5&troughcolor=fea6d5&";
  
  // Use the theme hook instead of direct localStorage access
  const { theme } = useTheme();
  
  // Select config based on theme
  const baseConfig = `${theme === "dark" ? darkConfig: lightConfig}${initMoves ? `initmove=${initMoves}&` : ""}buttonheight=25&repeat=0&edit=0&move=MOVES_PLACEHOLDER&sign=1&initrevmove=#&textsize=36&gabbacolors=1&colorscheme=yw32o1`

  // Replace the placeholder with actual moves
  const configString = baseConfig.replace("MOVES_PLACEHOLDER", moves);

  return <AnimCube config={configString} />;
}
