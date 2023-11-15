const express = require("express");
const books = require("./data/books.json");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Fetch all books
app.get("/all", (req, res) => {
  res.json(books);
});

//Fetch only the first book
app.get("/first", (req, res) => {
  res.json(books[0]);
});

//Fetch only the last book
app.get("/last", (req, res) => {
  let lastBook = books.length - 1;
  res.json(books[lastBook]);
});

//Fetch the middle book
app.get("/middle", (req, res) => {
  let middleBook = books.length / 2;
  res.json(books[middleBook]);
});

//Fetch only the title "The Divine Comedy"
app.get("/author/dante-alighieri", (req, res) => {
  let danteTitle = books.filter((e) => e.title === "The Divine Comedy");
  res.json(danteTitle[0].title);
});

//Fetch only the country of "Charles Dickens"
app.get("/country/charles-dickens", (req, res) => {
  let DickensCountry = books.filter((e) => e.author === "Charles Dickens");
  res.json(DickensCountry[0].country);
});

//Fetch the PAGES AND YEAR of "Miguel de Cervantes"
app.get("/year&pages/cervantes", (req, res) => {
  let pageAndYear = books.filter((e) => e.author === "Miguel de Cervantes");
  res.json(`${pageAndYear[0].pages + pageAndYear[0].year}`);
});

//Fetch only spanish books
app.get("/country/count/spain", (req, res) => {
  let spanishBooks = books.filter((e) => e.country === "Spain");
  res.json(spanishBooks.length);
});

//Fetch only if there are german books
app.get("/country/at-least/germany", (req, res) => {
    let germanBooks = books.filter((e) => e.country === "Germany");
    res.json(germanBooks? true:false);
  });