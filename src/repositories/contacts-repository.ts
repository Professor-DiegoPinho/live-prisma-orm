import prisma from "../config/database";
import { CreateContactData } from "../protocols";

export async function findAll() {
  const contacts = await prisma.contact.findMany({
    include: {
      Phone: true
    }
  });

  return contacts;
}

export async function insert(contactData: CreateContactData) {
  const { name, favorite, phones } = contactData;

  return await prisma.contact.create({
    data: {
      name,
      favorite,
      Phone: {
        createMany: {
          data: phones
        }
      }
    }
  })
}