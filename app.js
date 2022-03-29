const express = require('express');
const app = express();
const port = 3000;
const data = require('./data/books.json');

app.get('/all', (req, res) => {
    res.json(data)
  })

app.get('/first', (req, res) => {
    res.json(data[0])
})

app.get('/last', (req, res) => {
    res.json(data[data.length-1])
})

app.get('/middle', (req, res) => {
    res.json(data[data.length/2])
})

app.get('/author/dante-alighieri', (req, res) => {
    for(book of data){
        if(book.author == "Dante Alighieri"){
            console.log(book.title)
            res.json(book.title)
        }   
    }
})

app.get('/country/charles-dickens', (req, res) => {
    for(book of data){
        if(book.author == "Charles Dickens"){
            res.json(book.country)
        }   
    }
})

app.get('/year&pages/cervantes', (req, res) => {
    for(book of data){
        if(book.author == "Miguel de Cervantes"){
            res.json({pages:book.pages, year:book.year})
        }   
    }
})

app.get('/country/count/spain', (req, res) => {
    let counter = 0
    for(book of data){
        if(book.country == "Spain"){
            counter++      
        }    
    }
    res.json(counter)
})

app.get('/country/at-least/germany', (req, res) => {
    let counter = 0
    for(book of data){
        if(book.country == "Germany"){
            counter++      
        }    
    }
    counter > 0?res.json(true):res.json(false)
    
})

app.get('/pages/all-greater/200', (req, res) => {
    let counter = 0
    for(book of data){
        if(book.pages < 100){
            res.json(false)     
        }    
    }
    res.json(true)
    
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
}) //Esto arranca el servidor