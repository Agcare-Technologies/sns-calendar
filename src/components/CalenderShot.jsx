import React from "react";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CalenderShot = ({ dates }) => {
  return (
    <div className='w-full h-[325px] '>
      <LazyLoadImage effect='blur' src={dates} alt='' />
    </div>
  );
};

export default CalenderShot;
