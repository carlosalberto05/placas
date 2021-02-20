import React from "react";
import { NavBarHeader } from "./header/NavBarHeader";
import { PanelHeader } from "./header/PanelHeader";
// import { animateScroll as scroll } from "react-scroll";

export const Header = () => {
  return (
    <header className="sticky-top">
      <PanelHeader />
      <NavBarHeader />
    </header>
  );
};
