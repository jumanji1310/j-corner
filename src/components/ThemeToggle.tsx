"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // useTheme hook is not available during SSR, so we need to wait until the component mounts
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>
      <img
        src={theme === "dark" ? "pilee.png" : "jumanji.jpeg"}
        alt="Theme toggle"
        className="w-15 h-15 rounded-full"
      />
    </button>
  );
}
