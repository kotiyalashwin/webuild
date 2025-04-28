import { auth } from "@/utils/auth";

export default async function Home() {
  const sestion = await auth();
  const user = sestion?.user.email || sestion?.user.githubId;
  return <div>Welcom : {user} </div>;
}
