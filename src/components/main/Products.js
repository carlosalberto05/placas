import React from "react";
import { Container, Jumbotron, Carousel } from "react-bootstrap";
import carousel from "../../assets/carousel.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.PNG";
import "../../App.css";

export const Products = () => {
  return (
    <div id="products" className="mt-5">
      <h2 className="text-center">Productos</h2>
      <Jumbotron className="jm-carousel">
        <Container>
          <Carousel className="stilos-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100  "
                src={carousel}
                alt="First slide"
              />
              <Carousel.Caption className="stilos-carousel-caption">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carousel2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carousel3}
                alt="Third slide"
              />

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
