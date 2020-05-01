import React from "react";
import style from "./Feedback.module.css";

const Feedback = (props) => {
  return (
    <div className={style.feedback}>
      <div>Y can write me some brightnings</div>
      <textarea>your emall@some.com please</textarea>
      <textarea>Write me something ... something</textarea>
      <button>send</button>
    </div>
  );
};

export default Feedback;
