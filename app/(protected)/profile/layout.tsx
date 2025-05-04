import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import React from "react";

import { Button } from "@/components/ui/button";
import { QuickOptions } from "@/components/quicoptions";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute w-full h-screen inset-0 opacity-30 hero-bg z-0 " />
      <SidebarProvider>
        <div className="md:grid md:grid-cols-[auto_1fr] gap-0 w-screen z-10">
          {/* Sidebar */}
          <div className="hidden md:block ">
            <AppSidebar />
          </div>

          {/* <div className="md:hidden flex items-center px-2 py-4  justify-between">
            <SidebarTrigger className="w-12 h-12 px-0 py-0 text-2xl bg-orange-500 text-white rounded-xl " />
            <QuickOptions />
          </div> */}

          {/* Children */}
          <div className="md:grid md:grid-rows-[10vh_1fr] gap-0 w-full">
            {/* <div className=" flex items-center px-2 py-4  "> */}
            {/* <SidebarTrigger className="w-12 md:hidden h-12 px-0 py-0 text-2xl bg-orange-500 text-white rounded-xl " /> */}
            <QuickOptions />
            {/* </div> */}
            {/* <QuickOptions /> */}

            <div>{children}</div>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}
