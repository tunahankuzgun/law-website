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
      <h2 className="text-4xl">Blog: {blog?.title}</h2>

      <p>{blog?.content}</p>
    </main>
  );
}
