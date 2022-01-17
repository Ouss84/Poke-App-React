import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

import "./app.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setPokemons(response.data.results));
  }, []);
  console.log(pokemons);
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home">Pokemon App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="justify-content-between my-5 d-flex gap-3"
        >
          {pokemons.map((pok) => (
            <Card bg="dark" text="light">
              <Card.Img variant="top" src={""} />
              <Card.Body>
                <Card.Title>{pok.name}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
