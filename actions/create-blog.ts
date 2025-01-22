"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = title.replace(/\s+/g, "-").toLowerCase();
  const content = formData.get("content") as string;

  await prisma.blog.create({
    data: {
      title,
      slug,
      content,
    },
  });

  revalidatePath(`/blogs`);
}
