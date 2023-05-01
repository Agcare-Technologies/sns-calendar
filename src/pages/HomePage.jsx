import React from "react";
import CalenderCard from "../components/CalenderCard";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";

const HomePage = () => {
  return (
    <div className='px-10 sm:px-[50px] md:px-[100px] bg-[url("/mobile/background.png")] bg-cover'>
      <div className='pt-20 space-y-5 text-center '>
        <LogoSafex />
        <SootheSensesPara />
      </div>
      <div className='flex flex-col items-center justify-center space-y-5 '>
        <CalenderCard
          month='November'
          path='/nov2023'
          sm='/mobile/Group 413-nov.jpg'
          xl='/desktop/Group 387.png'
        />
        <CalenderCard
          month='December'
          path='/dec2023'
          sm='/mobile/Group 412-dec.jpg'
        />
        <CalenderCard
          month='January'
          path='/jan'
          sm='/mobile/Group 411-jan.jpg'
        />
        <CalenderCard
          month='Febuary'
          path='/feb'
          sm='/mobile/Group 410-feb.jpg'
        />
        <CalenderCard
          month='March'
          path='/mar'
          sm='/mobile/Group 409-mar.jpg'
        />
        <CalenderCard
          month='April'
          path='/apr'
          sm='/mobile/Group 408-apr.jpg'
        />
        <CalenderCard month='May' path='/may' sm='/mobile/Group 407-may.jpg' />

        <CalenderCard
          month='June'
          path='/jun'
          sm='/mobile/Group 406-june.jpg'
        />
        <CalenderCard
          month='July'
          path='/jul'
          sm='/mobile/Group 405-july.jpg'
        />
        <CalenderCard
          month='August'
          path='/aug'
          sm='/mobile/Group 404-aug.jpg'
        />
        <CalenderCard
          month='September'
          path='/sep'
          sm='/mobile/Group 403-sep.jpg'
        />
        <CalenderCard
          month='October'
          path='/oct'
          sm='/mobile/Group 402-oct.jpg'
        />
        <CalenderCard
          month='November'
          path='/nov'
          sm='/mobile/Group 401-nov.jpg'
        />
        <CalenderCard
          month='December'
          path='/dec'
          sm='/mobile/Group 400-dec.jpg'
        />
      </div>
    </div>
  );
};

export default HomePage;
