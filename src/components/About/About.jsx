import React from "react";
import style from "./About.module.css";
import Feedback from "./Feedback/Feedback";

const About = (props) => {
  return (
    <div className={style.wrapper}>
      {/* <img className={style.photo} src="./img/art/my photo/IMG_0006.jpg" alt="me" /> */}
      <div  className={style.photo}>
        <img
         
        //  src="http://192.168.0.128:5000/img/about/IMG_0006.jpg"
         src="http://192.168.0.128:5000/img/about/IMG_0063a.jpg"
          alt="me"
        ></img>
      </div>

      <p className={style.about}>
        Hiвлполдыопл ыджаово dlrgj dfjgdljg dljgfdldflk jgdklgj dfjg dljgdljg
        dl;f jgdklgjdf gdkg dfkgdddddddddddddddddddddddddddddddddd
      </p>
      <Feedback />
      <p className={style.contact}>You can or cannot contact me: @com</p>
    </div>
  );
};

export default About;
