"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];

  const pathname = usePathname();

  return (
    <header className="flex justify-between bg-gray-800 text-white h-[60px] items-center">
      <h2 className="mx-10">
        <Link href="/">Logo</Link>
      </h2>
      <div className="mx-10">
        <ul className="flex justify-between gap-5">
          <li>
            <ModeToggle />
          </li>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={
                  link.path === pathname
                    ? `bg-white rounded-full p-2 text-black`
                    : ""
                }
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
