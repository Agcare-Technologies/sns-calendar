import React from "react";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AudioPlayer from "./AudioPlayer";

const BirdCard = ({ birdImage, song, birdName, size }) => {
  return (
    <div className='w-full bg-[#f7f7f7] bg-opacity-60  backdrop-filter  h-[340px]'>
      <div>
        <LazyLoadImage
          effect='blur'
          className='z-50 bg-contain opacity-100 bg-inherit'
          src={birdImage}
          alt=''
          loading='lazy'
        />
      </div>
      <div>
        <h3 className="text-[20px] font-['Times_New_Roman']">{birdName}</h3>
      </div>
      <div className='px-2'>
        <AudioPlayer song={song} />
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
