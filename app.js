const express = require('express')
const app = express()
const port = 3000
const books = require("./data/books.json");




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//1
app.get("/all", (req, res) => {
    res.send(books);
  });
  //2
app.get("/first", (req, res) => {
    const [first] = books;
    res.send(first);
  });
  //3
  app.get("/last", (req, res) => {
    const last = books [books.length -1];
    res.send(last);
  });
  //4
  app.get("/middle", (req, res) => {
    const middle = books [books.length / 2];
    res.send(middle);
  });
  //5
  app.get("/author/dante-alighieri", (req, res) => {
    const book = books.find((book) => book.author === "Dante Alighieri");
    res.json(book.title);
  });
  //6
  app.get("/country/charles-dickens", (req, res) => {
    const book = books.find((book) => book.author === "Charles Dickens");
  
    res.json(book.country);
  });
  //7
  app.get("/year&pages/cervantes", (req, res) => {
    const book = books.find((book) => book.author === "Miguel de Cervantes");
  
    res.json({
      pages: book.pages,
      year: book.year,
    });
  });
  //8
  app.get("/country/count/spain", (req, res) => {
    const booksFromSpain = books.filter((book) => book.country === "Spain");
  
    res.json(booksFromSpain.length);
  });
  //9
  app.get("/country/at-least/germany", (req, res) => {
    const isBookFromGermanyExist = books.some((book) => book.country === "Germany");
  
    res.json(isBookFromGermanyExist);
  });
  //10
  app.get("/pages/all-greater/200", (req, res) => {
    const isPagesGreaterThen200 = books.every((book) => book.pages > 200);
  
    res.json(isPagesGreaterThen200);
  });