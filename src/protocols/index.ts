import { Contact, Phone } from "@prisma/client";

export type CreateContactData = Omit<Contact, "id"> & {
  phones: Omit<Phone, "id" | "contactId">[]
};