import React from "react";
import CalenderCard from "../components/CalenderCard";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";

const HomePage = () => {
  return (
    <div className='bg-green-100 px-10 sm:px-[50px] md:px-[100px]'>
      <div className='pt-20 space-y-5 text-center '>
        <LogoSafex />
        <SootheSensesPara />
      </div>
      <div className='flex flex-col items-center justify-center space-y-5 '>
        <CalenderCard month='November' path='/nov' />
        <CalenderCard month='December' path='/dec' />
        <CalenderCard month='January' path='/jan' />
        <CalenderCard month='Febuary' path='/feb' />
        <CalenderCard month='March' path='/mar' />
        <CalenderCard month='April' path='/apr' />
        <CalenderCard month='May' path='/may' />
        <CalenderCard month='June' path='/jun' />
        <CalenderCard month='July' path='/jul' />
        <CalenderCard month='August' path='/aug' />
        <CalenderCard month='September' path='/sep' />
        <CalenderCard month='October' path='/oct' />
        <CalenderCard month='November' path='/nov' />
        <CalenderCard month='December' path='/dec' />
      </div>
    </div>
  );
};

export default HomePage;
