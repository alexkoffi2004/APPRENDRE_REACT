import React from "react";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import "./Header.css";
// import {image} from "../../assets/image.png";


const Header = (props) => {
  // const NavItems = {
  //   Menu_1: "Presentation",
  //   Menu_2: "Projets",
  //   Menu_3: "contacts",
  // };

  return (
    <header>
      <section className="navbar">
        <Logo />
        <Navigation props={props.navItem} />
      </section>
    </header>
  );
}

export default Header;