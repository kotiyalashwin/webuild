import { Sidebar } from "@/components/sidebar";
import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[20vw_auto] gap-0">
      {/* Sidebar */}
      <Sidebar />
      {/* Children */}
      <div className="flex-1 p-8 ">{children}</div>
    </div>
  );
}
