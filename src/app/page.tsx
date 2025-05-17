"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Determine how long your GIF needs to play (in milliseconds)
    // If your GIF is 3 seconds long, use 3000
    const gifDuration = 2500; // Adjust based on your actual GIF duration

    const timer = setTimeout(() => {
      setLoading(false);
    }, gifDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen src="/Loading.gif" />
      ) : (
        <div>
          <h1>Welcome to J-Corner</h1>
          <div>
            {/* Light Theme Colors */}
            <div className="flex flex-wrap gap-4 text-text">
              <div className="w-20 h-20 bg-text flex items-center justify-center text-black">
                Text
              </div>
              <div className="w-20 h-20 bg-background flex items-center justify-center">
                Background
              </div>
              <div className="w-20 h-20 bg-primary flex items-center justify-center">
                Primary
              </div>
              <div className="w-20 h-20 bg-secondary flex items-center justify-center">
                Secondary
              </div>
              <div className="w-20 h-20 bg-accent flex items-center justify-center">
                Accent
              </div>
            </div>
            {/* Dark Theme Colors */}
            <div className="flex flex-wrap gap-4 text-dark-text">
              <div className="w-20 h-20 bg-dark-text flex items-center justify-center text-white">
                Dark Text
              </div>
              <div className="w-20 h-20 bg-dark-background flex items-center justify-center">
                Dark Background
              </div>
              <div className="w-20 h-20 bg-dark-primary flex items-center justify-center">
                Dark Primary
              </div>
              <div className="w-20 h-20 bg-dark-secondary flex items-center justify-center">
                Dark Secondary
              </div>
              <div className="w-20 h-20 bg-dark-accent flex items-center justify-center">
                Dark Accent
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
