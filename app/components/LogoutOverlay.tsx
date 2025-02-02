"use client";

import { Loader2 } from "lucide-react";

export function LogoutOverlay({ isLoggingOut }: { isLoggingOut: boolean }) {
  if (!isLoggingOut) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 w-full flex items-center justify-center z-50">
      <div className="flex flex-col items-center bg-transparent w-full px-6 py-4 rounded-lg shadow-lg">
        <Loader2 className=" animate-spin text-primary" />
        <p className="mt-2 text-2xl font-medium text-primary">Logging out...</p>
      </div>
    </div>
  );
}
