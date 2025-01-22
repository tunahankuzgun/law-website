import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialBlogs: Prisma.BlogCreateInput[] = [
  {
    title: "Hello World",
    slug: "hello-world",
    content: "This is a test post",
  },
  {
    title: "Test 2",
    slug: "test-2",
    content: "This is another test",
  },
  {
    title: "Last Seed",
    slug: "last-seed",
    content: "This is the last test post with seeder",
  },
];

async function main() {
  console.log("Start seeding...");

  for (const post of initialBlogs) {
    const newPost = await prisma.blog.create({
      data: post,
    });
    console.log(`Created post with id: ${newPost.id}`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
