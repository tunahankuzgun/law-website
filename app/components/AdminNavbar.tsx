import { auth } from "@/lib/auth";
import { ModeToggle } from "./ModeToggle";
import SignOut from "./SignOut";
import Link from "next/link";

const AdminNavbar = async () => {
  const session = await auth();

  return (
    <header className="flex items-center w-full justify-between h-[100px]">
      <div className="hidden lg:flex lg:flex-1">logo</div>
      <div className="flex-1 lg:text-center text-2xl font-bold lg:text-4xl md:text-3xl">
        the Admin
      </div>
      <div className="flex items-center gap-4 flex-1 lg:text-lg lg:gap-5 text-base justify-end">
        <ModeToggle />
        {session && (
          <>
            <div className={"hidden sm:block"}>
              Hello, {session?.user?.email?.split("@")[0]}
            </div>
            <Link href="/admin/create-blog">Create Blog</Link>
            <SignOut />
          </>
        )}
      </div>
    </header>
  );
};

export default AdminNavbar;
