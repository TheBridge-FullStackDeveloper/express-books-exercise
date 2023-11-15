const express = require("express");
const app = express();
const port = 3000;
const books = require("./data/books.json");

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
  res.send(books[Math.floor(books.length / 2)]);
});
const filterDante = books.filter((el) => el.author === "Dante Alighieri");

app.get("/author/dante-alighieri", (req, res) => {
  res.json(filterDante[0].title);
});

const countryDickens = books.find((book) => book.author === "Charles Dickens");
app.get("/country/charles-dickens", (req, res) => {
  res.json(countryDickens.country);
});

const cervantes = books.find((book) => book.author === "Miguel de Cervantes");

app.get("/year&pages/cervantes", (req, res) => {
  res.json({ year: cervantes.year, pages: cervantes.pages });
});

const spain = books.filter((el) => el.country === "Spain");

app.get("/country/count/spain", (req, res) => {
  res.json(spain.length);
});

app.get("/country/at-least/germany", (req, res) => {
  res.json(books.some((el) => el.country === "Germany"));
});

app.get("/pages/all-greater/200", (req, res) => {
  res.json(books.every((el) => el.pages > 200));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
