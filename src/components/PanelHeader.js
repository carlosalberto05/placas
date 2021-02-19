import React from "react";
import { Navbar, Container } from "react-bootstrap";
import whatsapp from "../assets/watsapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export const PanelHeader = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Text>
          <a href="tel:+529934366178">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            <strong className="">Llámanos al 9934366178</strong>
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <img
            src={whatsapp}
            alt="whatsapp"
            style={{ width: "17px", marginRight: "5px" }}
          />

          <a
            href="https://api.whatsapp.com/send?phone=+529934366178"
            target="_blank"
            rel="noreferrer"
          >
            Mándanos un Whatsapp
          </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};
