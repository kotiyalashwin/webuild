import { prisma } from "@/utils/db";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      profile(raw) {
        console.log(raw);
        return {
          email: raw.email,
          githubId: raw.id.toString(),
          image: raw.avatar_url,
          name: raw.name,
          githubUsername: raw.login.toString(),
        };
      },
    }),
  ],
  debug: true,
  callbacks: {
    async signIn({ user }) {
      if (!user?.githubId) return false;

      if (user) {
        const githubId = user.githubId.toString();
        const name = user.name;
        const email = user.email;
        const image = user.image;
        const username = user.githubUsername;

        const existingUser = await prisma.user.findUnique({
          where: { githubId },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              githubId,
              name,
              email,
              image,
              githubUsername: username,
            },
          });
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const dbuser = await prisma.user.findUnique({
          where: {
            email: user.email!,
          },
        });
        token.accessToken = user.githubId;
        token.githubUsername = user.githubUsername;
        token.id = dbuser?.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.githubId = token.accessToken;
        session.user.githubUsername = token.githubUsername;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
});
