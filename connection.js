const sqlite3 = require("sqlite3").verbose(); //import sqlite

// open database in memory by create database object, this opens the database connection automatically.
let db = new sqlite3.Database(
  "./db/thai_words.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  }
);

db.serialize(() => {
  db.each(
    `SELECT PlaylistId as id,
                  Name as name
           FROM playlists`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
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
