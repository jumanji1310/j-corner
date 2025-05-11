"use client";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Simulate a loading delay (adjust as needed)
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <div>
      {isLoading ? <LoadingScreen message="Loading..." /> : <h1>Welcome to J-Corner</h1>}
    </div>
  );
}