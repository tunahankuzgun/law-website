import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./db";
import bcrypt from "bcryptjs";
import { schema } from "./scheme";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedCredentials = schema.parse(credentials);

        const user = await prisma.user.findFirst({
          where: {
            email: validatedCredentials.email,
          },
        });

        if (!user) {
          return null;
        }
        const isMatch = await bcrypt.compare(
          validatedCredentials.password,
          user.password
        );
        if (!isMatch) {
          console.log("Password does not match");
          return null;
        }
        return { email: user.email, password: user.password };
      },
    }),
  ],
});
