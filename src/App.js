import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";

import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import PokeSingle from "./components/PokeSingle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="/:pokemonName" element={<PokeSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
