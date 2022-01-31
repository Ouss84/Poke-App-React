import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";
import Loader from "./Loader";

const Pokemons = ({ favHandler, favorites }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPokemons, setNextPokemons] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    axios
      .get(nextPokemons)
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        const fetches = res.data.results.map((p) =>
          axios.get(p.url).then((res) => res.data)
        );
        setNextPokemons(res.data.next);

        // console.log(nextPokemons);
        // console.log(prevPokemons);

        Promise.all(fetches).then((data) => {
          setPokemons((prevState) => [...prevState, ...data]);
          setIsLoading(false);
        });
      });
  };

  // console.log(pokemons);
  return (
    <div>
      <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && <Loader />}
          {!isLoading &&
            pokemons.map((pok) => (
              <PokemonCard
                key={pok.name}
                name={pok.name}
                image={pok.sprites.other.dream_world.front_default}
                pokemonName={pok.name}
                fav={favorites.some((item) => item.name === pok.name)}
                favClick={() => favHandler(pok)}
              />
            ))}
        </Row>
      </Container>
      <Button variant="danger" size="lg" onClick={getPokemons}>
        More Pokemons ...
      </Button>
    </div>
  );
};

export default Pokemons;
