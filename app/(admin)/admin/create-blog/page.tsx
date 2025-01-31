import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Tiptap from "@/app/components/TipTap";

const CreateBlog = async () => {
  const session = await auth();

  if (!session) {
    redirect("/admin");
  }

  return (
    <div>
      <Tiptap />
    </div>
  );
};

export default CreateBlog;
