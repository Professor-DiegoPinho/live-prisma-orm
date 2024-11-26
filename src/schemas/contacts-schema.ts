import Joi from "joi";
import { CreateContactData } from "../protocols";

const contactsSchema = Joi.object<CreateContactData>({
  name: Joi.string().required(),
  phones: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      number: Joi.string().required(),
    })
  ).required(),
  favorite: Joi.boolean().required()
});

export default contactsSchema;