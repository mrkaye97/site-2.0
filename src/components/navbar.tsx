import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const toggleDropdown = (index: number | null) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-gradient-to-r from-red-300 to-stone-100 py-4 px-8 flex justify-between items-center">
      <div className="flex space-x-8">
        <Link href="/">
          <div className="text-gray-800 font-semibold hover:text-gray-600 text-lg py-2 px-4">
            Home
          </div>
        </Link>
        <div className="relative">
          <button
            onClick={() => toggleDropdown(0)}
            className="text-gray-800 font-semibold hover:text-gray-600 text-lg py-2 px-4"
          >
            Blog
          </button>
          {dropdownOpen === 0 && (
            <div className="absolute bg-white shadow-lg rounded mt-2 py-2 w-48">
              <a
                href="/posts"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Posts
              </a>
              <a
                href="/series"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Series
              </a>
            </div>
          )}
        </div>
        <a
          href="/code"
          className="text-gray-800 font-semibold hover:text-gray-600 text-lg py-2 px-4"
        >
          Code
        </a>
        <div className="relative">
          <button
            onClick={() => toggleDropdown(1)}
            className="text-gray-800 font-semibold hover:text-gray-600 text-lg py-2 px-4"
          >
            More
          </button>
          {dropdownOpen === 1 && (
            <div className="absolute bg-white shadow-lg rounded mt-2 py-2 w-48">
              <a
                href="/my-three-favorite"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                My three favorite
              </a>
              <a
                href="/travel"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Going places
              </a>
              <a
                href="/blogroll"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Blogroll
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
