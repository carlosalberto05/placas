import React, { useState } from "react";
import {
  Container,
  CardColumns,
  Card,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import bruno from "../../assets/galeria/bruno.JPG";
import chucho from "../../assets/galeria/chucho.JPG";
import hueso1 from "../../assets/galeria/hu1.JPG";
import hueso2 from "../../assets/galeria/hu2.JPG";
import hueso3 from "../../assets/galeria/hu3.JPG";
import hueso4 from "../../assets/galeria/hu4.JPG";
import lis1 from "../../assets/galeria/lis1.jpg";
import lis2 from "../../assets/galeria/lis2.jpg";
import lis3 from "../../assets/galeria/lis3.jpg";
import lis4 from "../../assets/galeria/lis4.jpg";
import lis5 from "../../assets/galeria/lis5.JPG";
import lis6 from "../../assets/galeria/lis6.JPG";
import toto from "../../assets/galeria/toto.JPG";
import jordi from "../../assets/galeria/jordi.PNG";
import william from "../../assets/galeria/willi.PNG";
import mozart from "../../assets/galeria/mozart.JPG";
import placagato1 from "../../assets/galeria/placagato1.JPG";
import huesos from "../../assets/galeria/huesos.JPG";
import brunoNegro from "../../assets/galeria/bruno2.JPG";
import brunoCollar from "../../assets/galeria/brunohueso.png";
import huesosDos from "../../assets/galeria/huesos2.JPG";
import hue8 from "../../assets/galeria/hue8.JPG";
import hue10 from "../../assets/galeria/hue10.JPG";
import hue11 from "../../assets/galeria/hue11.JPG";
import hue12 from "../../assets/galeria/hue12.JPG";
import "../../App.css";
import { nanoid } from "nanoid";

export const Galeria = () => {
  const [imagen, setImagen] = useState([]);
  const [show, setShow] = useState(false);

  //Imagenes
  const imagenes = [
    {
      img: brunoCollar,
      id: "id" + nanoid(),
    },
    { img: hue8, id: "id" + nanoid() },
    { img: hue10, id: "id" + nanoid() },
    { img: hue11, id: "id" + nanoid() },
    { img: hue12, id: "id" + nanoid() },
    { img: jordi, id: "id" + nanoid() },
    { img: bruno, id: "id" + nanoid() },
    { img: mozart, id: "id" + nanoid() },
    { img: chucho, id: "id" + nanoid() },
    { img: hueso2, id: "id" + nanoid() },
    { img: hueso1, id: "id" + nanoid() },
    { img: hueso3, id: "id" + nanoid() },
    { img: hueso4, id: "id" + nanoid() },
    { img: william, id: "id" + nanoid() },
    { img: lis1, id: "id" + nanoid() },
    { img: lis2, id: "id" + nanoid() },
    { img: lis3, id: "id" + nanoid() },
    { img: lis4, id: "id" + nanoid() },
    { img: lis5, id: "id" + nanoid() },
    { img: lis6, id: "id" + nanoid() },
    { img: huesosDos, id: "id" + nanoid() },
    { img: placagato1, id: "id" + nanoid() },
    { img: toto, id: "id" + nanoid() },
    { img: huesos, id: "id" + nanoid() },
    {
      img: brunoNegro,
      id: "id" + nanoid(),
    },
  ];

  const handleShow = (id) => {
    const arrayFiltrado = imagenes.filter((item) => item.id === id);
    setImagen(...arrayFiltrado);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <h2 id="galeria" className="text-center">
        Galería
      </h2>
      <Container>
        <CardColumns>
          {imagenes.map(({ img, id }) => {
            return (
              <div key={id} className="galeria-card">
                <Card>
                  <Button variant="null" onClick={() => handleShow(id)}>
                    <Card.Img variant="top" src={img} className="gris" />
                  </Button>
                </Card>
              </div>
            );
          })}

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Dialog>
              <Image src={imagen.img} fluid rounded />
            </Modal.Dialog>
          </Modal>
        </CardColumns>
      </Container>
    </>
  );
};
