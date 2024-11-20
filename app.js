const books = require("./data/books.json");

const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.get("/all", (req, res) => {
  res.json(books);
});

app.get("/first", (req, res) => {
  res.json(books[0]);
});

app.get("/last", (req, res) => {
  res.json(books[books.length - 1]);
});

app.get("/middle", (req, res) => {
  res.json(books[books.length / 2]);
});

app.get("/author/dante-alighieri", (req, res) => {
  res.json(
    books
      .filter((book) => book.author === "Dante Alighieri")
      .map((book) => book.title)
      .toString()
  );
});

app.get("/country/charles-dickens", (req, res) => {
  res.json(
    books
      .filter((books) => books.author === "Charles Dickens")
      .map((book) => book.country)
      .toString()
  );
});

app.get("/year&pages/cervantes", (req, res) => {
  const book = books.find((book) => book.author === "Miguel de Cervantes");

  if (book) {
    res.json({ year: book.year, pages: book.pages });
  }
});

app.get("/country/count/spain", (req, res) => {
  res.json(books.filter((book) => book.country === "Spain").length);
});

app.get("/country/at-least/germany", (req, res) => {
  res.json(books.some((book) => book.country === "Germany"));
});

app.get("/pages/all-greater/200", (req, res) => {
  res.json(books.every((book) => book.pages > 200));
});
