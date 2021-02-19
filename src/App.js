import { Galeria } from "./components/Galeria";
import { Products } from "./components/Products";
import { Contacto } from "./components/Contacto";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Galeria />
      <Products />
      <Contacto />
    </>
  );
}

export default App;
