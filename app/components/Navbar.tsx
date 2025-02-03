"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
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
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between h-[100px]">
      <div className="hidden lg:flex lg:gap-2 lg:flex-1">
        <Image alt="dummy" src="/youtube.png" width={24} height={24} />
        <Image alt="dummy" src="/youtube.png" width={24} height={24} />
        <Image alt="dummy" src="/youtube.png" width={24} height={24} />
        <Image alt="dummy" src="/youtube.png" width={24} height={24} />
      </div>
      <div className="flex-1 lg:text-center text-2xl font-bold lg:text-4xl md:text-3xl">
        theblog
      </div>
      <div className="flex items-center gap-4 flex-1 lg:text-lg lg:gap-5 text-base justify-end">
        <ModeToggle />
        {navLinks.map((link) => (
          <Link
            key={link.path}
            className={`hidden sm:block ${
              pathname === link.path
                ? "bg-primary p-2 rounded-md text-background"
                : ""
            }`}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
        <div className="sm:hidden">H</div>
      </div>
    </header>
  );
};

export default Navbar;
