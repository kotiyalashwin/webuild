import { QuickOptions } from "@/components/quicoptions";
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
import { Projects } from "@/types/project";
import { auth } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { Users } from "lucide-react";
import Link from "next/link";

export default async function () {
  const session = await auth();
  const githubId = session?.user.githubId;

  const Projects: Projects[] = await prisma.project.findMany({
    where: {
      ownerId: githubId,
    },
    select: {
      name: true,
      githubURL: true,
      members: true,
    },
  });
  return (
    <div className="py-4 w-full">
      {/* <QuickOptions /> */}
      <div className="flex justify-center mt-10 px-4 ">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          <div className="flex w-full items-center justify-between  ">
            <div className="text-3xl flex items-center underline decoration-orange-400 underline-offset-8">
              <span className="text-orange-400 font-light ">#</span>
              <span className="tracking-wider">Projects </span>
            </div>
            <Button className="bg-stone-800 text-xl text-white hover:bg-[#1a1a1a] hover:text-orange-400">
              <Link href={"/profile/createproject"} className="w-full">
                {" "}
                New +
              </Link>
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
                {Projects.map((proj, i) => (
                  <TableRow key={i} className="group">
                    <TableCell className="font-medium border-l-2 border-transparent group-hover:border-orange-400 transition-colors py-4">
                      {proj.name}
                    </TableCell>
                    <TableCell className="border-transparent group-hover:border-orange-400 transition-colors py-4">
                      <Link target="_blank_" href={proj.githubURL}>
                        {proj.githubURL}
                      </Link>
                    </TableCell>
                    <TableCell className="border-r-2 border-transparent items-center gap-4 group-hover:border-orange-400 transition-colors py-4 flex">
                      <span className="text-lg">{proj.members}</span>
                      <Users size={20} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
