import React from "react";
import { useNavigate } from "react-router-dom";

const CalenderCard = ({ path, month, img }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(path)}
      className='flex items-center justify-center w-full h-24 max-w-2xl sm:h-40'
    >
      <img
        className='w-full h-24 max-w-2xl bg-cover sm:h-40'
        src={img}
        alt=''
      />
    </div>
  );
};

export default CalenderCard;
