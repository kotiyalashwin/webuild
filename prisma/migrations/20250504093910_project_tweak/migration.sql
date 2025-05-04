/*
  Warnings:

  - You are about to drop the column `githubRepo` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `stars` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "githubRepo",
DROP COLUMN "stars",
ADD COLUMN     "members" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("githubId") ON DELETE RESTRICT ON UPDATE CASCADE;
