"use server";

import { auth } from "@/utils/auth";
import axios from "axios";

export const RepoExist = async (repoName: string) => {
  const session = await auth();
  const username = session?.user.githubUsername;

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repoName}`,
      {
        headers: {
          "x-github-api-version-selected": 2022 - 11 - 28,
          "X-GitHub-Media-Typeg ": " github.v3 , format=json",
        },
      }
    );

    const data = await response.data;
    if (response.status !== 200) {
      return { message: "not 200", status: false };
    }
    return { message: `https://github.com/${data.full_name} `, status: true };
  } catch (e) {
    console.log(e);
    return { message: "error", staus: false };
  }
};
