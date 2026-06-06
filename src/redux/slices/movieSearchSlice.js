import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const movieSearch = createSlice({
  name: 'movieSearch',
  initialState: {
    movieId: null,
    fetchedData: null,
    favourites: null,
    loading: null,
    error: null,
    theme: 1, //dark

  },
  reducers: {
    toggleTheme: (state)=>{
      state.theme = !state.theme;
    }
  },
})

export const
{
  toggleTheme,

} = movieSearch.actions;

export default movieSearch.reducer
