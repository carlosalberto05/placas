import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-scroll";

import logo from "../assets/logo.png";

export const NavBarHeader = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand>
          <Link
            activeClassName="active"
            className="cursor"
            exact
            spy={true}
            to="home"
            smooth={true}
            duration={1000}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "5rem", height: "auto" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClassName="active"
              className="nav-item nav-link text-dark font-weight-bold h5 mr-5 cursor"
              exact
              spy={true}
              to="galeria"
              smooth={true}
              duration={1000}
            >
              Galería
            </Link>

            <Link
              activeClassName="active"
              className="nav-item nav-link text-dark font-weight-bold h5 mr-5 cursor"
              exact
              spy={true}
              to="products"
              smooth={true}
              duration={1000}
            >
              Productos
            </Link>

            <Link
              activeClassName="active"
              className="nav-item nav-link text-dark font-weight-bold h5 mr-5 cursor"
              exact
              spy={true}
              to="contacto"
              smooth={true}
              duration={1000}
            >
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
