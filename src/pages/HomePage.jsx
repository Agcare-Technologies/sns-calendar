import React from "react";
import CalenderCard from "../components/CalenderCard";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/mobile-assests/background.png")',
        backgroundSize: "cover",
      }}
      className='px-10 sm:px-[50px] md:px-[100px]'
    >
      <div className='pt-20 space-y-5 text-center '>
        <LogoSafex />
        <SootheSensesPara />
      </div>
      <div className='flex flex-col items-center justify-center space-y-5 '>
        <CalenderCard
          month='November'
          path='/nov2023'
          img='/mobile/Group 413-nov.jpg'
        />
        <CalenderCard
          month='December'
          path='/dec2023'
          img='/mobile/Group 412-dec.jpg'
        />
        <CalenderCard
          month='January'
          path='/jan'
          img='/mobile/Group 411-jan.jpg'
        />
        <CalenderCard
          month='Febuary'
          path='/feb'
          img='/mobile/Group 410-feb.jpg'
        />
        <CalenderCard
          month='March'
          path='/mar'
          img='/mobile/Group 409-mar.jpg'
        />
        <CalenderCard
          month='April'
          path='/apr'
          img='/mobile/Group 408-apr.jpg'
        />
        <CalenderCard month='May' path='/may' img='/mobile/Group 407-may.jpg' />

        <CalenderCard
          month='June'
          path='/jun'
          img='/mobile/Group 406-june.jpg'
        />
        <CalenderCard
          month='July'
          path='/jul'
          img='/mobile/Group 405-july.jpg'
        />
        <CalenderCard
          month='August'
          path='/aug'
          img='/mobile/Group 404-aug.jpg'
        />
        <CalenderCard
          month='September'
          path='/sep'
          img='/mobile/Group 403-sep.jpg'
        />
        <CalenderCard
          month='October'
          path='/oct'
          img='/mobile/Group 402-oct.jpg'
        />
        <CalenderCard
          month='November'
          path='/nov'
          img='/mobile/Group 401-nov.jpg'
        />
        <CalenderCard
          month='December'
          path='/dec'
          img='/mobile/Group 400-dec.jpg'
        />
      </div>
    </div>
  );
};

export default HomePage;
