import React from "react";
import { Contacto } from "./main/Contacto";
import { Galeria } from "./main/Galeria";
import { Home } from "./main/Home";
import { Products } from "./main/Products";

export const Main = () => {
  return (
    <main>
      <Home />
      <Galeria />
      <Products />
      <Contacto />
    </main>
  );
};
