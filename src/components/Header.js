import React from "react";
import { NavBarHeader } from "./header/NavBarHeader";
import { PanelHeader } from "./header/PanelHeader";

export const Header = () => {
  return (
    <header className="sticky-top">
      <PanelHeader />
      <NavBarHeader />
    </header>
  );
};
