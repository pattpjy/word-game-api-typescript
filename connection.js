const sqlite3 = require("sqlite3").verbose(); //import sqlite

// open database in memory by create database object, this opens the database connection automatically.
let db = new sqlite3.Database(
  "db/dev.sqlite3",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the thai_words database.");
  }
);

db.serialize(() => {
  db.each(
    `SELECT id as id,
                  word as word
           FROM thai_words`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.word);
    }
  );
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
