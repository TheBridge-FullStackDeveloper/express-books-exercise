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


app.get("/author/dante-alighieri", (req, res) => {
  res.json("The Divine Comedy"); 
});

app.get("/country/charles-dickens", (req, res) => {
  res.json(books.find((book) => book.author === "Charles Dickens").country);
});

app.get("/year&pages/cervantes", (req, res) => {
  const { pages, year } = books.find((book) => book.author === "Miguel de Cervantes");
  res.json({ pages, year });
});

app.get("/country/count/spain", (req, res) => {
  res.json(books.filter((book) => book.country === "Spain").length);
});

app.get("/country/at-least/germany", (req, res) => {
  const hasBookFromGermany = books.some((book) => book.country === "Germany");
  res.json(hasBookFromGermany);
});


app.get("/pages/all-greater/200", (req, res) => {
  res.json(books.every((book) => book.pages > 200));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
