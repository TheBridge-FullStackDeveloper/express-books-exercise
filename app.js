const express = require('express');
const books = require('./data/books.json');

const app = express();
const port = 3000;


// n1
app.get('/all', (req, res) => {
    res.status(200).send(books);
})

//n2
app.get('/first', (req, res) => {
    res.status(200).send(books[0]);
})

//n3
app.get('/last', (req, res) => {
    res.status(200).send(books[books.length - 1]);
})

//n4
app.get('/middle', (req, res) => {
    res.status(200).send(books[Math.floor(books.length / 2)]);
})

//n5
app.get('/author/dante-alighieri', (req, res) => {
    const bookDante = books.find(book => book.author === "Dante Alighieri").title;
    res.status(200).send(res.json(bookDante));
})

//n6
app.get('/country/charles-dickens', (req, res) => {
    const Charles = books.find(book => book.author === "Charles Dickens").country;
    res.status(200).send(res.json(Charles));
})

//n7
app.get('/year&pages/cervantes', (req, res) => {
    const [{ pages, year }] = bookData.filter(book => book.author === "Miguel de Cervantes")
    res.json({ 'pages': pages, 'year': year })
})

//n8
app.get('/country/count/spain', (req, res) => {
    const spanishBooks = bookData.filter(book => book.country === "Spain")
    res.json(spanishBooks.length)
})

//n9
app.get('/country/at-least/germany', (req, res) => {
    const germanBooks = bookData.filter(book => book.country === "Germany")
    res.json(germanBooks ? true : false)
})

//n10
app.get('/pages/all-greater/200', (req, res) => {
    const bigBooks = bookData.map(book => book.pages > 200)
    res.json(bigBooks === bookData)
})
