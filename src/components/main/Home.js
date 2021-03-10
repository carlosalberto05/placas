import React from "react";
import { Jumbotron, Container, Carousel } from "react-bootstrap";

import Lis1 from "../../assets/home/lis1.jpg";
import hueso1 from "../../assets/home/hu5.JPG";
import hueso6 from "../../assets/home/hu6.JPG";
import Willy from "../../assets/home/wilif2.JPG";
import placas from "../../assets/home/placas.JPG";
import Michito from "../../assets/home/michif1.JPG";
import Bruno from "../../assets/home/bruno.JPG";
import hueso8 from "../../assets/home/hue8.JPG";
import hueso13 from "../../assets/home/hue13.JPG";

import "../../App.css";
import { nanoid } from "nanoid";

export const Home = () => {
  const imagenes = [
    { img: Lis1, id: "id" + nanoid(), message: "Placas personalizadas" },
    { img: hueso13, id: "id" + nanoid(), message: "Placas personalizadas" },
    { img: hueso8, id: "id" + nanoid(), message: "Placas personalizadas" },
    {
      img: hueso1,
      id: "id" + nanoid(),
      message: "Con el nombre de tu mascota",
    },
    { img: hueso6, id: "id" + nanoid(), message: "Y con un número teléfonico" },
    { img: Willy, id: "id" + nanoid(), message: "Placas en forma de hueso" },
    { img: placas, id: "id" + nanoid(), message: "Placas personalizadas" },
    { img: Michito, id: "id" + nanoid(), message: "Placas circulares" },
    { img: Bruno, id: "id" + nanoid(), message: "Con el nombre de tu mascota" },
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
