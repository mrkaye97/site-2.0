import Link from "next/link";
import { useState } from "react";
import Dropdown from "./dropdown";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const toggleDropdown = (index: number | null) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-darker-blue py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="flex space-x-2">
        <Link href="/">
          <div className="text-seafoam-green font-semibold hover:text-light-seafoam text-lg py-2 px-4">
            Home
          </div>
        </Link>
        <Dropdown
          buttonText="Blog"
          dropdownItems={[
            { name: "Posts", link: "/posts" },
            { name: "Series", link: "/series" },
          ]}
        />
        <a
          href="/code"
          className="text-seafoam-green font-semibold hover:text-light-seafoam text-lg py-2 px-4"
        >
          Code
        </a>
        <Dropdown
          buttonText="More"
          dropdownItems={[
            { name: "My three favorite", link: "/my-three-favorite" },
            { name: "Going places", link: "/travel" },
            { name: "Blogroll", link: "/blogroll" },
          ]}
        />
      </div>
    </nav>
  );
}
