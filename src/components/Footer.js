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
      <Container id="contacto">
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
              <a
                href="tel:+529934366178"
                className="text-decoration-none text-dark"
              >
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                Cel: 9934366178
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a
                href="mailto:carlos_alberto-lira@outlook.com"
                className="text-dark text-decoration-none "
              >
                carlos_alberto-lira@outlook.com
              </a>
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
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              <a
                href="https://www.facebook.com/Litofan%C3%ADas-3D-107902834449557"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none "
              >
                Facebook
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              <a
                href="https://api.whatsapp.com/send?phone=+529934366178"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none "
              >
                Whatsapp
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
