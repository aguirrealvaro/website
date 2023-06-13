-- CreateTable
CREATE TABLE "View" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sessionId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
