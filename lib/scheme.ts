import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string(),
  image: z.string(),
  description: z.string(),
  pinned: z.boolean(),
  published: z.boolean(),
});
