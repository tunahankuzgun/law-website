"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "lucide-react";
import { useState } from "react";

interface LinkButtonProps {
  onSubmit: (link: string) => void;
  isActive?: boolean;
}

const LinkButton = ({ onSubmit, isActive }: LinkButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState("");

  const handleClick = () => {
    onSubmit(link);
    setIsOpen(false);
    setLink("");
  };
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        className={
          `w-9 h-9 flex rounded-md items-center justify-center hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none ` +
          (isActive ? "bg-accent text-accent-foreground" : "")
        }
      >
        <Link size={16} />
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <div className="grid gap-3">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Link</h4>
            <p className="text-sm text-muted-foreground">
              You can add a link to your text.
            </p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="textLink">Link: </Label>
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              id="maxHeight"
              placeholder="https://example.com"
              className="col-span-3 h-8"
            />
            <div className="col-span-4">
              <Button onClick={handleClick} className="w-full">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LinkButton;
