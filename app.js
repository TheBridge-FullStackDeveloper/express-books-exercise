const express = require('express')
const app = express()
const port = 3000
const books = require ('./data/books.json');



app.get('/all', (req, res) => {
  res.send(books);
})

app.get('/first', (req, res) => {
    res.send(books.shift());
})

app.get('/last', (req, res) => {
    res.send(books.pop());
})

app.get('/middle', (req, res) => {
    const middle = books [books.length / 2]
    res.send(middle);
})

app.get('/author/dante-alighieri', (req, res) => {
    const author = books.filter(el => el.author === 'Dante Alighieri');
    res.json(author[0].title);
})

app.get('/country/charles-dickens', (req, res) => {
    const author = books.filter(el => el.author === 'Charles Dickens');
    res.json(author[0].country);
})

app.get('/year&pages/cervantes', (req, res) => {
    const author = books.filter(el => el.author === 'Miguel de Cervantes');
    res.json({ year: author[0].year, pages: author[0].pages });
})

app.get('/country/count/spain', (req, res) => {
    const spainBooks = books.filter(el => el.country === 'Spain');
    res.json(spainBooks.length)
})

app.get('/country/at-least/germany', (req, res) => {
    const result = books.some(el => el.country === 'Germany');
    res.json(result)
})

app.get('/pages/all-greater/200', (req, res) => {
    const result = books.every(el => el.pages > 100);
    res.json(result)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })