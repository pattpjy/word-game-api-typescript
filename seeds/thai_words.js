/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    { id: 1, colName: "apple" },
    { id: 2, colName: "tree" },
    { id: 3, colName: "car" },
  ]);
};
