# Books API

## Install

Inside the report execute:

```sh
npm i
```

## Target

Inside `app.js` you'll need to create an express server and create the routes needed to pass all the 10 tests.

## Run tests

To execute tests run

```sh
npm run test
```

## To Do

You'll need to import `/data/books.json` to send the books needed

1. Create a route `/all` to fetch all books

2. Create a route `/first` to fetch the first book

3. Create a route `/last` to fetch the last book

4. Crate a route `/middle` to fetch the book in the middle (number in the array 50)

5. Create a route `/book/dante-alighieri` to fetch **ONLY THE TITLE** of `Dante Alighieri`'s book

6. Create a route `/country/charles-dickens` to fetch **ONLY THE COUNTRY** of `Charles Dickens` book

7. Create a route `/year&pages/cervantes` to fetch **PAGES AND YEAR** of `Miguel de Cervantes` book, Response example: `{ pages: ..., year: ... }`

8. Create a route `/country/count/spain` to fetch **THE NUMBER OF BOOK** from `Spain``

9. Create a route `/country/at-least/germany` to fetch **TRUE OR FALSE** depending on if there is or not a book from Germany

10. Create a route `/pages/all-greater/200` to fetch **TRUE OR FALSE** depending on if every books contain more then 200 pages