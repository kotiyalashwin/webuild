import { HeroSection } from "@/components/herosection";
import { auth } from "@/utils/auth";

export default async function Home() {
  const sestion = await auth();
  const user = sestion?.user.email || sestion?.user.githubId;
  return (
    <div className="">
      {/* Navbar */}
      <HeroSection />
    </div>
  );
}
