import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const PokemonCard = ({ name, image, pokemonName }) => {
  return (
    <div>
      <Card bg="dark" text="light">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img style={{ height: "17rem" }} variant="top" src={image} />
          <LinkContainer to={`/${pokemonName}`}>
            <Button variant="outline-secondary" size="sm">
              Details
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokemonCard;
