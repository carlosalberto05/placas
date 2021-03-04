import React from "react";
import { Jumbotron, Container, Carousel } from "react-bootstrap";

import Willy from "../../assets/home/wilif2.JPG";
import placas from "../../assets/home/placas.JPG";
import Michito from "../../assets/home/michif1.JPG";
import Bruno from "../../assets/home/bruno.JPG";

import "../../App.css";
import { nanoid } from "nanoid";

export const Home = () => {
  const imagenes = [
    { img: placas, id: "id" + nanoid(), message: "Placas personalizadas" },
    { img: Bruno, id: "id" + nanoid(), message: "Con el nombre de tu mascota" },
    { img: Willy, id: "id" + nanoid(), message: "Placas en forma de hueso" },
    { img: Michito, id: "id" + nanoid(), message: "Placas circulares" },
  ];

  return (
    <div id="home">
      <Jumbotron className="jm-carousel">
        <Container>
          <Carousel>
            {imagenes.map(({ img, id, message }) => {
              return (
                <Carousel.Item
                  key={id}
                  interval={2000}
                  className="carousel-item"
                >
                  <img className="fluid w-100 " src={img} alt="Placas" />
                  <Carousel.Caption>
                    <h3 className="caption-h3">{message}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </Jumbotron>
    </div>
  );
};
