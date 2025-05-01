import { auth } from "@/utils/auth";

export default async function () {
  const session = await auth();
  return <div>{session?.user.email}</div>;
}
