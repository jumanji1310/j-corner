"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Initialize with false (light mode) as the default
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem("theme");

    // If dark theme was explicitly saved, apply it
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      // Otherwise default to light mode (by removing dark class if present)
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        // Light theme image for dark mode
        <img
          src="pilee.png"
          alt="Dark theme"
          className="w-15 h-15 rounded-full"
        />
      ) : (
        // Dark theme image for light mode
        <img
          src="jumanji.jpeg"
          alt="Light theme"
          className="w-15 h-15 rounded-full"
        />
      )}
    </button>
  );
}
