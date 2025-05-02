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
    name: "Profile",
    icon: <User className="text-orange-400 " />,
  },
  {
    href: "profile/createproject/kotiyalashwin",
    name: "Projects",
    icon: <Code2 className="text-orange-400 text-xl" />,
  },
  {
    href: "/community",
    name: "Community",
    icon: <Users className="text-orange-400 text-xl" />,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar
      variant="sidebar"
      className="border-r  drop-shadow-amber-600 drop-shadow-md"
    >
      <SidebarHeader className="px-4 border-b  flex items-center">
        <div>
          <div className="flex items-center ">
            <span className="text-orange-400 text-2xl">#</span>
            <span className="text-2xl">WebBuild</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="py-4 ">
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
