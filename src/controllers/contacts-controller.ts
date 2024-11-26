import { Request, Response } from "express";
import { findAll, insert } from "../repositories/contacts-repository";
import { CreateContactData } from "../protocols";

export async function getAllContacts(req: Request, res: Response) {
  try {
    const contacts = await findAll();
    res.send(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
}

export async function createNewContact(req: Request, res: Response) {
  try {
    const contactData = req.body as CreateContactData;
    await insert(contactData);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
}