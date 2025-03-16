-- CreateTable
CREATE TABLE "RecentAnimeList" (
    "id" SERIAL NOT NULL,
    "romajiTitle" TEXT NOT NULL,
    "englishTitle" TEXT,
    "airingAt" INTEGER,
    "episode" INTEGER,
    "coverLarge" TEXT NOT NULL,
    "coverMedium" TEXT NOT NULL,
    "episodes" INTEGER,
    "popularity" INTEGER,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecentAnimeList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_anime_episode" ON "RecentAnimeList"("romajiTitle", "episode");

