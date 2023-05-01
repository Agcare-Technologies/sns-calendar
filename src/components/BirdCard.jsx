import React from "react";

const BirdCard = ({ Image }) => {
  return (
    <div className='w-full bg-gray-50 h-80'>
      <p className='text-4xl'>BIRDS</p>
      <img src={Image} alt='' />
      <div>
        <audio src=''></audio>
      </div>
    </div>
  );
};

export default BirdCard;
