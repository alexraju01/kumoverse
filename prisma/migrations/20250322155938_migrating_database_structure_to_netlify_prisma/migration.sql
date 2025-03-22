/*
  Warnings:

  - Made the column `createdAt` on table `RecentAnimeList` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "RecentAnimeList" ALTER COLUMN "createdAt" SET NOT NULL;
