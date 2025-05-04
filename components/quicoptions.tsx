import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@/components/ui/popover";
import { Bell, Menu, MessagesSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

const notifications = [
  {
    topic: "Example",
    message: "This is notificaion",
    from: "this is from me",
  },
  {
    topic: "Example",
    message: "This is notificaion",
    from: "this is from me",
  },
  {
    topic: "Example",
    message: "This is notificaion",
    from: "this is from me",
  },
  {
    topic: "Example",
    message: "This is notificaion",
    from: "this is from me",
  },
];

export const QuickOptions = ({ className }: { className?: string }) => {
  return (
    <div className={` ${className} flex justify-end pr-4 `}>
      <div
        className={`bg-stone-950  py-2 px-4 rounded-2xl flex items-center gap-8`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-stone-950 border border-orange-400 text-white hover:text-background">
              <Bell />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-4">
              {notifications.map((not, i) => {
                if (i < 3) {
                  return (
                    <div
                      key={i}
                      className="border border-orange-400/55 rounded-lg px-4 py-2"
                    >
                      <span className="text-neutral-400 text-sm">
                        {not.topic}
                      </span>
                      <p className="text-md">{not.message}</p>
                      <span className="text-neutral-400 text-[12px] ">
                        {not.from}
                      </span>
                    </div>
                  );
                }
              })}
            </div>
            {notifications.length > 3 && (
              <div className="underline text-sm text-center mt-2 underline-offset-2">
                See More
              </div>
            )}
          </PopoverContent>
        </Popover>
        <MessagesSquare />
        <User />
        <SidebarTrigger className="w-12 md:hidden h-12 px-0 py-0 text-2xl bg-orange-500 text-white rounded-xl " />
      </div>
    </div>
  );
};
