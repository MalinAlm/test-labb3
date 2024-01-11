import cors from "cors";
// import dotenv from "dotenv";
import "dotenv/config";
// import { Client } from "pg";
import postgres from "pg";
import express from "express";
import path from "path";
import { Request, Response } from "express";

// dotenv.config();

const client = new postgres.Client({
  connectionString: process.env.PGURI,
});

client.connect();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", async (_request: Request, response: Response) => {
  const { rows } = await client.query("SELECT * FROM workout_type");
  console.log(rows, "rows");

  response.send(rows);
});

//lägger till ny endpoint för nytt getanrop
app.get("/journal", async (_request: Request, response: Response) => {
  const { rows } = await client.query("SELECT * FROM  journal");
  console.log(rows, "journal");

  response.send(rows);
});

app.post("/", async (request: Request, response: Response) => {
  try {
    const { workout, notes } = request.body;

    await client.query("INSERT INTO journal (workout, notes) VALUES ($1, $2)", [
      workout,
      notes,
    ]);
    const { rows } = await client.query("SELECT * FROM journal");
    response.status(201).send(rows);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
