import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="absolute w-full h-screen inset-0 opacity-65 hero-bg z-0 " />
      <div className="md:grid md:grid-cols-[auto_1fr] gap-0 w-screen z-10">
        {/* Sidebar */}
        <div className="hidden md:block z-10">
          <AppSidebar />
        </div>
        <div className="md:hidden absolute top-10 ">
          <SidebarTrigger size={"lg"} />
        </div>

        {/* Children */}
        <div className="z-10  w-full">{children}</div>
      </div>
    </SidebarProvider>
  );
}
