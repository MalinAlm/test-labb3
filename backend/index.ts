import cors from "cors";
import dotenv from "dotenv";
import { Client } from "pg";
import express from "express";
import path from "path";

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
