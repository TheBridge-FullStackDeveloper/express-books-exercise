const express = require("express");
const app = express();
const port = 3000;
const books = require("./data/books.json");

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
  const danteAgBook = books.find((book) => book.author === "Dante Alighieri");
  res.json(danteAgBook.title);
});
app.get("/country/charles-dickens", (req, res) => {
  const charlesBook = books.find((book) => book.author === "Charles Dickens");
  res.json(charlesBook.country);
});
app.get("/year&pages/cervantes", (req, res) => {
  const cervantesBook = books.find(
    (book) => book.author === "Miguel de Cervantes"
  );
  res.json({ pages: cervantesBook.pages, year: cervantesBook.year });
});
app.get("/country/count/spain", (req, res) => {
  const spanishBooks = books.filter((book) => book.country === "Spain");
  const totalBooks = spanishBooks.length;
  res.json(totalBooks);
});
app.get("/country/at-least/germany", (req, res) => {
  const germanBooks = books.filter((book) => book.country === "Germany");
  if (germanBooks.length === 0) {
    return res.json(false);
  } else {
    return res.json(true);
  }
});
app.get("/pages/all-greater/200", (req, res) => {
  const lessThan200Pages = books.filter((book) => book.pages <= 200);
  if (lessThan200Pages.length >= 1) {
    return res.json(false);
  } else {
    return res.json(true);
  }
});

app.listen(port, () => {
  console.log("Servidor corriendo en Port 3000");
});
