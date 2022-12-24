import React from "react";
import { Container, Table } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Tables from "./Table";
import classes from "./Home.module.css";

function Home(props) {
  return (
    <div className={classes.cards}>
      <Navbar expand="lg" variant="light" bg="info">
        <Container>
          <Navbar.Brand href="#">The Generics</Navbar.Brand>
        </Container>
      </Navbar>
      <Tables />
    </div>
  );
}

export default Home;
