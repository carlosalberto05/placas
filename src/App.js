import { PanelHeader } from "./components/PanelHeader";
import { NavBarHeader } from "./components/NavBarHeader";
import { Home } from "./components/Home";
import { Galeria } from "./components/Galeria";
import { Products } from "./components/Products";
import { Contacto } from "./components/Contacto";

function App() {
  return (
    <>
      <PanelHeader />
      <NavBarHeader />
      <Home />
      <Galeria />
      <Products />
      <Contacto />
    </>
  );
}

export default App;
