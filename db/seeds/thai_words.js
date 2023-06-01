/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("thai_words").del();
  await knex("thai_words").insert([
    {
      id: 1,
      img_url: "something for now",
      audio_url: "something for now",
      word: "apple",
      categories: "general",
    },
    {
      id: 2,
      img_url: "nothing for now",
      audio_url: "nothing for now",
      word: "tree",
      categories: "general",
    },
    {
      id: 3,
      img_url: "nothing for now",
      audio_url: "nothing for now",
      word: "car",
      categories: "general",
    },
  ]);
};
