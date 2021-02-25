import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";

export const Preguntas = () => {
  return (
    <div id="preguntas" className="mt-5 mb-5">
      <h2 className="text-center mb-5">Preguntas Frencuentes</h2>

      <Container>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="text-decoration-none text-dark"
              >
                ¿Que material utilizamos?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                El material es un plastico llamado PLA(poliácido láctico) Es un
                termoplástico cuyos materiales de base se obtienen a partir de
                almidón de maíz. Se utiliza ampliamente en la impresión 3D.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                className="text-decoration-none text-dark"
              >
                ¿Cuál es el tamaño de las placas?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Varían dependiendo del modelo, por ejemplo en el caso del
                huesito las placas pequeñas miden 60x24mm, las medianas 75x30mm,
                y las grandes 90x30mm
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="2"
                className="text-decoration-none text-dark"
              >
                ¿Qué colores manejan?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Por el momento solo manejamos los colores blanco, negro y madera
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};
