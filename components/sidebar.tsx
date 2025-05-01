import { signOut } from "@/utils/auth";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const navigations = [
  {
    href: "/profile",
    name: "Profile",
  },
  {
    href: "profile/createproject/kotiyalashwin",
    name: "Projects",
  },
  {
    href: "/account",
    name: "Account",
  },
];

export const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col gap-y-10 py-4 px-2 border-r-2 border-orange-400">
      <h1 className="text-center text-3xl text-orange-400">#WeBuild </h1>
      <div className="flex flex-col items-center justify-evenly gap-y-8">
        {navigations.map((option, i) => {
          const isActive = false;
          return (
            <Link
              className={` ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-500 transition-all ease-in"
              } rounded-4xl px-4 py-2 border-2 w-full`}
              key={i}
              href={option.href}
            >
              {option.name}
            </Link>
          );
        })}

        {/* <Link href={"/"}>Profile</Link>
        <Link href={"/createproject/kotiyalashwin"}>Projects</Link>
        <Link href={"/account"}>Account</Link> */}
      </div>
      <div className="flex items-center justify-center space-x-4">
        <LogOut />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button> Logout</Button>
        </form>
      </div>
    </div>
  );
};
