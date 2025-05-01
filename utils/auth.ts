import { prisma } from "@/utils/db";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,

      profile(raw) {
        // console.log(raw);
        return {
          email: raw.email,
          githubId: raw.id.toString(),
          image: raw.avatar_url,
          name: raw.name,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user?.githubId) return false;

      if (user) {
        const githubId = user.githubId.toString();
        const name = user.name;
        const email = user.email;
        const image = user.image;

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
        token.id = dbuser?.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.githubId = token.accessToken;
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
