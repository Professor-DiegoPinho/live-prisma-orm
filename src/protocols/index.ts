export type Phone = {
  title: string;
  number: number;
}

export type CreateContactData = {
  name: string;
  phones: Phone[];
  favorite: boolean;
}