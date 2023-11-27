const express = require('express');
const cors = require('cors');
const booksData = require('./data/books.json');

const app = express(); // create aplication express

app.use(cors()); // do not create mistakes cors

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  return randomBook;
}

app.get('/random-book', (req, res) => {
  res.json(getRandomBook()); // return to client one book {json}
});

app.get('/random-book-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook());
  }, 2000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
