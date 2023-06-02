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
      categories: "around us",
    },
    {
      id: 3,
      img_url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
      audio_url: "https://d1dfsocfrnqlhe.cloudfront.net/car.mp3",
      word: "car",
      categories: "vehicles",
    },
    {
      id: 4,
      img_url: "https://images.unsplash.com/photo-1607644536940-6c300b5784c5",
      audio_url: "",
      word: "pineapple juice",
      categories: "food",
    },
    {
      id: 5,
      img_url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      audio_url: "",
      word: "dog",
      categories: "animals",
    },
    {
      id: 6,
      img_url: "https://images.unsplash.com/photo-1530707114297-4af4b3cafe16",
      audio_url: "",
      word: "eye",
      categories: "our body",
    },
    {
      id: 7,
      img_url: "https://images.unsplash.com/photo-1557970304-58a545d77cae",
      audio_url: "",
      word: "mouth",
      categories: "our body",
    },
    {
      id: 8,
      img_url: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      audio_url: "",
      word: "shoes",
      categories: "clothings",
    },
    {
      id: 9,
      img_url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
      audio_url: "",
      word: "pants",
      categories: "clothings",
    },
    {
      id: 10,
      img_url: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      audio_url: "",
      word: "book",
      categories: "around us",
    },
    {
      id: 11,
      img_url: "https://images.unsplash.com/photo-1598228723793-52759bba239c",
      audio_url: "",
      word: "house",
      categories: "around us",
    },
    {
      id: 12,
      img_url: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03",
      audio_url: "",
      word: "cup",
      categories: "around us",
    },
  ]);
};
