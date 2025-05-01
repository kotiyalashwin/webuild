"use server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function () {
  return (
    <div className="h-screen w-screen ">
      <div className="absolute inset-0 z-0 bg-hero w-full h-full" />
      {/* <div className="  flex w-full flex-col justify-center items-center h-full max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Let's Get you In</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="bg-orange-400 text-white">
              Connect to GitHub
            </Button>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
