import BlogList from "@/app/components/BlogList";
import { BlogLoader } from "@/app/components/BlogLoader";
import CreateForm from "@/app/components/CreateForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
export default async function Blogs() {
  return (
    <main className=" text-white items-center justify-center flex flex-col space-y-4">
      <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"></h3>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        The People of the Kingdom
      </h2>
      <Suspense fallback={<BlogLoader />}>
        <BlogList />
      </Suspense>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Add Blog</CardTitle>
          <CardDescription>Add a new blog to the list.</CardDescription>
        </CardHeader>
        <CardContent>
          <CreateForm />
        </CardContent>
      </Card>
    </main>
  );
}
