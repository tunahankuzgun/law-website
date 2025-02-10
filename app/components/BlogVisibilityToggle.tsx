"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BlogVisibilityToggleProps {
  initialVisibility?: boolean;
  onToggle?: (isVisible: boolean) => void;
}

export function BlogVisibilityToggle({
  initialVisibility = false,
  onToggle,
}: BlogVisibilityToggleProps) {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const handleToggle = (checked: boolean) => {
    setIsVisible(checked);
    if (onToggle) {
      onToggle(checked);
    }
  };

  return (
    <TooltipProvider>
      <div className="flex items-center justify-between p-3 bg-accent rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex items-center space-x-3 mr-3">
          {isVisible ? (
            <Eye className="w-5 h-5 text-blue-600" />
          ) : (
            <EyeOff className="w-5 h-5 text-gray-400" />
          )}
          <Label htmlFor="blog-visibility" className="text-sm font-medium">
            Blog Visibility
          </Label>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Switch
              id="blog-visibility"
              checked={isVisible}
              onCheckedChange={handleToggle}
              className={`${
                isVisible ? "bg-blue-600" : "bg-gray-400"
              } transition-colors duration-200`}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {isVisible
                ? "Click to hide the blog"
                : "Click to make the blog visible"}
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
