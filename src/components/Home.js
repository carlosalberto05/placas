import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "../App.css";

export const Home = () => {
  return (
    <>
      <Jumbotron className="jm-bg " fluid id="home">
        <Container className="banner-img"></Container>
      </Jumbotron>
    </>
  );
};
