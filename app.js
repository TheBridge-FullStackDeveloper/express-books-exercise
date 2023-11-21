const express = require('express')
const app = express()
const port = 3000

const books = require('./data/books.json');

app.get('/all', (req, res) => {
    res.send(books)
  })

  app.get('/first', (req, res) => {
    res.send(books[0])
  })

  app.get('/last', (req, res) => {
    res.send(books[99])
  })

  app.get('/middle', (req, res) => {
    res.send(books[100/2])
  })
  app.get('/author/dante-alighieri', (req, res) => {
    const book = books.filter (book => book.author === "Dante Alighieri");
    res.json(book[0].title) 
  })

  app.get('/country/charles-dickens', (req,res) => {

    const book = books.filter (book => book.author ===`Charles Dickens`);
    res.json (book[0].country)

  })

  app.get( `/year&pages/cervantes` , (req,res) => {

    const book = books.filter (book => book.author === `Miguel de Cervantes`);

    res.json ({pages:book[0].pages,year:book[0].year})

  })


  app.get ('/country/count/spain' , (req,res)=>{

    const book = books.filter (book => book.country === `Spain`);
    res.json (book.length)

  })

  app.get ( `/country/at-least/germany`, (req,res) => {
    const book = books.some (book => book.country === `Germany`);
    res.json (book)
  })

  app.get(`/pages/all-greater/200`, (req, res) => {
    const book = books.every(book => book.pages > 100);
    res.json(book);
  });


  



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
