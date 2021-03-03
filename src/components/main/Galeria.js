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
import jordi from "../../assets/galeria/jordi.PNG";
import william from "../../assets/galeria/willi.PNG";
import mozart from "../../assets/galeria/mozart.JPG";
import placagato3 from "../../assets/placagato3.JPG";
import huesos from "../../assets/galeria/huesos.JPG";
import brunoNegro from "../../assets/galeria/bruno2.JPG";
import brunoCollar from "../../assets/galeria/brunohueso.png";
import huesosDos from "../../assets/galeria/huesos2.JPG";
import "../../App.css";
import { nanoid } from "nanoid";

export const Galeria = () => {
  const [imagen, setImagen] = useState([]);
  const [show, setShow] = useState(false);

  const imagenes = [
    {
      img: brunoCollar,
      id: "id" + nanoid(),
    },
    { img: jordi, id: "id" + nanoid() },
    { img: bruno, id: "id" + nanoid() },
    { img: william, id: "id" + nanoid() },
    { img: mozart, id: "id" + nanoid() },
    { img: huesosDos, id: "id" + nanoid() },
    { img: placagato3, id: "id" + nanoid() },
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
              <div key={id}>
                <Card>
                  <Button variant="null" onClick={() => handleShow(id)}>
                    <Card.Img variant="top" src={img} />
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
