import React from "react";
import style from "./Social.module.css";

const Social = (props) => {
    // debugger;
  return (<div className={style.social}>
      <div className={style.icons}>
      <div className={style.icon}><img src="./img/icons/artstation.svg" alt="f"></img></div>
      <div className={style.icon}><img src="./img/icons/vkontakte.svg" alt="f"></img></div>
      <div className={style.icon}><img src="./img/icons/facebook.svg" alt="f"></img></div>
      <div className={style.icon}><img src="./img/icons/instagram.svg" alt="f"></img></div>
      <div className={style.icon}><img src="./img/icons/github.svg" alt="f"></img></div>
      </div>
      <div className={style.item}>email: nianemis@gmail.com</div>
      </div>);
};

export default Social;
