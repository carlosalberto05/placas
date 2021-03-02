import React from "react";
import { Jumbotron, Container, Carousel } from "react-bootstrap";

import Willy from "../../assets/home/wilif2.JPG";
import placas from "../../assets/home/placas.JPG";
import Michito from "../../assets/home/michif1.JPG";
import Bruno from "../../assets/home/bruno.JPG";

import "../../App.css";

export const Home = () => {
  return (
    <div id="home">
      <Jumbotron className="jm-carousel">
        <Container>
          <Carousel>
            <Carousel.Item interval={2000} className="carousel-item">
              <img className="fluid w-100 " src={placas} alt="Placas" />
              <Carousel.Caption className="carousel__content">
                <h3 className="caption-h3">Placas personalizadas</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000} className="carousel-item">
              <img className="fluid w-100 " src={Bruno} alt="Placas" />
              <Carousel.Caption className="carousel__content">
                <h3 className="caption-h3">Con el nombre de tu mascota</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000} className="carousel-item">
              <img className="fluid w-100 " src={Willy} alt="Willy" />
              <Carousel.Caption>
                <h3 className="caption-h3">Placas en forma de hueso</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000} className="carousel-item">
              <img className="fluid w-100" src={Michito} alt="Michito" />
              <Carousel.Caption className="carousel__content">
                <h3 className="caption-h3">Placas circulares</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Jumbotron>
    </div>
  );
};
