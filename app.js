const express = require('express')
const app = express()
const port = 3000
const books = require ('./data/books.json');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })




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
    res.send(author);
})


