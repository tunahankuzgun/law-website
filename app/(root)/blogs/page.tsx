import BlogList from "@/app/components/BlogList";
import { BlogLoader } from "@/app/components/BlogLoader";
import { Suspense } from "react";
export default async function Blogs() {
  return (
    <main className="items-center justify-center flex flex-col gap-10 mb-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        My Blog
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        List of Blogs
      </h2>
      <Suspense fallback={<BlogLoader />}>
        <BlogList />
      </Suspense>
    </main>
  );
}
