import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Social from "../Social/Social";

const NavBar = (props) => {
  // debugger;
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src="./img/logo_red.svg" alt="logo" />
      </div>
      <div className={style.burger}>
        <img src="./img/burger.svg" alt="menu" />
      </div>
      <div className={style.item}>
        <NavLink to="/about" activeClassName={style.active}>
          About
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/drawings" activeClassName={style.active}>
          Drawings
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/digital" activeClassName={style.active}>
          digital
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/sketchbook" activeClassName={style.active}>
          sketchbook
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Other" activeClassName={style.active}>
          experiment
        </NavLink>
      </div>
      
      <Social />
    </div>
  );
};

export default NavBar;
