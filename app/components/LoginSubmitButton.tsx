"use client";

import { Button } from "@/components/ui/button";
import { Loader2, MailOpen } from "lucide-react";
import { useFormStatus } from "react-dom";

export function LoginSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Logging in...
        </>
      ) : (
        <>
          <MailOpen className="mr-2 h-4 w-4" />
          Login with Email
        </>
      )}
    </Button>
  );
}
