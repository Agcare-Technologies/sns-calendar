import React from "react";
import cn from "classnames";

const BirdCard = ({ birdImage, birdAudio, monthsImage, size }) => {
  return (
    <div className='w-full bg-[#F7F7F7] h-[325px]'>
      <p className='text-4xl'>BIRDS CARD</p>
      <img src={birdImage} alt='' />
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
