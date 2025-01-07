"use client";
import { Image } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="text-xl font-bold">
        <Link href="/">Blog App</Link>
      </div>
      <nav className="flex items-center space-x-4">
        {" "}
        {/* Adjust spacing as needed */}
        <Link
          href="/blog"
          className="text-gray-700 hover:text-gray-900 rounded-md px-3 py-2 transition"
        >
          Create Blog
        </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center">
            <Image />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                href="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
