import { ByURL } from "@/components/byurl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function ({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
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
                <TabsTrigger value="url">Enter Repository URL</TabsTrigger>
                <TabsTrigger value="all">Select Repository</TabsTrigger>
              </TabsList>
              <TabsContent value="url">
                <ByURL />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
