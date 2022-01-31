import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
const PokeSingle = () => {
  const { pokemonName } = useParams();
  useEffect(() => singlePokemonData(), []);
  const singlePokemonData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => console.log(res.data.name));
  };

  return <div>Single page for {pokemonName}</div>;
};

export default PokeSingle;
