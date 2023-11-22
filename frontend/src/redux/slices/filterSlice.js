import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
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
  },
});

export const { setTitleFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title; // name: 'filter', title: '',

export default filterSlice.reducer;
