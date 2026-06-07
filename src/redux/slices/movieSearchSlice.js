import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchMovieByName } from "../../services/searchMovieByName";

export const fetchMoviesByName = createAsyncThunk("movie/search",
  async(searchVal, thunkAPI)=>{
    try{
      const res = await searchMovieByName(searchVal);
      return res;
    }catch (error){
      return thunkAPI.rejectWithValue({
        message : error.message
      });
    }
  }
  );

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
  extraReducers: (builder)=>{
    builder
    //movies by name
    .addCase(fetchMoviesByName.pending, (state)=>{
      state.loading = true;
      state.error = null;
      console.log("pending curr api call");
    })
    .addCase(fetchMoviesByName.fulfilled, (state, action)=>{
      state.loading = false;
      state.error = null;
      state.fetchedData = action.payload;
      console.log("success");
    })
    .addCase(fetchMoviesByName.rejected, (state, action)=>{
      state.loading = false;
      state.error = {
        message: action.payload?.message,
        code: action.payload?.code,
        status: action.payload?.status,
        statusText: action.payload?.statusText,
      };
      console.log('curr api call failed');
      
    })
  }
})

export const
{
  toggleTheme,

} = movieSearch.actions;

export default movieSearch.reducer
