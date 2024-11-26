import express, { json, Request, Response } from "express";
import contactsRouter from "./routers/contacts-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.send("I'm okay!");
});
app.use(contactsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})