import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
    },
  },
});

// console.log(filterSlice.actions);
// console.log(filterSlice.actions.setTitleFilter());

export const setTitleFilter = filterSlice.actions.setTitleFilter;
// or
// const { setTitleFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title; // name: 'filter', title: '',

export default filterSlice.reducer;
