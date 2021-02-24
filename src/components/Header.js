import React, { useState, useEffect } from "react";
import { NavBarHeader } from "./header/NavBarHeader";
import { PanelHeader } from "./header/PanelHeader";

export const Header = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const isScroll = window.scrollY;

    if (isScroll >= 1) {
      setVisible(false); // mientras haga scroll se oculta el panel
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <header className="sticky-top">
      {visible && <PanelHeader />}
      <NavBarHeader />
    </header>
  );
};
