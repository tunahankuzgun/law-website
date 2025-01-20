"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <div>
      <h2
        onClick={() => {
          setMenuVisibility((prev) => !prev);
        }}
        className="bg-gray-800 text-white w-full p-4 cursor-pointer"
      >
        Menu
      </h2>
      {menuVisibility && (
        <div className="bg-gray-200 text-black w-full ">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>Settings</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
