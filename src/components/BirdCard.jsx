import React from "react";

const BirdCard = ({ birdImage, birdAudio, monthsImage }) => {
  return (
    <div className='w-full bg-pink-200 h-80'>
      <p className='text-4xl'>BIRDS CARD</p>
      <img src={birdImage} alt='' />
      <div className='h-20 bg-pink-20'></div>
      <div>
        <img src={monthsImage} alt='' />
      </div>
    </div>
  );
};

export default BirdCard;
