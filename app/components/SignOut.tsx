"use client";

import { signOutAction } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { LogoutOverlay } from "./LogoutOverlay";

const SignOut = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    await signOutAction();
  };

  return (
    <>
      <LogoutOverlay loadingText="Logging out..." isLoading={isLoggingOut} />

      <Button disabled={isLoggingOut} className="" onClick={handleLogout}>
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </>
  );
};

export default SignOut;
