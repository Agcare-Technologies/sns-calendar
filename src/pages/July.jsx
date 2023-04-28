import React from "react";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";

const July = () => {
  return (
    <div className='h-screen bg-cyan-200 px-2'>
      <div className='flex flex-col items-center space-between pt-20 space-y-5 text-center'>
        <LogoSafex />
        <MonthTitle title='November 2023' />
        <SootheSensesPara />
      </div>
      <div className='flex justify-end space-x-2 items-center sm:px-[50px] md:px-[100px]'>
        <p className='flex-0'>LA</p>
        <div className='flex-1'>
          <BirdCard />
        </div>
        <p className='flex-0'>RA</p>
      </div>
    </div>
  );
};

export default July;
