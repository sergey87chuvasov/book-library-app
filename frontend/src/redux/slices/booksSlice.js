import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';

const initialState = [];

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await axios.get('http://localhost:4000/random-book');
  console.log(res.data);
  return res.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
      // return state.map((book) =>
      //   book.id === action.payload
      //     ? { ...book, isFavorite: !book.isFavorite }
      //     : book
      // );
    },
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
  // console.log(getState());
  try {
    const res = await axios.get('http://localhost:4000/random-book');
    // console.log(res);
    if (res.data && res.data.title && res.data.author) {
      dispatch(addBook(createBookWithID(res.data, 'API')));
    }
    // or  if (res?.data?.title && res?.data?.author) {}
  } catch (error) {
    console.log(error, 'error');
  }
  // console.log(getState());
};

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
