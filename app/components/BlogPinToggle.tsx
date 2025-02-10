"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Pin, PinOff } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";

interface BlogPinToggleProps {
  initialPinned?: boolean;
  onToggle?: (isPinned: boolean) => void;
}

export function BlogPinToggle({
  initialPinned = false,
  onToggle,
}: BlogPinToggleProps) {
  const [isPinned, setIsPinned] = useState(initialPinned);

  const handleToggle = (checked: boolean) => {
    setIsPinned(checked);
    if (onToggle) {
      onToggle(checked);
    }
  };

  return (
    <TooltipProvider>
      <div className="flex items-center justify-between p-3 bg-accent rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex items-center space-x-3 mr-3">
          {isPinned ? (
            <Pin className="w-5 h-5 text-green-600" />
          ) : (
            <PinOff className="w-5 h-5 text-gray-400" />
          )}
          <Label htmlFor="blog-pin" className="text-sm font-medium">
            Pin Blog
          </Label>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Switch
              id="blog-pin"
              checked={isPinned}
              onCheckedChange={handleToggle}
              className={`${
                isPinned ? "bg-green-600" : "bg-gray-400"
              } transition-colors duration-200`}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {isPinned ? "Click to unpin the blog" : "Click to pin the blog"}
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
