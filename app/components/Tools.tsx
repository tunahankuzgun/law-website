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

const Tools = () => {
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
      task: "strikethrough",
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
      task: "quote",
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

  return (
    <>
      {tools.map((tool) => (
        <button
          key={tool.task}
          className="items-center justify-center w-10 h-10 rounded-md"
        >
          {tool.icon}
        </button>
      ))}
    </>
  );
};

export default Tools;
