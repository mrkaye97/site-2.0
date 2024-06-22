import Link from "next/link";
import Dropdown from "./dropdown";

export default function Navbar() {
  return (
    <nav className="bg-darker-blue py-4 px-8 flex justify-between items-center w-full">
      <div className="flex space-x-2 max-w-screen-xl mx-auto">
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
        <Link href="/code">
          <div className="text-seafoam-green font-semibold hover:text-light-seafoam text-lg py-2 px-4">
            Code
          </div>
        </Link>
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
