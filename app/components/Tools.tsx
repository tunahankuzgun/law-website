import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  FileCode2,
  ImagePlus,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
  Underline,
} from "lucide-react";
import ToggleButton from "./ToggleButton";
import { Editor } from "@tiptap/react";
import { useState } from "react";
import ImageGallery from "./ImageGallery";

interface ToolsProps {
  editor: Editor | null;
}

// Heading ekle
// horizontal rule ekle
// image ekle
// link ekle
// font size
// font family
// font color
// background color
// table
// undo redo

const tools = [
  {
    task: "bold",
    icon: <Bold size={20} />,
  },
  {
    task: "italic",
    icon: <Italic size={20} />,
  },
  {
    task: "underline",
    icon: <Underline size={20} />,
  },
  {
    task: "strike",
    icon: <Strikethrough size={20} />,
  },
  {
    task: "link",
    icon: <Link size={20} />,
  },
  {
    task: "code",
    icon: <Code size={20} />,
  },
  {
    task: "codeBlock",
    icon: <FileCode2 size={20} />,
  },
  {
    task: "blockquote",
    icon: <Quote size={20} />,
  },
  {
    task: "left",
    icon: <AlignLeft size={20} />,
  },
  {
    task: "center",
    icon: <AlignCenter size={20} />,
  },
  {
    task: "right",
    icon: <AlignRight size={20} />,
  },
  {
    task: "orderedList",
    icon: <ListOrdered size={20} />,
  },
  {
    task: "bulletList",
    icon: <List size={20} />,
  },
  {
    task: "image",
    icon: <ImagePlus size={20} />,
  },
];

type TaskType = (typeof tools)[number]["task"];
const Tools = ({ editor }: ToolsProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOnClick = (task: TaskType) => {
    switch (task) {
      case "bold":
        return editor?.chain().focus().toggleBold().run();
      case "italic":
        return editor?.chain().focus().toggleItalic().run();
      case "underline":
        return editor?.chain().focus().toggleUnderline().run();
      case "strike":
        return editor?.chain().focus().toggleStrike().run();
      case "code":
        return editor?.chain().focus().toggleCode().run();
      case "link":
        return;
      //  editor?.chain().focus().toggleLink({ href: "https://example.com" }).run();
      case "blockquote":
        return editor?.chain().focus().toggleBlockquote().run();
      case "codeBlock":
        return editor?.chain().focus().toggleCodeBlock().run();
      case "orderedList":
        return editor?.chain().focus().toggleOrderedList().run();
      case "bulletList":
        return editor?.chain().focus().toggleBulletList().run();
      case "left":
        return editor?.chain().focus().setTextAlign("left").run();
      case "center":
        return editor?.chain().focus().setTextAlign("center").run();
      case "right":
        return editor?.chain().focus().setTextAlign("right").run();
      case "image":
        setOpen(true);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <div className="space-x-1">
        {tools.map(({ icon, task }) => (
          <ToggleButton
            onClick={() => handleOnClick(task)}
            isPressed={
              editor?.isActive(task) || editor?.isActive({ textAlign: task })
            }
            key={task}
          >
            {icon}
          </ToggleButton>
        ))}
      </div>
      <ImageGallery open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Tools;
