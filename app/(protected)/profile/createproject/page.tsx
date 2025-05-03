import { AllRepo } from "@/components/allrepo";
import { ByURL } from "@/components/byurl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/utils/auth";

export default async function () {
  const session = await auth();
  return (
    <div className="flex justify-center items-center">
      <div className="container max-w-3xl py-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What you wanna build?</CardTitle>
            <CardDescription>
              Add a project from github which you want to build together
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="url">
              <TabsList className="w-full">
                <TabsTrigger value="url">Enter Repository name</TabsTrigger>
                <TabsTrigger value="all">Select Repository</TabsTrigger>
              </TabsList>
              <TabsContent value="url">
                <ByURL />
              </TabsContent>
              <TabsContent value="all">
                <AllRepo user={session?.user.githubUsername} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
