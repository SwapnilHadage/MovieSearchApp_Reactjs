import { configureStore } from "@reduxjs/toolkit";
import movieSearch from './slices/movieSearchSlice';

const store = configureStore({
  reducer:{
    movieSearch : movieSearch,
  },
  devTools: true,
})

export default store;