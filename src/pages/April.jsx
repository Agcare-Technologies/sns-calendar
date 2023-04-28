import React from "react";
import ShowAll from "../components/ShowAll";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";

const April = () => {
  return (
    <div className='h-screen bg-cyan-200 px-10'>
      <div className='flex flex-col items-center justify-center pt-20 space-y-5 text-center'>
        <LogoSafex />
        <MonthTitle title='November 2023' />
        <SootheSensesPara />
      </div>
      <div className='px-4 flex justify-end items-center space-x-6 sm:px-[50px] md:px-[100px]'>
        <p>LA</p>
        <BirdCard />
        <p>RA</p>
      </div>
    </div>
  );
};

export default April;
