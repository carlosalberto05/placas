import React, { useState, useEffect } from "react";
import { NavBarHeader } from "./header/NavBarHeader";
import { PanelHeader } from "./header/PanelHeader";

export const Header = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll);

    const isScroll = window.scrollY;

    if (isScroll >= 162) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    // <header className="sticky-top">
    //   {visible && <PanelHeader />}
    //   <NavBarHeader />
    // </header>
    <header className="sticky-top">
      {visible && <PanelHeader />}
      <NavBarHeader />
    </header>
  );
};
