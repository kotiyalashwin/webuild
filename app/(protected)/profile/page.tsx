import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Bell, MessagesSquare, User } from "lucide-react";
import Link from "next/link";

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

export default async function () {
  return (
    <div className="py-4 w-full">
      <div className="flex justify-end pr-4">
        <div className="bg-stone-950 py-2 px-4 rounded-2xl flex items-center gap-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-stone-950 text-white hover:text-background">
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
        </div>
      </div>
      <div className="flex justify-center mt-10 px-4 ">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          <div className="flex w-full items-center justify-between  ">
            <div className="text-3xl flex items-center underline decoration-orange-400 underline-offset-8">
              <span className="text-orange-400 font-light ">#</span>
              <span className="tracking-wider">Projects </span>
            </div>
            <Button className="bg-stone-800 text-xl text-white hover:bg-[#1a1a1a] hover:text-orange-400">
              <Link href={"/profile/createproject"}>New +</Link>
            </Button>
          </div>
          <div className="container bg-stone-950 w-full p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-orange-400">Name</TableHead>
                  <TableHead>Repository URL</TableHead>
                  <TableHead className="w-[100px]">Members</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="group">
                  <TableCell className="font-medium border-l-2 border-transparent group-hover:border-orange-400 transition-colors py-4">
                    First-Project
                  </TableCell>
                  <TableCell className="border-transparent group-hover:border-orange-400 transition-colors py-4">
                    https://github.com/kotiyalashwin/hehe
                  </TableCell>
                  <TableCell className="border-r-2 border-transparent group-hover:border-orange-400 transition-colors py-4">
                    3
                  </TableCell>
                </TableRow>
                <TableRow className="group">
                  <TableCell className="font-medium border-l-2 border-transparent group-hover:border-orange-400 transition-colors py-4">
                    First-Project
                  </TableCell>
                  <TableCell className="border-transparent group-hover:border-orange-400 transition-colors py-4">
                    https://github.com/kotiyalashwin/hehe
                  </TableCell>
                  <TableCell className="border-r-2 border-transparent group-hover:border-orange-400 transition-colors py-4">
                    3
                  </TableCell>
                </TableRow>
                <TableRow className="group">
                  <TableCell className="font-medium border-l-2 border-transparent group-hover:border-orange-400 transition-colors py-4">
                    First-Project
                  </TableCell>
                  <TableCell className="border-transparent group-hover:border-orange-400 transition-colors py-4">
                    https://github.com/kotiyalashwin/hehe
                  </TableCell>
                  <TableCell className="border-r-2 border-transparent group-hover:border-orange-400 transition-colors py-4">
                    3
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
