import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
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
    </header>
  );
};

export default Navbar;
