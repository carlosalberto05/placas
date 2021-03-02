import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>Placas 3d</Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
