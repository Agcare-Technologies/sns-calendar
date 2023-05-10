import React from "react";
import cn from "classnames";

const BirdCard = ({ birdImage, birdAudio, monthsImage, size }) => {
  return (
    <div className='w-full bg-[#f7f7f7] bg-opacity-60  backdrop-filter  h-[225px]'>
      <div>
        <img
          className='z-50 bg-contain opacity-100 bg-inherit'
          src={birdImage}
          alt=''
        />
      </div>
    </div>
  );
};

export default BirdCard;

/*
const sizeclasses = cn("bg-gray-100", {
    "2xl:w-[1416px] 2xl:h-[1192px]": size === "big",
    "text-[30px] uppercase": size === "small",
  });
  */
