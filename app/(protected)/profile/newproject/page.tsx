"use client";

import { useForm } from "react-hook-form";
import { CreateNewProject } from "@/lib/actions/newproject";
import { useTransition, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Inputs = {
  name: string;
  description: string;
};

export default function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<Inputs>({
    mode: "onChange",
  });
  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: Inputs) => {
    startTransition(async () => {
      try {
        // 2. Get extra info from localStorage
        const repoUrl = localStorage.getItem("repoUrl") || "";

        // 3. Call the server action
        const res = await CreateNewProject({
          name: data.name,
          description: data.description,
          repoUrl: repoUrl,
        });

        if (res?.success) {
          toast.success(res.message);
          reset();
        } else {
          toast.error(res.message);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed");
      }
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <h1 className="text-center text-3xl text-orange-400">
          Sleepless nights begins!!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-4  border border-b-orange-400 "
        >
          <Input
            {...register("name", { required: true })}
            placeholder="Project Name"
            className="border p-2 w-full "
          />
          <Textarea
            {...register("description", { required: true })}
            placeholder="Description"
            className="border p-2 w-full"
          />

          <button
            type="submit"
            disabled={!isValid || isPending}
            className={`px-4 py-2 rounded ${
              isValid ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500"
            }`}
          >
            {isPending ? "Creating..." : "Create Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
