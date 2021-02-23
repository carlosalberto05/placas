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
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                ¿Qué tipo de material utilizan?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>El material es un plastico llamado PLA</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                ¿De qué tamaño son las placas?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Varían dependiendo del modelo, el modelo del hueso más pequeño
                tiene una medida de 60mm x 24mm, el mediano de 75mm x 30mm y el
                grande 90mm x 36mm
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
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
