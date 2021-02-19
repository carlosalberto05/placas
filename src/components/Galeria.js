import React from "react";
import { CardDeck, Card, Container } from "react-bootstrap";
import willi from "../assets/willi.PNG";
import jordi from "../assets/jordi.PNG";
import mozart from "../assets/mozart.JPG";
import "../App.css";

export const Galeria = () => {
  return (
    <>
      <Container>
        <div className="mt-5 mb-5" id="galeria">
          <h2 className="text-center mt-4">Galería</h2>
        </div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={willi} />
            <Card.Body>
              <Card.Title>Willy</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={jordi} />
            <Card.Body>
              <Card.Title>Jordi</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={mozart} />
            <Card.Body>
              <Card.Title>Mozart</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
};
