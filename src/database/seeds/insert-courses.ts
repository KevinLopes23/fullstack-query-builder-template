import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "Node.js" },
    { name: "React" },
    { name: "React Native" },
    { name: "Next.js" },
    { name: "Nest.js" },
    { name: "Express" },
    { name: "Python" },
    { name: "Java" },
    { name: "C++" },
    { name: "C#" },
    { name: "PHP" },
    { name: "Ruby" },
  ]);
}
