import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const activitiesData = require("./data.js");
const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.set("port", process.env.PORT || 3001);

app.use(cors());

app.use(express.json());

app.locals.activities = activitiesData;
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the word game database⚡️"); //return a string with a welcome message
});

app.get("/api/v1/activities", async (req, res) => {
  const stuff = app.locals.activities;
  const something = res.json({ stuff });
  res.send(something); 
  // try {
  //   const data = await db("activities").select();
  //   res.send(data);
  // } catch (err) {
  //   console.log("Error", err);
  //   res.status(404).send(err);
  // }
  
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
