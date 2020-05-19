import React from "react";
import style from "./Feedback.module.css";

const Feedback = (props) => {
  return (
    <div className={style.feedback}>
      <div>Y can write me some brightnings</div>
      <div>
        <textarea className={style.area1}>your emall@some.com please</textarea>
      </div>
      <div>
        <textarea className={style.area2}>Write me something ... something</textarea>
      </div>
      <button>send</button>
    </div>
  );
};

export default Feedback;
