"use client";

import React, { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ChevronRight, Loader } from "lucide-react";

import { RepoExist } from "@/lib/actions/repoexist";
import { toast } from "sonner";
import Link from "next/link";

export const ByURL = () => {
  const [repoName, setRepoName] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [verified, setVerified] = useState<boolean | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      startTransition(async () => {
        const res = await RepoExist(repoName);
        if (res.status) {
          toast.success("Verified Repository");
          localStorage.setItem("repoUrl", res.message);
          setVerified(true);
        } else {
          toast.error("Invalid Repository");
          setVerified(false);
          setRepoName("");
        }
      });
    } catch {
      setVerified(null);
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="repo-url">GitHub Repository name</Label>
          <Input
            id="repo-url"
            placeholder="example-project"
            value={repoName}
            onChange={(e) => {
              setVerified(null);
              setRepoName(e.target.value);
            }}
            required
            className="bg-red-600"
          />
          <p className="text-sm text-muted-foreground">
            Enter the name of your repository
          </p>
          {verified ? (
            <Button type="button" className="mt-4 w-full">
              <Link
                className="w-full flex justify-center"
                href={"/profile/newproject"}
              >
                Create Project from Selected Repository{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!repoName || isPending}
              className="mt-4 w-full"
            >
              {isPending ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Verifying
                </>
              ) : (
                "Verify"
              )}
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};
