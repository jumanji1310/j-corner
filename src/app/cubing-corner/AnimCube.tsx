"use client";
import React, { useEffect, useRef } from "react";

// Declare the global AnimCube3 function for TypeScript
declare global {
  interface Window {
    AnimCube3: (config: string) => void;
  }
}

interface AnimCubeProps {
  config: string;
  width?: number;
  height?: number;
}

export function AnimCube({
  config,
  width = 400, // Fixed width to 400px
  height = 400, // Fixed height to 400px
}: AnimCubeProps) {
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

  return (
    <div
      ref={containerRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
}

export default function Cube({ moves }: { moves: string }) {
  // Base config string with placeholder for moves
  const baseConfig = "buttonheight=25&repeat=0&edit=0&move=MOVES_PLACEHOLDER&sign=1&initrevmove=#&textsize=36&gabbacolors=1";
  
  // Replace the placeholder with actual moves
  const configString = baseConfig.replace("MOVES_PLACEHOLDER", moves);

  return (
    <div>
      <AnimCube config={configString} />
    </div>
  );
}
