"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <nav className="h-[10vh] bg-primary dark:bg-dark-primary py-2 px-8 shadow-lg flex justify-between items-center text-text dark:text-dark-text text-2xl">
      <div className="max-w-7xl flex items-center justify-between">
        <div className="flex items-baseline">
          <h1 className="text-3xl font-bold mr-10">J-Corner</h1>
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link
                href="/"
                className={`${isActive('/') ? 'text-accent dark:text-dark-accent font-bold' : 'hover:text-background dark:hover:text-dark-background'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/clip-corner"
                className={`${isActive('/clip-corner') ? 'text-accent dark:text-dark-accent font-bold' : 'hover:text-background dark:hover:text-dark-background'}`}
              >
                Clip Corner
              </Link>
            </li>
            <li>
              <Link
                href="/cubing-corner"
                className={`${isActive('/cubing-corner') ? 'text-accent dark:text-dark-accent font-bold' : 'hover:text-background dark:hover:text-dark-background'}`}
              >
                Cubing Corner
              </Link>
            </li>
            <li>
              <Link
                href="/music-corner"
                className={`${isActive('/music-corner') ? 'text-accent dark:text-dark-accent font-bold' : 'hover:text-background dark:hover:text-dark-background'}`}
              >
                Music Corner
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-background dark:hover:text-dark-background">
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
                href="/dev-diary"
                className={`${isActive('/dev-diary') ? 'text-accent dark:text-dark-accent font-bold' : 'hover:text-background dark:hover:text-dark-background'}`}
              >
                Dev Diary
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-40 flex items-center justify-between">
        <img 
            src={theme === 'dark' ? 'icons/github-mark.png' : 'icons/github-mark-white.png'}
            alt="GitHub"
            className="w-12 h-12 cursor-pointer"
            onClick={() => window.open('https://github.com/jumanji1310/j-corner', '_blank')}
        />
      <ThemeToggle />
      </div>
    </nav>
  );
}
