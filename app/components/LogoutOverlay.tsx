"use client";

import { Loader2 } from "lucide-react";

interface LogoutOverlayProps {
  isLoading: boolean;
  loadingText?: string;
}

export function LogoutOverlay({ isLoading, loadingText }: LogoutOverlayProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 w-full flex items-center justify-center z-50">
      <div className="flex flex-col items-center bg-transparent w-full px-6 py-4 rounded-lg shadow-lg">
        <Loader2 className=" animate-spin text-primary" />
        {loadingText && (
          <p className="mt-2 text-2xl font-medium text-primary">
            {loadingText}
          </p>
        )}
      </div>
    </div>
  );
}
