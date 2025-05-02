import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="grid grid-cols-[20vw_auto] gap-0">
        {/* Sidebar */}

        <AppSidebar />

        {/* Children */}
        <div className="flex-1 w-full">{children}</div>
      </div>
    </SidebarProvider>
  );
}
