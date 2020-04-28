import React from "react";
import style from "./Logo.module.css";

const Logo = (props) => {
    // debugger;
  return (
    <div>
      <img src="./img/logo.svg" className={style.logo} alt="logo" />
    </div>
  );
};

export default Logo;
