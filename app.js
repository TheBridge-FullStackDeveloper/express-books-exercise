const express = require('express');
const app = express();
const port = 3000;

const bookData = require('./data/books.json')



app.listen(port, () => {
   // console.log(`listening on ${port}`)
})


//1
app.get('/all', (req, res) => {
    res.json(bookData)
})


//2
app.get('/first', (req, res) => {
    res.json(bookData[0])
})


//3
app.get('/last', (req, res) => {
    res.json(bookData[bookData.length-1])
})


//4
app.get('/middle', (req, res) => {
    res.json(bookData[bookData.length/2])
})


//5
app.get('/author/dante-alighieri', (req, res) => {
    const [{title}] = bookData.filter(book => book.author === "Dante Alighieri")
    res.json(`${title}`)
})

//6
app.get('/country/charles-dickens', (req, res) => {
    const [{country}] = bookData.filter(book => book.author === "Charles Dickens")
    res.json(`${country}`)
})


//7
app.get('/year&pages/cervantes', (req, res) => {
    const [{pages, year}] = bookData.filter(book => book.author === "Miguel de Cervantes")
    res.json({'pages': pages, 'year': year})
})


//8
app.get('/country/count/spain', (req, res) => {
    const spanishBooks = bookData.filter(book => book.country === "Spain")
    res.json(spanishBooks.length)
})


//9
app.get('/country/at-least/germany', (req, res) => {
    const germanBooks = bookData.filter(book => book.country === "Germany")
    res.json(germanBooks? true : false)
})


//10
app.get('/pages/all-greater/200', (req, res) => {
    const bigBooks = bookData.map(book => book.pages > 200)
    res.json(bigBooks === bookData)
})