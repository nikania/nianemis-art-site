import React, { useState, useEffect } from "react";
import style from "./Slider.module.css";

const Slider = (props) => {
  let slider = null;

  const [currentIndex, setCurrentIndex] = useState(props.imgIndex);

  useEffect(() => {
    setCurrentIndex(props.imgIndex);
  }, [props.imgIndex]);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => window.removeEventListener('keydown', keyDownHandler);
  })

 
  let currentUrl = props.data[currentIndex];

  const clickPrev = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(props.data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    currentUrl = props.data[currentIndex];
    console.log(currentUrl);
  };

  const clickNext = () => {
    if (currentIndex >= props.data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    currentUrl = props.data[currentIndex];
    // console.log(currentUrl);
  };

  const clickExit = () => {
    props.setShow(false);
    // setShowSlider(!showSlider);
  };
  //  debugger;

  function keyDownHandler(e) {
    // debugger;
    // console.log(e.key);
    if(e.key === 'ArrowLeft') clickPrev();
    if(e.key === 'ArrowRight') clickNext();
    if(e.key === 'Escape') clickExit();
  }

  let currentImg = <img src={currentUrl} alt="gg"></img>;

  console.log("Slider is");
  console.log(props.show);
  console.log(props.imgIndex);
  console.log(currentIndex);

  if (props.show) {
    slider = (
      <div className={style.wrapper}>
        <button className={style.previous} onClick={clickPrev} >
          PREV 
        </button>
        <div className={style.img_wrapper}>{currentImg}</div>
        <div className={style.exit_next_wrapper}>
          <button className={style.exit} onClick={clickExit}>
            <img src="" alt="EXIT" />
          </button>
          <button className={style.next} onClick={clickNext}>
            NEXT 
          </button>
        </div>
      </div>
    );
  }

  return <div>{slider}</div>;
};

export default Slider;
