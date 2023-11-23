import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // return new state as usually
      // return { ...state, title: action.payload };

      // mutate state thanks to Immer Library
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state) => {
      // return nitialState;
      // or state.title = '';
      return { ...initialState };
    },
  },
});

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title; // name: 'filter', title: '',
export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
