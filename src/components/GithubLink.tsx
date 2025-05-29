"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function GitHubLink() {
  const { theme } = useTheme();
  // useTheme hook is not available during SSR, so we need to wait until the component mounts
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <img
      src={
        theme === "dark"
          ? "icons/github-mark.png"
          : "icons/github-mark-white.png"
      }
      alt="GitHub"
      className="w-12 h-12 cursor-pointer"
      onClick={() =>
        window.open("https://github.com/jumanji1310/j-corner", "_blank")
      }
    />
  );
}
