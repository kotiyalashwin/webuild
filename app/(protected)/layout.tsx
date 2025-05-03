import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ({ children }: { children: React.ReactNode }) {
  const session = await auth();
  // console.log(session);
  if (!session) {
    redirect("/signin");
  } else {
    return <div> {children}</div>;
  }
}
