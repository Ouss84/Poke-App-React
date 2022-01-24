import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemons" element={<Pokemons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
