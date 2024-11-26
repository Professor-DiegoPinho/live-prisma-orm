import connection from "../config/database";
import { CreateContactData } from "../protocols";

export async function findAll() {
  const { rows } = await connection.query(`
    SELECT * FROM contacts c
    JOIN phones p ON p."contactId" = c.id
  `);

  return rows;
}

export async function insert(contactData: CreateContactData) {
  const { name, phones, favorite } = contactData;

  try {
    await connection.query("BEGIN");

    const { rows } = await connection.query(`
      INSERT INTO contacts (name, favorite) VALUES ($1, $2) RETURNING id;
    `, [name, favorite]);

    const [{ id: contactId }] = rows;
    for (let phone of phones) {
      const { title, number } = phone;
      await connection.query(`
        INSERT INTO phones (title, number, "contactId") VALUES ($1, $2, $3);
      `, [title, number, contactId]);
    }

    await connection.query("COMMIT");
  } catch (error) {
    await connection.query("ROLLBACK");
    throw error;
  }
}