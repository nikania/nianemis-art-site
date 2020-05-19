import React, { useState, useEffect } from "react";
import style from "./Drawings.module.css";

const Drawings = (props) => {
  // debugger;

  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://192.168.0.128:5000/img/drawings/");
      res.json().then((res) => setDrawings(res));
    }

    fetchData();
  }, []);

  let allDrawings = drawings.map((d) => (
    <div className={style.itemwrapper}>
      <div className={style.item}>
        <img
          // className={style.imagestyle}
          src={"http://192.168.0.128:5000/img/drawings/" + d}
          alt="drawing"
        />
      </div>
    </div>
  ));
  //debugger;
  return <div className={style.wrapper}>{allDrawings}</div>;
};

export default Drawings;
