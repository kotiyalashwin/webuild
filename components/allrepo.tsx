"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  AlertCircle,
  ChevronRight,
  Ellipsis,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import Link from "next/link";

import axios from "axios";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ScrollArea } from "./ui/scroll-area";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
  language: string;
}

export const AllRepo = ({ user }: { user: string | undefined }) => {
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleRepositorySelect = (repoFullName: string) => {
    setSelectedRepo(repoFullName);
  };

  const fetchRepositories = async () => {
    try {
      setLoading(true);
      if (!user) {
        setError("No username");
      }
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      const data = await response.data;

      // console.log(repositories);
      setRepositories(data);
    } catch (e) {
      setError("Unable to fetch Repositories");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Your GitHub Repositories</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchRepositories}
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Fetch Repositories
            </>
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {repositories.length > 0 ? (
        <div className="space-y-4">
          <ScrollArea className="h-[300px] rounded-md border">
            <RadioGroup
              value={selectedRepo || ""}
              onValueChange={handleRepositorySelect}
              className="p-1"
            >
              {repositories.map((repo) => (
                <div
                  key={repo.id}
                  className={`mb-2 rounded-lg border p-3 transition-colors ${
                    selectedRepo === repo.full_name
                      ? "border-orange-400 bg-muted"
                      : ""
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem
                      value={repo.full_name}
                      id={`repo-${repo.id}`}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={`repo-${repo.id}`}
                        className="cursor-pointer font-medium"
                      >
                        {repo.name}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {repo.description}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center">
                          {/* <GitHubLogoIcon className="mr-1 h-3 w-3" /> */}
                          {repo.full_name}
                        </span>
                        {repo.language && (
                          <span>
                            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-primary"></span>
                            {repo.language}
                          </span>
                        )}
                        <span>Updated {repo.updated_at}</span>
                        <span>★ {repo.stargazers_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </ScrollArea>

          {/* <Button>Create Project</Button> */}
          {selectedRepo && (
            <Button
              onClick={() => {
                localStorage.setItem(
                  "repoUrl",
                  `https://github.com/${selectedRepo}`
                );
              }}
              className="w-full"
              disabled={!selectedRepo}
            >
              <Link
                className="w-full flex justify-center"
                href={"/profile/newproject"}
              >
                Create Project from Selected Repository{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      ) : loading ? (
        <div className="flex h-[300px] items-center justify-center rounded-md border">
          <div className="text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin  text-orange-400" />
            <p className="mt-2 text-sm text-orange-400">
              Fetching your repositories...
            </p>
          </div>
        </div>
      ) : (
        <div className="flex h-[300px] items-center justify-center rounded-md border">
          <div className="text-center">
            <p className="mt-2 text-sm text-muted-foreground">
              Click "Fetch Repositories" to load your GitHub repositories
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
