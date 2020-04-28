import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Logo from '../Logo/Logo';

const NavBar = (props) => {
    // debugger;
  return (
    <div>
        <Logo />
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
            <NavLink to="/cg" activeClassName={style.active}>
            Computer Graphics
            </NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="/Other" activeClassName={style.active}>
            Other
            </NavLink>
        </div>
    </div>
  );
};

export default NavBar;
