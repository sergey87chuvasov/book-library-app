import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { addBook } from '../../redux/books/actionCreator';
import { addBook } from '../../redux/slices/booksSlice';
import booksData from '../../data/books.json';
import createBookWithID from '../../utils/createBookWithID';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    // console.log(booksData);
    const randomIndex = Math.floor(Math.random() * booksData.length);
    // console.log(randomIndex);
    const randomBook = booksData[randomIndex];
    // console.log(randomBook);

    //payload
    // const randomBookWithID = {
    //   ...randomBook,
    //   id: uuidv4(),
    //   isFavorite: false,
    // };

    // const randomBookWithID = createBookWithID(randomBook);

    dispatch(addBook(createBookWithID(randomBook)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      // dispatch action
      // console.log(title, author);

      // const book = {
      //   title: title,
      //   author: author,
      //   id: uuidv4(),
      //   isFavorite: false,
      // };

      // const book = createBookWithID({ title, author });

      // console.log(addBook(book));
      dispatch(addBook(createBookWithID({ title, author })));

      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className='app-block book-form'>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='author'>Author: </label>
          <input
            type='text'
            id='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type='submit'>Add Book</button>
        <button type='button' onClick={handleAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
};

export default BookForm;
