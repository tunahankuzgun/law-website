"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import CharacterCount from '@tiptap/extension-character-count';
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import BulletList from "@tiptap/extension-bullet-list";

import Tools from "./Tools";

const Tiptap = () => {
  const extensions = [
    StarterKit,
    Underline,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Placeholder.configure({ placeholder: 'Type something...' }),
    CharacterCount,
    BulletList
  ];

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm lg:prose-lg 2xl:prose-2xl m-10  focus:outline-none",
      },
    },
    immediatelyRender: false,
    content: "",
  });

  return (
    <div className="h-screen flex flex-col space-y-6">
      <div className="sticky top-0 z-10 p-2">
        <Tools editor={editor} />
      </div>
      <EditorContent className="border-2 flex-1 rounded-2xl" editor={editor} />

      <div className="p-2 text-right">
        {editor && editor.storage.characterCount.characters()} characters
        <br />
        {editor && editor.storage.characterCount.words()} words
      </div>
    </div>
  );
};

export default Tiptap;
