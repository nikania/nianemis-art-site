import React, { useState } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Social from "../Social/Social";

const NavBar = (props) => {
  // debugger;
  const [isMenuPhone, setIsMenuPhone] = useState(true);

  const toggleMenu = () => {
    setIsMenuPhone(!isMenuPhone);
    console.log("isMenuPhone after set:"+isMenuPhone);
    if(isMenuPhone) {
      let a = document.getElementsByClassName(style.item);
      // debugger;
      for (let i=0; i< a.length; i++){
        a.item(i).style.display = "block";
      }
    }
    else {
      let a = document.getElementsByClassName(style.item);
      // debugger;
      for (let i=0; i< a.length; i++){
        a.item(i).style.display = "none";
      }
    }
    console.log("dysplay menu:"+isMenuPhone);
  }

  console.log("isMenuPhone:"+isMenuPhone);

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src="./img/logo_red.svg" alt="logo"/>
      </div>
      <div className={style.burger}>
        <img src="./img/burger.svg" alt="menu" onClick={toggleMenu}/>
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
      <div className={style.item}>
      <Social />
      </div>
    </div>
  );
};

export default NavBar;
