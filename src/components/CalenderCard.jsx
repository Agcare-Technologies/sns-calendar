import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CalenderCard = ({ month }) => {
  //console.log(sm, xl);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(month.path)}
      className='flex items-center justify-center 2xl:w-[1042px]'
    >
      <LazyLoadImage
        className='w-full sm:h-40 sm:hidden'
        src={month.sm}
        alt=''
        loading='lazy'
        effect='blur'
      />
      <LazyLoadImage
        className='hidden w-full sm:block'
        src={month.xl}
        alt=''
        loading='lazy'
        effect='blur'
      />
    </div>
  );
};

export default CalenderCard;
