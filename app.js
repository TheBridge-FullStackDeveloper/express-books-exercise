const books = require('./data/books.json');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const routes = app._router.stack
    .filter((layer) => layer.route)
    .map((layer) => layer.route.path);

  const html = `
    <html>
      <head><title>books exercise</title></head>
      <body>
        <h2>routes</h2>
        <ul>
          ${routes.map((route) => `<li><a href="${route}">${route}</a></li>`).join('')}
        </ul>
      </body>
    </html>
  `;

  res.send(html);
});

app.get('/all', (req, res) => {
    res.send(books)
});

app.get('/first', (req, res) => {
    console.log(res);
    res.send(books[0]);
});
app.get('/last', (req, res) => {
    res.send(books[books.length-1]);
});
app.get('/middle', (req, res) => {
    res.send(books[Math.floor(books.length / 2)]);
});

app.get('/author/:name', (req, res) => {
    const authorName = req.params.name.toLowerCase().replace('-', ' ');

    const book = books.find((book) => book.author.toLowerCase() == authorName);

    res.send(book ? book.title : "Could not find the author: " + authorName);
});

app.get('/country/:name', (req, res) => {
    const authorName = req.params.name.toLowerCase().replace('-', ' ');

    const book = books.find((book) => book.author.toLowerCase() == authorName);

    res.send(book ? book.country : "Could not find the author: " + authorName);
});

app.get('/year&pages/:name', (req, res) => {
    const authorName = req.params.name.toLowerCase().replace('-', ' ');
    const book = books.find((book) => book.author.toLowerCase() == authorName);
    res.send(book ? {pages: book.pages, year: book.year} : "Could not find the author: " + authorName);
});
app.get('/country/count/:country', (req, res) => {
    const filteredCountries = books.filter((book) => book.country.toLocaleLowerCase() == req.params.country.toLowerCase());
    //console.log(filteredCountries.length)
    res.send(''+filteredCountries.length);
});

app.get('/country/at-least/:country', (req, res) => {
    const filteredCountries = books.find((book) => book.country.toLocaleLowerCase() == req.params.country.toLowerCase());
    //console.log(filteredCountries.length)
    res.send(Boolean(filteredCountries));
});


app.get('/country/all-greater/:amount', (req, res) => {
    const filteredCountries = books.find((book) => book.pages < req.params.amount);
    //console.log(filteredCountries.length)
    res.send(!Boolean(filteredCountries));
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});