import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "5rem", height: "auto" }}
            />
            <p>
              This prodigiously grew tortoise charact stupidly pernicious
              jeepers along while accordingly under useful much salacious
              walking fars ...
            </p>
          </Col>
          <Col lg={4} sm={12}>
            <h3 className="mb-4">Información de Contacto</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
              Cunduacán, Tabasco
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Cel:
              9934366178
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              carlos_alberto-lira@outlook.com
            </p>
          </Col>
          <Col lg={4} sm={12}>
            <h3 className=" mb-4">Siguenos en </h3>
            <p>
              {" "}
              <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faFacebook} className="mr-2" /> Facebook
            </p>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Whatsapp
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
