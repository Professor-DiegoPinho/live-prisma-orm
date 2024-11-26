import { Router } from "express";
import { validateSchema } from "../middlewares/schema-middleware";
import contactsSchema from "../schemas/contacts-schema";
import { createNewContact, getAllContacts } from "../controllers/contacts-controller";

const contactsRouter = Router();

contactsRouter.get("/contacts", getAllContacts);
contactsRouter.post("/contacts", validateSchema(contactsSchema), createNewContact);

export default contactsRouter;