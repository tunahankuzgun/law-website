import prisma from "@/lib/db";
import { notFound } from "next/navigation";

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

      <p>{blog?.content}</p>
    </main>
  );
}
