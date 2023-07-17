import express, { Express, Request, Response } from "express";
import { Knex } from "knex";
import config from "./knexfile";
import cors from "cors";
import * as http from "http";
const env: string = process.env.NODE_ENV || "development";
const configOptions = config[env]; // Verify that env and config options match

const db: Knex = require("knex")(configOptions);
const app: Express = express();
const port: number = Number(process.env.PORT) || 3001;

app.use(cors());

app.set("port", process.env.PORT || 3001);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to the word game database⚡️"); //return a string with a welcome message
});

app.get("/api/v1/thai_words", async (req: Request, res: Response) => {
  try {
    const data = await db.select("*").from("thai_words").orderByRaw("RANDOM()");
    // .limit(6);
    res.status(200).send(data);
  } catch (err) {
    console.log("Error", err);
    res.status(404).send((err as Error).message || "An error occurred");
  }
});

//route for random words from selected category
app.get(`/api/v1/thai_words/random`, async (req: Request, res: Response) => {
  try {
    const category = req.query.category as string;
    const data = await db
      .select("*")
      .from("thai_words")
      .where("categories", category)
      .orderByRaw("RANDOM()")
      .limit(6);
    res.send(data);
  } catch (err) {
    console.log("Error", err);
    res.status(404).send(err);
  }
});

const server = app.listen(port, () => {
  const address = server.address();
  if (address && typeof address !== "string") {
    const { address: host, port } = address;
    console.log(`Server listening at http://${host}:${port}`);
  }
});

// Export the app and server for further usage
export { app, server };
