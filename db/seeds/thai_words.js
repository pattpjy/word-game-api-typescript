/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("thai_words").del();
  await knex("thai_words").insert([
    {
      id: 1,
      img_url: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
      audio_url: "https://d1dfsocfrnqlhe.cloudfront.net/apple-word.mp3",
      word: "apple",
      categories: "food",
    },
    {
      id: 2,
      img_url: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a",
      audio_url: "https://d1dfsocfrnqlhe.cloudfront.net/tree.mp3",
      word: "tree",
      categories: "Around Us",
    },
    {
      id: 3,
      img_url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
      audio_url: "https://d1dfsocfrnqlhe.cloudfront.net/car.mp3",
      word: "car",
      categories: "Vehicle",
    },
  ]);
};
