import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ({ children }: { children: React.ReactNode }) {
  return <div> {children}</div>;
}
