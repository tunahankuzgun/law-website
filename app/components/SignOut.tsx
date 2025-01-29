"use client";

import { signOutAction } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const SignOut = () => {
  return (
    <form action={signOutAction}>
      <Button className="absolute top-0 right-0 m-4">
        <LogOut /> Logout
      </Button>
    </form>
  );
};

export default SignOut;
