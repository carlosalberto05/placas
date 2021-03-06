import React from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";

import Brunom from "../../assets/products/modelobruno.png";
import tin1 from "../../assets/products/tin1.png";

import "../../App.css";

export const Products = () => {
  return (
    <div id="products" className="mt-5">
      <h2 className="text-center mb-5">Placas</h2>
      <Jumbotron className="jm-carousel">
        <Container>
          <Row className="mt-5">
            <Col lg={6} sm={12}>
              <p className="text-justify">
                Realizamos placas con el nombre de tu mascota y con un número
                teléfonico. El modelo del huesito cuenta con las siguientes
                medidas:
              </p>
              <p className="text-justify ">Pequeña - 60x24mm</p>
              <p className="text-justify">Mediana - 75x30mm</p>
              <p className="text-justify ">Grande - 90x30mm</p>
              <p className="text-justify">
                En el modelo circular las medidas son: 36x36mm
              </p>
            </Col>
            <Col lg={6} sm={12}>
              <Image src={Brunom} fluid rounded />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
              className="col-sm-order-first"
            >
              <Image src={tin1} fluid rounded />
            </Col>
            <Col
              lg={{ span: 6, order: 2 }}
              md={{ span: 6, order: 2 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
              className="col-sm-order-last"
            >
              <h3 className="mb-4 text-center">Tecnologías</h3>
              <p className="text-justify">
                Realizamos el diseño de las placas con software de modelado 3D.
                Posteriormente se utiliza un laminador y la tecnología de
                impresión 3D para materializar las placas.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};
