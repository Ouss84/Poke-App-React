import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./app.css";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemons" element={<Pokemons />} />
      </Routes>
    </div>
  );
}

export default App;
