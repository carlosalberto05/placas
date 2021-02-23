import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={logo}
            alt="logo"
            style={{ width: "5rem", height: "auto" }}
          />
          <p>
            This prodigiously grew tortoise charact stupidly pernicious jeepers
            along while accordingly under useful much salacious walking fars ...
          </p>
        </Col>
        <Col>
          <h3>Información de Contacto</h3>
          <p>Cunduacán, Tabasco</p>
          <p>Cel: 9934366178</p>
          <p>carlos_alberto-lira@outlook.com</p>
        </Col>
        <Col>
          <h3>Siguenos en </h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Whatsapp</p>
        </Col>
      </Row>
    </Container>
  );
};
