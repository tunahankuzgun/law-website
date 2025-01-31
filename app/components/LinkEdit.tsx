"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Unlink } from "lucide-react";
import { useEffect, useState } from "react";

interface LinkEditProps {
  initialLink?: string;
  onSubmit: (link: string) => void;
}

const LinkEdit = ({ initialLink, onSubmit }: LinkEditProps) => {
  const [link, setLink] = useState("");

  useEffect(() => {
    if (initialLink) setLink(initialLink);
  }, [initialLink]);

  const handleClick = () => {
    onSubmit(link);
  };

  return (
    <div className="grid border-2 p-2 bg-background rounded-md ">
      <div className="grid grid-cols-8 items-center gap-1">
        <Input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          id="maxHeight"
          placeholder="https://example.com"
          className="col-span-6 h-8"
        />
        <div className="col-span-1 ">
          <Button
            onClick={() => onSubmit("")}
            className="w-full"
            variant="destructive"
          >
            <Unlink />
          </Button>
        </div>
        <div className="col-span-1">
          <Button onMouseDown={handleClick} className="w-full">
            <Check />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkEdit;
