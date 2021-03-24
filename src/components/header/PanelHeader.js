import React from "react";
import { Navbar, Container } from "react-bootstrap";
// import whatsapp from "../../assets/watsapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const PanelHeader = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Text>
          {/* <a href="tel:+529934366178">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            <strong className="">Llámanos al 9934366178</strong>
          </a> */}

          <a
            href="https://www.facebook.com/Litofan%C3%ADas-3D-107902834449557"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none "
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            <strong>Visitanos en Facebook</strong>
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a
            href="https://m.me/litofaniasyplacas3D"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} className="mr-2" />
            Envíanos un mensaje a Facebook
          </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};
