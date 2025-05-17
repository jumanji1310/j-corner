"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

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

export default function Cube({ moves }: { moves: string }) {
  // Base config strings for different themes
  const lightConfig = "bgcolor=0a1e30&buttonheight=25&repeat=0&edit=0&move=MOVES_PLACEHOLDER&sign=1&initrevmove=#&textsize=36&gabbacolors=1";
  const darkConfig = "bgcolor=fee9f4&buttonheight=25&repeat=0&edit=0&move=MOVES_PLACEHOLDER&sign=1&initrevmove=#&textsize=36&gabbacolors=1";
  
  // Use the theme hook instead of direct localStorage access
  const { isDarkMode } = useTheme();
  
  // Select config based on theme
  const baseConfig = isDarkMode ? darkConfig: lightConfig;
  
  // Replace the placeholder with actual moves
  const configString = baseConfig.replace("MOVES_PLACEHOLDER", moves);

  return <AnimCube config={configString} />;
}
