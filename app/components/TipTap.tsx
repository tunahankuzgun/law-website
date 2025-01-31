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

const Tiptap = () => {
  const [title, setTitle] = useState("");

  const extensions = [
    StarterKit,
    Underline,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Placeholder.configure({ placeholder: "Type something..." }),
    CharacterCount,
    Image.configure({
      inline: true,
      HTMLAttributes: {
        class: "h-48 w-48",
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
      }))
    ) {
      console.log("Blog created successfully");
      // form.reset();
    } else {
      console.error("Failed to create blog");
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col space-y-6">
        <div className="sticky bg-background text-center top-0 pt-2 z-10">
          <Tools editor={editor} />
        </div>
        <form className="w-full">
          <Input
            onChange={({ target }) => setTitle(target.value)}
            name="title"
            placeholder="Enter your title"
          />

          <ScrollArea className="h-full flex-1">
            <EditorContent
              className="border-2 h-full w-full rounded-2xl"
              editor={editor}
            />
            <div className="p-2 text-right">
              {editor && editor.storage.characterCount.characters()} characters
              <br />
              {editor && editor.storage.characterCount.words()} words
            </div>
          </ScrollArea>
        </form>
        <Button onClick={handleCreateForm} className="w-full text-end">
          Create Blog
        </Button>
      </div>
    </>
  );
};

export default Tiptap;
