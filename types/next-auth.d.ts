import NextAuth, { DefaultSession } from "next-auth";
import { User as AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface User extends AdapterUser {
    githubId: string;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      githubId: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    githubId: string;
    accessToken: string;
  }
}
