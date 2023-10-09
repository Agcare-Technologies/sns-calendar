import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CalenderShot = ({ dates, xlDates }) => {
  return (
    <div className='w-full '>
      <LazyLoadImage className='sm:hidden' effect='blur' src={dates} alt='' />
      <LazyLoadImage
        className='hidden sm:block'
        effect='blur'
        src={xlDates}
        alt=''
      />
    </div>
  );
};

export default CalenderShot;
