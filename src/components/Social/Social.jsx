import React from "react";
import style from "./Social.module.css";

const Social = (props) => {
  // debugger;
  return (
    <div className={style.social}>
      <div className={style.icons}>
          <a href="https://www.artstation.com/nianemis" target="_blank" rel="noopener noreferrer">
            <img src="./img/icons/artstation.svg" alt="f"></img>
          </a>
        <a href="https://vk.com/nianemis" target="_blank" rel="noopener noreferrer">
          <img src="./img/icons/vkontakte.svg" alt="f"></img>
          </a>
        <a href="https://www.facebook.com/nianemis" target="_blank" rel="noopener noreferrer">
          <img src="./img/icons/facebook.svg" alt="f"></img>
          </a>
        <a href="https://www.instagram.com/nianemis/" target="_blank" rel="noopener noreferrer">
          <img src="./img/icons/instagram.svg" alt="f"></img>
          </a>
        <a href="https://github.com/nikania" target="_blank" rel="noopener noreferrer">
          <img src="./img/icons/github.svg" alt="f" ></img>
          </a>
      </div>
      <div className={style.item}>
        <a href="mailto:nianemis@gmail.com" className={style.item}>
          email: nianemis@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Social;
