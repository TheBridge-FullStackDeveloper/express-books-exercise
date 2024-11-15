const books = require ('./data/books.json');
const express = require('express')
const router = express.Router();
const app = express()
const port = 3000

app.get('/all', (req, res) => {
  res.send(books)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/first',(req,res) => {
    res.send(books[0]);
})




