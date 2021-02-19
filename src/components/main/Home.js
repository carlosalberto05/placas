import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "../../App.css";

export const Home = () => {
  return (
    <div id="home">
      <Jumbotron className="jm-bg " fluid>
        <Container className="banner-img"></Container>
      </Jumbotron>
    </div>
  );
};
