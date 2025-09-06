-- AlterTable
ALTER TABLE "projects" ADD COLUMN "repositoryId" TEXT;

ALTER TABLE "projects" RENAME COLUMN "repository" TO "repositoryName";
