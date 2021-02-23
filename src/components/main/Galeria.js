import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bruno from "../../assets/bruno.JPG";
import jordi from "../../assets/jordi.PNG";
import willi from "../../assets/willi.PNG";
import mozart from "../../assets/mozart.JPG";
import placagato3 from "../../assets/placagato3.JPG";
import huesos from "../../assets/huesos.JPG";
import "../../App.css";

export const Galeria = () => {
  return (
    <>
      <Container>
        <div className="mt-5 mb-5" id="galeria">
          <h2 className="text-center mt-4">Galería</h2>
        </div>
        <Row>
          <Col sm={12} lg={4} className="d-flex justify-content-center ">
            <Image
              src={bruno}
              rounded
              style={{ width: "200px", height: "200px" }}
            />
          </Col>
          <Col sm={12} lg={4} className="d-flex justify-content-center mt-3">
            <Image
              src={willi}
              rounded
              style={{ width: "200px", height: "200px" }}
            />
          </Col>
          <Col sm={12} lg={4} className="d-flex justify-content-center mt-3">
            <Image
              src={placagato3}
              rounded
              style={{ width: "200px", height: "200px" }}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={12} lg={4} className="d-flex justify-content-center mt-3">
            <Image
              src={huesos}
              rounded
              style={{ width: "200px", height: "200px" }}
            />
          </Col>
          <Col sm={12} lg={4} className="d-flex justify-content-center mt-3">
            <Image
              src={jordi}
              rounded
              style={{ width: "200px", height: "200px" }}
            />
          </Col>
          <Col sm={12} lg={4} className="d-flex justify-content-center mt-3">
            <Image
              src={mozart}
              rounded
              style={{ width: "200px", height: "200px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
