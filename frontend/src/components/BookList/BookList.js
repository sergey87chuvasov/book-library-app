import { useSelector } from 'react-redux';
import { deleteBook } from '../../redux/books/actionCreator';
import { useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import './BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books); // название доджно совпадать с reducer, we choose only part of our state
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    // delete book
    // console.log(id);

    dispatch(deleteBook(id));
  };
  return (
    <div className='app-block book-list'>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className='book-info'>
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className='book-actions'>
                {book.isFavorite ? (
                  <BsBookmarkStarFill className='star-icon' />
                ) : (
                  <BsBookmarkStar className='star-icon' />
                )}
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
