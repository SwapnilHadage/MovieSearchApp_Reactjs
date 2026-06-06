import { useState } from 'react';
import './App.css';
import { Routes, Route, }  from "react-router";
import { Home, Favourites, } from "./pages"
import Layout from "./layout/Layout"

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" index element={<Home/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Route>
    </Routes>
  )
}

export default App
