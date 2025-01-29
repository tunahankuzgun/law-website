"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Tools from "./Tools";
import { ScrollArea } from "@/components/ui/scroll-area";

const Tiptap = () => {
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
  ];

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm lg:prose-lg 2xl:prose-2xl m-10 w-full focus:outline-none",
      },
    },
    immediatelyRender: false,
    content: "",
  });

  return (
    <>
      <div className="h-screen w-full flex flex-col space-y-6">
        <div className="sticky text-center top-0 z-10">
          <Tools editor={editor} />
        </div>
        <ScrollArea className="h-full flex-1">
          <EditorContent
            className="border-2 h-full rounded-2xl"
            editor={editor}
          />
        </ScrollArea>
        <div className="p-2 text-right">
          {editor && editor.storage.characterCount.characters()} characters
          <br />
          {editor && editor.storage.characterCount.words()} words
        </div>
      </div>
    </>
  );
};

export default Tiptap;
