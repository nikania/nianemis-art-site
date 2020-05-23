import React, { useState, useEffect } from "react";
import style from "./Drawings.module.css";
import Slider from "../Slider/Slider";

const Drawings = (props) => {
  // debugger;

  let slider = null;
  const [drawings, setDrawings] = useState([]);
  const [showSlider, setShowSlider] = useState(false);
  const [imgIndex, setImageIndex] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://192.168.0.128:5000/img/drawings/");
      res.json().then((res) => setDrawings(res));
    }

    fetchData();
  }, []);

  const createSlider = (index) => {
    setShowSlider(true);
    setImageIndex(index);
  };

  let allDrawings = drawings.map((item, index) => (
    <div className={style.itemwrapper}>
      <div className={style.item} onClick={() => createSlider(index)}>
        <img
          // className={style.imagestyle}
          src={item + "/384"}
          alt="drawing"
        />
      </div>
    </div>
  ));
  // debugger;
  // if (isSliderVisible) {
    slider = (
      <Slider
        data={drawings}
        show={showSlider}
        setShow={setShowSlider}
        imgIndex={imgIndex}
      />
    );
  // }


  return (
    <div className={style.wrapper}>
      {allDrawings}
      {slider}
    </div>
  );
};

export default Drawings;
