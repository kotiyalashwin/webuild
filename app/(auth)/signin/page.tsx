import { MotionImages } from "@/components/motionimages";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function () {
  return (
    <div>
      <div className="absolute w-full h-screen opacity-35 inset-0 hero-bg z-0 " />
      <MotionImages />
      <div className=" relative z-10 flex w-full flex-col justify-center items-center h-screen">
        <div className="max-w-3xl container">
          <div className="flex flex-col justify-center w-full ">
            <Card className="items-center">
              <CardHeader className="w-full text-center">
                <CardTitle>Let's Get you In</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action={async () => {
                    "use server";
                    await signIn(
                      "github",
                      redirect("/createproject/kotiyalashwin")
                    );
                  }}
                >
                  <Button className="bg-orange-400 text-white">
                    Connect to GitHub
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
