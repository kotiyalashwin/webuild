import { signOut } from "@/utils/auth";
import { Button } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  Code2,
  Home,
  HomeIcon,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { queryOptions } from "@tanstack/react-query";

const navigations = [
  {
    href: "/profile",
    name: "Dashboard",
    icon: <User className="text-orange-400 " />,
  },
  {
    href: "profile/createproject/kotiyalashwin",
    name: "Requests",
    icon: <MessageSquare className="text-orange-400 text-xl" />,
  },
  {
    href: "/community",
    name: "Community",
    icon: <Users className="text-orange-400 text-xl" />,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar className="bg-stone-950 border-r border-orange-400 " side="left">
      <SidebarHeader className="px-4 border-b  bg-transparent flex items-center">
        <div>
          <div className="flex items-center ">
            <span className="text-orange-400 text-2xl">#</span>
            <Link href={"/"} className="text-2xl">
              WebBuild
            </Link>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="py-4  bg-transparent">
        <SidebarMenu className="flex flex-col items-center gap-4 ">
          {navigations.map((option, i) => (
            <SidebarMenuItem key={i} className="w-full ">
              <SidebarMenuButton className="py-4 text-lg " asChild>
                <Link href={option.href} className="flex items-center gap-2">
                  <span className="text-lg">{option.icon}</span> {option.name}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/account" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
