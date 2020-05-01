import React from "react";
import style from "./Drawings.module.css";

const Drawings = (props) => {
  // debugger;

  // let allDrawings = props.map((d) => <img src={d} alt="" />);

  return (
    <div className={style.wrapper}>
      {/* {allDrawings} */}
      <div className={style.item}>
        <img src="./img/art/colored pencils/img008.jpg" alt="" />
      </div>
      <div className={style.item}>
        <img src="./img/art/colored pencils/img008.jpg" alt="" />
      </div>
      <div className={style.item}>
        <img src="./img/art/colored pencils/img008.jpg" alt="" />
      </div>
      <div className={style.item}>
        <img src="./img/art/colored pencils/img008.jpg" alt="" />
      </div>
      <div className={style.item}>
        <img src="./img/art/colored pencils/img008.jpg" alt="" />
      </div>
      <div className={style.item}>
        <img src="https://localhost:5001/api/art/drawaing/undead5.jpg" alt="some" />
      </div>
    </div>
  );
};

export default Drawings;
