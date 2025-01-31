import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import parse from "html-react-parser";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blog = await prisma.blog.findUnique({
    where: {
      slug: (await params).slug,
    },
  });

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blog: {blog?.title}
      </h1>

      <div className="prose prose-sm md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl m-10 max-w-7xl focus:outline-none">
        {parse(blog?.content)}
      </div>
    </main>
  );
}
