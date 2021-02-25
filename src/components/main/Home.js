import React from "react";
import { Jumbotron, Container, Carousel, Col, Row } from "react-bootstrap";
import modelo1 from "../../assets/mod1.jpeg";
import huesos1 from "../../assets/huesos.JPG";
import modelo2 from "../../assets/mod2.jpeg";
import huesos2 from "../../assets/brunohueso.png";
import modelo3 from "../../assets/mod3.jpeg";

import "../../App.css";

export const Home = () => {
  return (
    <div id="home">
      <Jumbotron className="jm-carousel">
        <Container>
          <Carousel>
            <Carousel.Item interval={15000000000000}>
              <img
                className="d-block w-100 carousel__bg"
                src={modelo1}
                alt="First slide"
              />
              <Carousel.Caption className="carousel__content">
                <Row className="carousel__content-row">
                  <Col className="carousel__content-col" lg={6}>
                    <img
                      src={huesos1}
                      alt="Modelo1"
                      className="carousel__content-imagenes"
                    />
                  </Col>
                  <Col lg={6}>
                    <h3 class="carousel_model-name">Modelo 1</h3>
                    <p class="carousel_model-description">
                      Diseño de hueso de color blanco con letras negras y huella
                      negra.
                    </p>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={15000000000000}>
              <img
                className="d-block w-100 carousel__bg"
                src={modelo2}
                alt="First slide"
              />
              <Carousel.Caption className="carousel__content">
                <Row className="carousel__content-row">
                  <Col className="carousel__content-col" lg={6}>
                    <img
                      src={huesos2}
                      alt="Modelo2"
                      className="carousel__content-imagenes"
                    />
                  </Col>
                  <Col lg={6}>
                    <h3 class="carousel_model-name">Modelo 2</h3>
                    <p class="carousel_model-description">
                      Diseño de hueso de color negro con letras blancas y huella
                      blanca.
                    </p>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={modelo3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Jumbotron>
    </div>
  );
};
