import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PokemonCard from "./PokemonCard";
const FavList = ({ favHandler, favorites }) => {
  return (
    <div>
      <div>
        <Container>
          <Row
            xs={2}
            md={4}
            lg={5}
            className="justify-content-between my-5 d-flex gap-3"
          >
            {favorites.length === 0 ? (
              <h1>list empty</h1>
            ) : (
              favorites.map((pok) => (
                <PokemonCard
                  key={pok.name}
                  name={pok.name}
                  image={pok.sprites.other.dream_world.front_default}
                  pokemonName={pok.name}
                  fav={favorites.some((item) => item.name === pok.name)}
                  favClick={() => favHandler(pok)}
                />
              ))
            )}
            {}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FavList;
