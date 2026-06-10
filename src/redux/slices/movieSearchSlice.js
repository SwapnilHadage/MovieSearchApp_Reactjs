import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchMovieByName } from "../../services/searchMovieByName";

export const fetchMoviesByName = createAsyncThunk(
  "movie/search",
  async(searchVal, thunkAPI)=>{
    try{
      const res = await searchMovieByName(searchVal);
      return res;
    }catch (error){
      return thunkAPI.rejectWithValue({
        message : error?.message || error?.response?.data?.message || "Something Went Wrong",
        code: error?.code || null,
        status: error?.response?.status || null,
        statusText: error?.response?.statusText || null,
      });
    }
  }
);

const movieSearch = createSlice({
  name: 'movieSearch',
  initialState: {
    movieId: null,
    fetchedData: null,
    favourites: (()=>{
                        try {
                          return JSON.parse(localStorage.getItem('favourites')) || {};
                        } catch (error) {
                          return {};
                        }
                })(),
    loading: null,
    error: null,
    theme: 1, //dark

  },
  reducers: {
    toggleTheme: (state)=>{
      state.theme = !state.theme;
    },
    changeFavs: (state, action)=>{
      state.favourites = action.payload;
      localStorage.setItem('favourites', JSON.stringify(action.payload));
    },

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
  changeFavs,

} = movieSearch.actions;

export default movieSearch.reducer
