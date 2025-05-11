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
        <Link href="/cubing-corner" className="text-white hover:text-gray-300">
            Cubing Corner
          </Link>
        </li>
      </ul>
    </nav>
  );
}
