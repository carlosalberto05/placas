import React from "react";

import { Galeria } from "./main/Galeria";
import { Home } from "./main/Home";
import { Preguntas } from "./main/Preguntas";
import { Products } from "./main/Products";

export const Main = () => {
  return (
    <main>
      <Home />
      <Products />
      <Galeria />
      <Preguntas />
    </main>
  );
};
