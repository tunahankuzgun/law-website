import CreateForm from "@/app/components/CreateForm";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await prisma.blog.findMany();

  return (
    <main className="items-center justify-center flex flex-col space-y-4">
      <h3 className="">Blogs{blogs.length}</h3>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>

      <CreateForm />
    </main>
  );
}
