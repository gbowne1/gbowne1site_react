require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();

const PORT = process.env.PORT || 3001; // Define the PORT variable

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: "blog",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.get("/api/posts", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM posts ORDER BY date_published DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred, please try again later." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
