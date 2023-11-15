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
    const elementFounded = books.find(elemento => elemento.author === 'Dante Alighieri')
    if (elementFounded === 'Dante Alighieri'){
        res.send(elementFounded.books.title)}
  });
  //6
  app.get("/country/charles-dickens", (req, res) => {
    const middle = books [books.length / 2];
    res.send(middle);
  });