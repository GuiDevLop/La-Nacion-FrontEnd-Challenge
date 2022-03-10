import React from "react";
import logo from "../../img/logo.svg";
import searchIcon from "./../../img/search.svg";
import menuIcon from "./../../img/menu.svg";
import Image from "../footer/image";
import Button from "../button/button";
import "./navbar.scss";

function NavBar(props) {

  return (
    <div data-testid="navbar">
      <div className="row">
        <div className="left">
          <Button classname="sections" testid="sections" logo={menuIcon} text="SECCIONES"></Button>
          <Button classname="search" testid="search" logo={searchIcon} text="BUSCAR"></Button>
        </div>
        <div className="logo" data-testid="logo">
          <Image img={logo} name="logo.svg" link="/" />
        </div>
        <div className="right">
          <div className="wrap">
            <Button classname="suscribe" testid="suscribe" text="SUSCRIBITE"></Button>
          </div>
          <Button classname="searchicon" img="icon" logo={searchIcon}></Button>
          <Button classname="signin" testid="signin" text="INGRESAR"></Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
