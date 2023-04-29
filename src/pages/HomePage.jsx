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
        <CalenderCard
          month='November'
          path='/nov2023'
          img='/mobile-assests/Group 413.png'
        />
        <CalenderCard
          month='December'
          path='/dec2023'
          img='/mobile-assests/Group 412.png'
        />
        <CalenderCard
          month='January'
          path='/jan'
          img='/mobile-assests/Group 411.png'
        />
        <CalenderCard
          month='Febuary'
          path='/feb'
          img='/mobile-assests/Group 410.png'
        />
        <CalenderCard
          month='March'
          path='/mar'
          img='/mobile-assests/Group 409.png'
        />
        <CalenderCard
          month='April'
          path='/apr'
          img='/mobile-assests/Group 408.png'
        />
        <CalenderCard
          month='May'
          path='/may'
          img='/mobile-assests/Group 407.png'
        />
        <CalenderCard
          month='June'
          path='/jun'
          img='/mobile-assests/Group 406.png'
        />
        <CalenderCard
          month='July'
          path='/jul'
          img='/mobile-assests/Group 405.png'
        />
        <CalenderCard
          month='August'
          path='/aug'
          img='/mobile-assests/Group 404.png'
        />
        <CalenderCard
          month='September'
          path='/sep'
          img='/mobile-assests/Group 403.png'
        />
        <CalenderCard
          month='October'
          path='/oct'
          img='/mobile-assests/Group 402.png'
        />
        <CalenderCard
          month='November'
          path='/nov'
          img='/mobile-assests/Group 401.png'
        />
        <CalenderCard
          month='December'
          path='/dec'
          img='/mobile-assests/Group 400.png'
        />
      </div>
    </div>
  );
};

export default HomePage;
