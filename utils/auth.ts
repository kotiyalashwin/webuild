import { prisma } from "@/utils/db";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (profile) {
        if (!user.id) {
          console.error("Error: no useriD");
          return false;
        }
        const githubId = user.id;
        const name = user.name || "";
        const email = user.email || "";
        const image = user.image || "";

        const existingUser = await prisma.user.findUnique({
          where: { githubId },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              githubId: githubId,
              name: name,
              email: email,
              image: image,
            },
          });
        }
      }

      return true;
    },
    async session({ session, token }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          githubId: token.sub!,
        },
      });

      if (dbUser) {
        session.user.id = dbUser.id;
        session.user.githubId = dbUser.githubId;
        session.user.name = dbUser.name;
        //if there is no email in db then use ""
        session.user.email = dbUser.email ?? "";
        session.user.image = dbUser.image;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});
