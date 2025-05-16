import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-6 px-8 shadow-lg">
      <div className="max-w-7xl  flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white mr-10">J-Corner</h1>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-lg text-white hover:text-indigo-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/clip-corner"
                className="text-lg text-white hover:text-indigo-300"
              >
                Clip Corner
              </Link>
            </li>
            <li>
              <Link
                href="/cubing-corner"
                className="text-lg text-white hover:text-indigo-300"
              >
                Cubing Corner
              </Link>
            </li>
            <li className="relative group">
              <button className="text-lg text-white hover:text-indigo-300">
                X-dles
              </button>
              {/* Add a minimal-height "bridge" element to connect the button and dropdown */}
              <div className="absolute h-2 w-full top-full"></div>
              <ul className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded-lg shadow-xl z-50 min-w-[150px] border border-gray-600">
                <li>
                  <Link
                    href="https://www.nytimes.com/games/wordle/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 hover:bg-gray-600 rounded-t-lg"
                  >
                    Wordle
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://loldle.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 hover:bg-gray-600"
                  >
                    Loldle
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.britannica.com/games/octordle/daily"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 hover:bg-gray-600 rounded-b-lg"
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
