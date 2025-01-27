"use server";

import { signOut } from "@/lib/auth";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { formSchema, schema } from "@/lib/scheme";
import { executeAction } from "@/lib/executeAction";
import { z } from "zod";

export async function createBlog(formData: z.infer<typeof formSchema>) {
  try {
    const blog = await prisma.blog.create({
      data: {
        title: formData.title as string,
        slug: (formData.title as string).replace(/\s/g, "-").toLowerCase(),
        content: formData.content as string,
      },
    });
    revalidatePath("/blogs");
    return blog;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.error("Blog already exists");
      }
    }
    return null;
  }
}

export async function signUp(formData: FormData) {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      const validatedData = schema.parse({ email, password });
      await prisma.user.create({
        data: {
          email: validatedData.email.toLocaleLowerCase(),
          password: await bcrypt.hash(validatedData.password, 13),
        },
      });
    },
    successMessage: "Signed up successfully",
  });
}

export async function deleteBlog(id: number) {
  await prisma.blog.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/blogs");
}

export async function updateBlog(formData: FormData, id: number) {
  await prisma.blog.update({
    where: {
      id: id,
    },
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string).replace(/\s/g, "-").toLowerCase(),
      content: formData.get("content") as string,
    },
  });
  revalidatePath("/blogs");
}

export async function signOutAction() {
  await signOut();
}
