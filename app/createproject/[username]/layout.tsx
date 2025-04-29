import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return <div>{children}</div>;
}
