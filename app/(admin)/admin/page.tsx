import CreateUser from "@/app/components/CreateUser";
import SignOut from "@/app/components/SignOut";
import { LoginForm } from "@/components/ui/login-form";
import { auth } from "@/lib/auth";
import React from "react";

const Admin = async () => {
  const session = await auth();

  if (!session) {
    console.log("No session");
  }

  return (
    <main className="relative">
      {session && <SignOut />}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
        <CreateUser />
        <h1 className="text-white text-4xl">Hello Admin</h1>
        {!session && <LoginForm />}
      </div>
    </main>
  );
};

export default Admin;
