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
        <LoadingScreen src="/Loading.gif"/>
      ) : (
        <div>
          <h1>Welcome to J-Corner</h1>
        </div>
      )}
    </>
  );
}