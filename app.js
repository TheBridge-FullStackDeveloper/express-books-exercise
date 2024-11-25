const express = require('express');
const books = require('./data/books.json');
const app = express();
const PORT = 3000;

app.get('/all', (req, res) => {
    res.json(books);
  });
  
app.get('/first', (req, res) => {
    res.json(books[0]);
}
)
app.get('/last', (req, res) => {
    res.json(books[books.length - 1]);
}
);
app.get('/middle', (req, res) => {
    res.json(books[books.length/2]);
}
);
app.get('/author/dante-alighieri', (req, res) => {
    const dantesBook = books.find(book => book.author === 'Dante Alighieri');
    res.json(dantesBook ? dantesBook.title : { message: 'Este libro no aparece' });
});
app.get('/country/charles-dickens', (req, res) => {
    const dickensBooksCountry = books.find(book => book.author === 'Charles Dickens');
    res.json(dickensBooksCountry ? dickensBooksCountry.country : { message: 'Este pais no se ha encontrado' });
}
);
app.get('/year&pages/cervantes', (req, res) => {
    const cervantesBook = books.find(book => book.author === 'Miguel de Cervantes');

    res.json(cervantesBook ? { pages: cervantesBook.pages, year: cervantesBook.year } : { message: 'No se encontraron los datos' });
}
);
app.get('/country/count/spain', (req, res) => {
    const spanishBooks = books.filter(book => book.country === 'Spain');
    const numero = spanishBooks.length;
    res.json(numero);
});
app.get('/country/at-least/germany', (req, res) => {
    const germanBooks = books.filter(book => book.country === 'Germany');
    if (germanBooks.length === 0) {
        res.json(false);
    } else {
        res.json(true);
    }
});

app.get('/pages/all-greater/200', (req, res) => {
    const morethan200 = books.filter(book => book.pages <= 200);
    if (morethan200.length === 0) {
        res.json(true);
    } else {
        res.json(false);
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});