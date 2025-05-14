import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/clip-corner" className="text-white hover:text-gray-300">
            Clip Corner
          </Link>
        </li>
        <li>
          <Link
            href="/cubing-corner"
            className="text-white hover:text-gray-300"
          >
            Cubing Corner
          </Link>
        </li>
        <li className="relative group">
          <button className="text-white hover:text-gray-300">X-dles</button>
          {/* Add a minimal-height "bridge" element to connect the button and dropdown */}
          <div className="absolute h-2 w-full top-full"></div>
          <ul className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg z-50 min-w-[120px]">
            <li>
              <Link
                href="https://www.nytimes.com/games/wordle/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Wordle
              </Link>
            </li>
            <li>
              <Link
                href="https://loldle.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Loldle
              </Link>
            </li>
            <li>
              <Link
                href="https://www.britannica.com/games/octordle/daily"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Octordle
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
