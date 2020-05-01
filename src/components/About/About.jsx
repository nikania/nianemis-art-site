import React from "react";
import style from "./About.module.css";
import Feedback from "./Feedback/Feedback";

const About = (props) => {
  return (
    <div className={style.wrapper}>
      <img className={style.photo} src="./img/art/my photo/IMG_0006.jpg" alt="me" />
      <p className={style.about}>Hiвлполдыопл ыджаово dlrgj dfjgdljg dljgfdldflk jgdklgj
      dfjg dljgdljg dl;f jgdklgjdf gdkg
       dfkgdddddddddddddddddddddddddddddddddd</p>
      <Feedback />
      <p className={style.contact}>You can or cannot contact me: @com</p>
    </div>
  );
};

export default About;
