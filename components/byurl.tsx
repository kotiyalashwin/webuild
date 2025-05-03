import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ChevronRight } from "lucide-react";

export const ByURL = async () => {
  const handleRepositoySelect = () => {};
  return (
    <form>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="repo-url">GitHub Repository URL</Label>
          <Input
            id="repo-url"
            placeholder="https://github.com/username/repository"
            // value={repoUrl}
            // onChange={(e) => setRepoUrl(e.target.value)}
            required
          />
          <p className="text-sm text-muted-foreground">
            Enter the full URL of your GitHub repository
          </p>
        </div>

        <Button
          type="submit"
          className="w-full"
          // onClick={handleRepositoySelect}
          // disabled={!repoUrl || creatingProject}
        >
          {/* {creatingProject ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Project...
            </>
          ) : (
            <>
              Create Project
              <ChevronRight className="ml-2 h-4 w-4" />
            </>
          )} */}
          Select this repository
          <ChevronRight />
        </Button>
      </div>
    </form>
  );
};
