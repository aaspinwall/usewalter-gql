-- CreateTable
CREATE TABLE "Resident" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Resident.email_unique" ON "Resident"("email");
