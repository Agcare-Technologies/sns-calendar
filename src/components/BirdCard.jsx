import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AudioPlayer from "./AudioPlayer";

const BirdCard = ({ birdImage, song, birdName, artist, birdImageXL }) => {
  return (
    <div className='w-full bg-[#f7f7f7] bg-opacity-60 max-w-[1416px] backdrop-filter'>
      <div>
        <LazyLoadImage
          effect='blur'
          className='z-50 bg-contain w-full opacity-100 sm:hidden bg-inherit'
          src={birdImage}
          alt=''
          loading='lazy'
        />
        <LazyLoadImage
          className='hidden sm:block max-h-[800px] xl:h-[600px] 2xl:h-[800px] z-50 bg-contain opacity-100 bg-inherit'
          src={birdImageXL}
          alt=''
          loading='lazy'
          effect='blur'
        />
      </div>
      <div className='pt-0 -mt-4 space-y-1'>
        <h3 className="text-[20px] sm:text-[40px] xl:text-[60px] 2xl:text-[82px] font-['Times_New_Roman']">
          {birdName}
        </h3>
        <p className="text-[9px] sm:text-[20px] lg:text-[30px] 2xl:text-[40px] font-['Helvetica_Neue']">
          {artist}
        </p>
      </div>
      <div className='px-2 pb-4'>
        <AudioPlayer song={song} />
      </div>
    </div>
  );
};

export default BirdCard;
