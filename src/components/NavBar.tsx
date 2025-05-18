import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="h-[10vh] bg-primary dark:bg-dark-primary py-2 px-8 shadow-lg flex justify-between items-center text-text dark:text-dark-text text-2xl">
      <div className="max-w-7xl flex items-center justify-between">
        <div className="flex items-baseline">
          <h1 className="text-3xl font-bold mr-10">J-Corner</h1>
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-background dark:hover:text-dark-background"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/clip-corner"
                className="hover:text-background dark:hover:text-dark-background"
              >
                Clip Corner
              </Link>
            </li>
            <li>
              <Link
                href="/cubing-corner"
                className="hover:text-background dark:hover:text-dark-background"
              >
                Cubing Corner
              </Link>
            </li>
            <li>
              <Link
                href="/music-corner"
                className="hover:text-background dark:hover:text-dark-background"
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
              <ul className="absolute hidden group-hover:block bg-secondary dark:bg-dark-secondary mt-2 rounded-lg shadow-xl z-50">
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
          </ul>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}
