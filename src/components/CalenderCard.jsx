import React from "react";
import { useNavigate } from "react-router-dom";

const CalenderCard = ({ month }) => {
  //console.log(sm, xl);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(month.path)}
      className='flex items-center justify-center w-full h-24 max-w-2xl bg-cover sm:h-40'
    >
      <img
        className='w-full h-24 sm:h-40 sm:hidden'
        src={month.sm}
        alt=''
        loading='lazy'
        effect='blur'
      />
      <img
        className='hidden w-full h-24 sm:h-40 sm:block'
        src={month.xl}
        alt=''
        loading='lazy'
        effect='blur'
      />
    </div>
  );
};

export default CalenderCard;
