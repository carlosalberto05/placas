import React from "react";
import { nanoid } from "nanoid";
import { Container, Accordion, Card, Button } from "react-bootstrap";

export const Preguntas = () => {
  const preguntas = [
    {
      ask: "¿Que material utilizamos?",
      id: "id" + nanoid(),
      eventKey: 1,
      res: `El material es un plastico llamado PLA(poliácido láctico) Es un
    termoplástico cuyos materiales de base se obtienen a partir de
    almidón de maíz. Se utiliza ampliamente en la impresión 3D.`,
    },
    {
      ask: "¿Cuál es el tamaño de las placas?",
      id: "id" + nanoid(),
      eventKey: 2,
      res: `Varían dependiendo del modelo, por ejemplo en el caso del
      huesito las placas pequeñas miden 60x24mm, las medianas 75x30mm,
      y las grandes 90x30mm`,
    },
    {
      ask: "¿Qué colores manejan?",
      id: "id" + nanoid(),
      eventKey: 3,
      res: ` Por el momento solo manejamos los colores blanco, negro y madera`,
    },
  ];

  return (
    <div id="preguntas" className="mt-5 mb-5">
      <h2 className="text-center mb-5">Preguntas Frencuentes</h2>

      <Container>
        <Accordion defaultActiveKey="0">
          {preguntas.map((pregunta) => {
            return (
              <Card key={pregunta.id}>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={pregunta.eventKey}
                    className="text-decoration-none text-dark"
                  >
                    {pregunta.ask}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={pregunta.eventKey}>
                  <Card.Body>{pregunta.res}</Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
};
