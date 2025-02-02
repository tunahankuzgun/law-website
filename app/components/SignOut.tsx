"use client";

import { signOutAction } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";
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
      <LogoutOverlay isLoggingOut={isLoggingOut} />

      <Button className="" onClick={handleLogout} disabled={isLoggingOut}>
        {isLoggingOut ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging out...
          </>
        ) : (
          <>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </>
        )}
      </Button>
    </>
  );
};

export default SignOut;
