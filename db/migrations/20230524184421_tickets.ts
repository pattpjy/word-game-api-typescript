import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("thai_words", function (table) {
    table.increments("id");
    table.string("img_url", 255); // 255 is character length
    table.string("audio_url", 255);
    table.string("word", 255);
    table.string("categories", 255);
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("thai_words");
}
