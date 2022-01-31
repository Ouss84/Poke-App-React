import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
const PokeSingle = () => {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { pokemonName } = useParams();
  let navigate = useNavigate();
  const singlePokemonData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .catch((err) => console.log(err))
      .then((res) => {
        setPokemon(res.data);
        setIsLoading(false);
        console.log(pokemon);
      });
  };
  useEffect(() => singlePokemonData(), []);
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <Card bg="light" text="dark" style={{ width: "18rem" }}>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Body>
            <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
            <p>Base experience: {pokemon.base_experience} </p>
            <p>Height: {pokemon.height} cm</p>
            <p>Weight: {pokemon.weight} kg </p>
            <div>
              Type:{" "}
              <ul>
                {pokemon.types.map((item) => (
                  <li key={item.type.name}>{item.type.name}</li>
                ))}
              </ul>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => navigate(-1)}
            >
              Back to list
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default PokeSingle;
