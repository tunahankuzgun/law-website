import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  FileCode2,
  ImagePlus,
  Italic,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
  Underline,
} from "lucide-react";
import ToggleButton from "./ToggleButton";
import { BubbleMenu, Editor } from "@tiptap/react";
import { useState } from "react";
import BlogImageGallery from "./BlogImageGallery";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LinkButton from "./LinkButton";
import LinkEdit from "./LinkEdit";

interface ToolsProps {
  editor: Editor | null;
}

// horizontal rule ekle
// image ekle
// link ekle
// font size
// font family
// font color
// background color
// table
// undo redo

const headingOptions = [
  {
    task: "p",
    value: "Paragraph",
  },
  {
    task: "h1",
    value: "Heading 1",
  },
  {
    task: "h2",
    value: "Heading 2",
  },
  {
    task: "h3",
    value: "Heading 3",
  },
  {
    task: "h4",
    value: "Heading 4",
  },
  {
    task: "h5",
    value: "Heading 5",
  },
  {
    task: "h6",
    value: "Heading 6",
  },
] as const;

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
] as const;

type TaskType = (typeof tools)[number]["task"];
type HeadingType = (typeof headingOptions)[number]["task"];

const Tools = ({ editor }: ToolsProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const onImageSelect = (image: string) => {
    editor?.chain().focus().setImage({ src: image }).run();
    setOpen(false);
  };

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

  const handleHeadingSelection = (value: HeadingType) => {
    switch (value) {
      case "p":
        return editor?.chain().focus().setParagraph().run();
      case "h1":
        return editor?.chain().focus().toggleHeading({ level: 1 }).run();
      case "h2":
        return editor?.chain().focus().toggleHeading({ level: 2 }).run();
      case "h3":
        return editor?.chain().focus().toggleHeading({ level: 3 }).run();
      case "h4":
        return editor?.chain().focus().toggleHeading({ level: 4 }).run();
      case "h5":
        return editor?.chain().focus().toggleHeading({ level: 5 }).run();
      case "h6":
        return editor?.chain().focus().toggleHeading({ level: 6 }).run();
      default:
        break;
    }
  };

  const getSelectedHeading = () => {
    let result: HeadingType = "p";

    if (editor?.isActive("heading", { level: 1 })) {
      result = "h1";
    }
    if (editor?.isActive("heading", { level: 2 })) {
      result = "h2";
    }
    if (editor?.isActive("heading", { level: 3 })) {
      result = "h3";
    }
    if (editor?.isActive("heading", { level: 4 })) {
      result = "h4";
    }
    if (editor?.isActive("heading", { level: 5 })) {
      result = "h5";
    }
    if (editor?.isActive("heading", { level: 6 })) {
      result = "h6";
    }

    return result;
  };

  const handleLinkSubmission = (link: string) => {
    if (link === null) {
      return;
    }

    if (link === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    try {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: link })
        .run();
    } catch (e) {
      console.error(e);
    }
  };

  const getInitialLink = () => {
    const attributes = editor?.getAttributes("link");
    if (attributes) return attributes.href;
  };

  return (
    <div className="space-x-1 flex flex-col sm:flex-row items-center justify-center">
      <Select
        value={getSelectedHeading()}
        onValueChange={(value) => handleHeadingSelection(value as HeadingType)}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select type" defaultValue="apple" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {headingOptions.map(({ task, value }) => (
              <SelectItem className="cursor-pointer" key={task} value={task}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <LinkButton
        isActive={
          editor?.isActive("link") || editor?.isActive("link/underline")
        }
        onSubmit={handleLinkSubmission}
      />

      <BubbleMenu
        editor={editor}
        shouldShow={({ editor }) => editor?.isActive("link")}
      >
        <div className="">
          <LinkEdit
            initialLink={getInitialLink()}
            onSubmit={handleLinkSubmission}
          />
        </div>
      </BubbleMenu>

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
      <BlogImageGallery
        onSelect={onImageSelect}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
};

export default Tools;
