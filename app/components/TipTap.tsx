"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Tools from "./Tools";

const Tiptap = () => {
  const extensions = [Document, Paragraph, Text, Bold];

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm  lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    immediatelyRender: false,
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div className="">
      <Tools />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
