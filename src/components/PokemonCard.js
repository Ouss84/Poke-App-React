import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
const PokemonCard = ({ name, image, pokemonName, fav, favClick }) => {
  return (
    <div>
      <Card bg="dark" text="light">
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between">
            {name}

            {fav ? (
              <HeartFill
                onClick={favClick}
                size="25"
                color="yellow"
                style={{ cursor: "pointer" }}
              />
            ) : (
              <Heart
                onClick={favClick}
                size="25"
                color="yellow"
                style={{ cursor: "pointer" }}
              />
            )}
          </Card.Title>
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
