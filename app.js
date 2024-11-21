const books = require("./data/books.json");
const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

app.get("/all", (req, res) => {
  res.send(books);
});

app.get("/first", (req, res) => {
  res.send(books[0]);
});

app.get("/last", (req, res) => {
  res.send(books[books.length - 1]);
});

app.get("/middle", (req, res) => {
  res.json(books[books.length / 2]);
});

app.get("/middle", (req, res) => {
  res.json(books[books.length / 2]);
});

app.get("/book/:title", (req, res) => {
  const title = req.params.title; // Express automatically decodes %20 to spaces
  const book = books.find((book) => book.title === "The Divine Comedy"); // Find the matching book
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
