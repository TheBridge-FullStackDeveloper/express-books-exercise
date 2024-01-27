const books = require("./data/books.json");
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("EJERCICIO EXPRESS BOOK");
});

// 1. todos los libros
app.get("/all", (req, res) => {
  res.json(books);
});

// 2. El primer libro
app.get(`/first`, (req, res) => {
  res.json(books[0]);
});

// 3. el ultimo
app.get("/last", (req, res) => {
  res.json(books[books.length - 1]);
});

// 4. el medio
app.get("/middle", (req, res) => {
  res.json(books[books.length / 2]);
});

// 5. el libro de Dante
app.get("/author/dante-alighieri", (req, res) => {
  const dante = books.find((jsonFind) => jsonFind.author === "Dante Alighieri");
  res.json(dante.title);
});

// 6. pais de charles dickens
app.get("/country/charles-dickens", (req, res) => {
  const dickens = books.find(
    (jsonFind) => jsonFind.author === "Charles Dickens"
  );
  res.json(dickens.country);
});

// 7. paginas y año del libro de cervantes
app.get("/year&pages/cervantes", (req, res) => {
  const cervantes = books.find(
    (jsonFind) => jsonFind.author === "Miguel de Cervantes"
  );
  const yearAndPages = {
    pages: cervantes.pages,
    year: cervantes.year,
  };
  res.json(yearAndPages);
});

// 8. numero de libros de España
app.get("/country/count/spain", (req, res) => {
  const spainBooks = books.filter(
    (jsonFilter) => jsonFilter.country === "Spain"
  );
  const numberSpainBooks = spainBooks.length
  
  res.json( numberSpainBooks );
});

// 9. comprobacion de si hay un libro de almenania
app.get('/country/at-least/germany', (req, res) => {
  const germanyBoolean = books.some(
    (jsonSome) => jsonSome.country === 'Germany'
  )
  res.json(germanyBoolean)
})

// 10. comprobacion de si todos los libros tienen mas de 200 paginas.
app.get('/pages/all-greater/100', (req, res) => {
  const booksBoolean = books.every(
    (jsonEvery) => jsonEvery.pages > 100
  )
  res.json( booksBoolean )
})



app.listen(PORT, () => {
  console.log(`Servidor esuchando el puerto ${PORT}`);
});
