CREATE TABLE "contacts" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,

  CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "phones" (
  "id" SERIAL NOT NULL,
  "title" TEXT NOT NULL,
  "number" TEXT NOT NULL,
  "contactId" INTEGER NOT NULL,

  CONSTRAINT "phones_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "phones" ADD CONSTRAINT "phones_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id");

ALTER TABLE "contacts" ADD COLUMN "favorite" BOOLEAN NOT NULL DEFAULT FALSE;
