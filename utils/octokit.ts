import { Octokit } from "@octokit/rest";

//to be passed wherever we call the Octokit function
export const getOctokit = (accessToken: string) => {
  return new Octokit({ auth: accessToken });
};
