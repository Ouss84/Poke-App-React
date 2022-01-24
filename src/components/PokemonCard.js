import React from "react";
import Card from "react-bootstrap/Card";

const PokemonCard = ({ pokData }) => {
  return (
    <div>
      <Card bg="dark" text="light">
        <Card.Body>
          <Card.Title>{pokData.name}</Card.Title>
          <Card.Img
            variant="top"
            src={pokData.sprites.other.dream_world.front_default}
          />
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokemonCard;
