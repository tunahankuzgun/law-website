import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

const BlogList = async () => {
  const blogs = await prisma.blog.findMany();
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
