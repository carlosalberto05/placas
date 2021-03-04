import React from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import Bruno from "../../assets/products/brumo1.jpeg";

import "../../App.css";

export const Products = () => {
  return (
    <div id="products" className="mt-5">
      <h2 className="text-center mb-5">Productos</h2>
      <Jumbotron className="jm-carousel">
        <Container>
          <Row>
            <Col>
              <h3 className="mb-4">Placas para tu mascota personalizadas</h3>
              <p className="text-justify">
                Realizamos placas con el nombre de tu mascota y con un número
                teléfonico. Contamos con un modelo con forma de hueso para
                perros y un modelo circular para tu gato.
              </p>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={Bruno}
                rounded
                style={{
                  width: "50%",
                  objectFit: "contain",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};
