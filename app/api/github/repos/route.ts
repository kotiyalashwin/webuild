import { auth } from "@/utils/auth";
import { NextResponse } from "next/server";
import { getOctokit } from "@/utils/octokit";

export async function GET() {
  const session = await auth();
  console.log(session);

  if (!session?.user?.githubId || !session?.user?.githubId) {
    return NextResponse.json({ error: "No Session" }, { status: 403 });
  }

  //fetch github repos
  try {
    const octackit = getOctokit(session.user.githubId);

    const { data: repos } = await octackit.repos.listForAuthenticatedUser({
      visibility: "all",
      affiliation: "owner,collaborator",
      per_page: 100,
    });

    return NextResponse.json(repos);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
