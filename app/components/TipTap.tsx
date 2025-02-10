"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEditor, EditorContent } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Tools from "./Tools";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { createBlog } from "@/actions/actions";
import { useToast } from "@/hooks/use-toast";
import { BlogPinToggle } from "./BlogPinToggle";
import { BlogVisibilityToggle } from "./BlogVisibilityToggle";
import CoverImageGallery from "./CoverImageGallery";
import { Check, Upload } from "lucide-react";

const Tiptap = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState<string>("");
  const [pinned, setPinned] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageDialog, setImageDialog] = useState<boolean>(false);

  const onCoverImageSelect = (image: string) => {
    setImageSrc(image);
    setImageDialog(false);
  };

  const extensions = [
    StarterKit,
    Underline,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Placeholder.configure({ placeholder: "Type something..." }),
    CharacterCount,
    Image.configure({
      inline: true,
      HTMLAttributes: {
        // class: "h-48 w-48",
      },
    }),
    Link.configure({
      autolink: false,
      openOnClick: true,
      HTMLAttributes: {
        target: "_blank",
      },
    }),
  ];

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl m-10 max-w-7xl focus:outline-none",
      },
    },
    immediatelyRender: false,
    content: "",
  });

  const handleCreateForm = async () => {
    if (
      editor &&
      (await createBlog({
        title: title,
        content: editor.getHTML(),
        image: imageSrc,
        description: description,
        pinned: pinned,
        published: visible,
      }))
    ) {
      toast({
        title: "Blog created successfully",
        description: "Your blog has been created successfully",
      });
      setTitle("");
      editor.commands.setContent("");
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <>
      <div>
        <div className="h-screen w-full flex flex-col space-y-6">
          <div className="sticky bg-background text-center top-0 pt-2 z-10">
            <div className="flex justify-end space-x-2">
              <BlogPinToggle onToggle={(isPinned) => setPinned(isPinned)} />
              <BlogVisibilityToggle
                onToggle={(isVisible) => setVisible(isVisible)}
              />
            </div>
            <Tools editor={editor} />
          </div>
          <form className="w-full">
            <div className="w-full flex justify-between">
              <Input
                className="sm:w-[65%] h-14 border-2 rounded-lg w-full outline-none"
                onChange={({ target }) => setTitle(target.value)}
                name="title"
                placeholder="Enter your title"
              />
              <div>
                <div
                  onClick={() => setImageDialog(true)}
                  className="flex items-center space-x-2"
                >
                  {imageSrc !== "" ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Upload className="w-4 h-4" />
                  )}
                  <span>
                    {imageSrc !== "" ? "Image Selected" : "Upload Image"}
                  </span>
                </div>
              </div>
            </div>
            <CoverImageGallery
              open={imageDialog}
              onOpenChange={setImageDialog}
              onSelect={onCoverImageSelect}
            />
            <Input
              placeholder="Enter your short description for the blog to be displayed on the blog card"
              className="border-2 w-full mt-10"
              onChange={({ target }) => setDescription(target.value)}
            />

            <ScrollArea className="mt-10 flex-1">
              <EditorContent
                className="border-2 h-full w-full rounded-2xl"
                editor={editor}
              />
              <div className="p-2 text-right">
                {editor && editor.storage.characterCount.characters()}{" "}
                characters
                <br />
                {editor && editor.storage.characterCount.words()} words
              </div>
            </ScrollArea>
          </form>
          <Button onClick={handleCreateForm} className="w-full text-end">
            Create Blog
          </Button>
        </div>
      </div>
    </>
  );
};

export default Tiptap;
