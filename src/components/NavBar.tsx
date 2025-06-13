"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import {
  Box,
  Gamepad2,
  House,
  Images,
  Music,
  NotebookPen,
  Shirt,
  TvMinimalPlay,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const iconSize = 36; // Define the icon size here
  const iconStrokeWidth = 2.5; // Define the stroke width here

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="h-[10vh] bg-primary dark:bg-dark-primary py-2 px-8 shadow-lg flex justify-between items-center text-text dark:text-dark-text text-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mr-10">J-Corner</h1>
        <div className="flex items-baseline">
          <ul className="flex gap-8 font-medium">
            <li>
              <Link
                href="/"
                className={`flex flex-col items-center ${
                  isActive("/")
                    ? "text-accent dark:text-dark-accent font-bold"
                    : "hover:text-background dark:hover:text-dark-background"
                }`}
              >
                <House size={iconSize} strokeWidth={iconStrokeWidth} /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/clip-corner"
                className={`flex flex-col items-center ${
                  isActive("/clip-corner")
                    ? "text-accent dark:text-dark-accent font-bold"
                    : "hover:text-background dark:hover:text-dark-background"
                }`}
              >
                <TvMinimalPlay size={iconSize} strokeWidth={iconStrokeWidth} />{" "}
                Clip Corner
              </Link>
            </li>
                        <li>
              <Link
                href="/memory-corner"
                className={`flex flex-col items-center ${
                  isActive("/memory-corner")
                    ? "text-accent dark:text-dark-accent font-bold"
                    : "hover:text-background dark:hover:text-dark-background"
                }`}
              >
                <Images size={iconSize} strokeWidth={iconStrokeWidth} />{" "}
                Memory Corner
              </Link>
            </li>
            <li>
              <Link
                href="/cubing-corner"
                className={`flex flex-col items-center ${
                  isActive("/cubing-corner")
                    ? "text-accent dark:text-dark-accent font-bold"
                    : "hover:text-background dark:hover:text-dark-background"
                }`}
              >
                <Box size={iconSize} strokeWidth={iconStrokeWidth} /> Cubing
                Corner
              </Link>
            </li>
            <li>
              <Link
                href="/music-corner"
                className={`flex flex-col items-center ${
                  isActive("/music-corner")
                    ? "text-accent dark:text-dark-accent font-bold"
                    : "hover:text-background dark:hover:text-dark-background"
                }`}
              >
                <Music size={iconSize} strokeWidth={iconStrokeWidth} /> Music
                Corner
              </Link>
            </li>
            <li className="relative group">
              <button className="flex flex-col items-center hover:text-background dark:hover:text-dark-background">
                <Gamepad2 size={iconSize} strokeWidth={iconStrokeWidth} />{" "}
                X-dles
              </button>
              {/* Add a minimal-height "bridge" element to connect the button and dropdown */}
              <div className="absolute h-2 w-full top-full"></div>
              <ul className="absolute hidden group-hover:block bg-primary dark:bg-dark-primary mt-2 rounded-lg shadow-xl z-50 border border-secondary dark:border-dark-secondary">
                <li>
                  <Link
                    href="https://www.nytimes.com/games/wordle/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 hover:text-background dark:hover:text-dark-background rounded-t-lg"
                  >
                    Wordle
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://loldle.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 hover:text-background dark:hover:text-dark-background"
                  >
                    Loldle
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.britannica.com/games/octordle/daily"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 hover:text-background dark:hover:text-dark-background rounded-b-lg"
                  >
                    Octordle
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/skin-viewer"
                className={`flex flex-col items-center ${
                  isActive("/skin-viewer")
                    ? "text-accent dark:text-dark-accent font-bold"
                    : "hover:text-background dark:hover:text-dark-background"
                }`}
              >
                <Shirt size={iconSize} strokeWidth={iconStrokeWidth} /> Skin
                Viewer
              </Link>
            </li>
            <li>
              <Link
                href="/dev-diary"
                className={`flex flex-col items-center ${
                  isActive("/dev-diary")
                    ? "text-accent dark:text-dark-accent font-bold"
                    : "hover:text-background dark:hover:text-dark-background"
                }`}
              >
                <NotebookPen size={iconSize} strokeWidth={iconStrokeWidth} />{" "}
                Dev Diary
              </Link>
            </li>
            <li className="h-full flex items-center px-2">
              <div className="h-16 w-px bg-text/30 dark:bg-dark-text/30"></div>
            </li>
            <li>
              <Link
                href="https://github.com/jumanji1310/j-corner"
                target="_blank"
                rel="noopener noreferrer"
                className={"flex flex-col items-center hover:text-background dark:hover:text-dark-background"}
              >
                <svg
                  width={iconSize}
                  height={iconSize}
                  fill="currentColor"
                  stroke="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}
