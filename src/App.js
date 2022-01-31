import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";

import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import PokeSingle from "./components/PokeSingle";
import FavList from "./components/FavList";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favorites") || "0");
  useEffect(() => {
    if (getArray !== 0) {
      setFavorites(getArray);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const favHandler = (pokemon) => {
    let item = favorites.some((item) => item.id === pokemon.id);
    if (!item) {
      setFavorites((prevState) => [...prevState, pokemon]);
      localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
    } else {
      const newArray = [...favorites];

      newArray.splice(
        newArray.findIndex((item) => item.id === pokemon.id),
        1
      );
      setFavorites(newArray);
      localStorage.removeItem(pokemon.name);
    }

    console.log(favorites);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="pokemons"
            element={<Pokemons favHandler={favHandler} favorites={favorites} />}
          />
          <Route path="/:pokemonName" element={<PokeSingle />} />
          <Route
            path="favorites"
            element={<FavList favHandler={favHandler} favorites={favorites} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
