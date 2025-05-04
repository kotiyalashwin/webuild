"use server";

import { auth } from "@/utils/auth";
import { prisma } from "@/utils/db";

type Data = {
  name: string;
  description: string;
  repoUrl: string;
};

export const CreateNewProject = async (formData: Data) => {
  const session = await auth();
  if (!session || !session.user.githubId) {
    return {
      success: false,
      message: "Not Authorized",
    };
  }

  try {
    await prisma.project.create({
      data: {
        name: formData.name,
        description: formData.description,
        githubURL: formData.repoUrl,
        ownerId: session?.user.githubId,
      },
    });

    return {
      success: true,
      message: "Project created. Lets start building",
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Error Occured",
    };
  }
};
