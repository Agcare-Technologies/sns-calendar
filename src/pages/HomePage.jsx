import React from "react";
import CalenderCard from "../components/CalenderCard";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";

const HomePage = () => {
  const css = `@media (max-width: 650px) {
    .backimage {
        background-image: url("/mobile/background.png")
    }
}
@media (min-width: 750px) {
    .backimage {
        background-image: url("/desktop/bg-desktop.jpg");
    }
}`;

  return (
    <div>
      <style scoped>{css}</style>
      <div className='px-10 sm:px-[50px] md:px-[100px] bg-cover backimage'>
        <div className='pt-20 space-y-5 text-center '>
          <LogoSafex />
          <SootheSensesPara />
        </div>
        <div className='flex flex-col items-center justify-center space-y-5 '>
          <CalenderCard
            month='November'
            path='/nov2023'
            sm='/mobile/Group 413-nov.jpg'
            xl='/desktop/nov2023.jpg'
          />
          <CalenderCard
            month='December'
            path='/dec2023'
            sm='/mobile/Group 412-dec.jpg'
            xl='/desktop/dec2023.jpg'
          />
          <CalenderCard
            month='January'
            path='/jan'
            sm='/mobile/Group 411-jan.jpg'
            xl='/desktop/jan2024.jpg'
          />
          <CalenderCard
            month='Febuary'
            path='/feb'
            sm='/mobile/Group 410-feb.jpg'
            xl='/desktop/feb2024.jpg'
          />
          <CalenderCard
            month='March'
            path='/mar'
            sm='/mobile/Group 409-mar.jpg'
            xl='/desktop/mar2024.jpg'
          />
          <CalenderCard
            month='April'
            path='/apr'
            sm='/mobile/Group 408-apr.jpg'
            xl='/desktop/april2024.jpg'
          />
          <CalenderCard
            month='May'
            path='/may'
            sm='/mobile/Group 407-may.jpg'
            xl='/desktop/may2024.jpg'
          />

          <CalenderCard
            month='June'
            path='/jun'
            sm='/mobile/Group 406-june.jpg'
            xl='/desktop/june.jpg'
          />
          <CalenderCard
            month='July'
            path='/jul'
            sm='/mobile/Group 405-july.jpg'
            xl='/desktop/july2024.jpg'
          />
          <CalenderCard
            month='August'
            path='/aug'
            sm='/mobile/Group 404-aug.jpg'
            xl='/desktop/august2024.jpg'
          />
          <CalenderCard
            month='September'
            path='/sep'
            sm='/mobile/Group 403-sep.jpg'
            xl='/desktop/sep2024.jpg'
          />
          <CalenderCard
            month='October'
            path='/oct'
            sm='/mobile/Group 402-oct.jpg'
            xl='/desktop/oct2024.jpg'
          />
          <CalenderCard
            month='November'
            path='/nov'
            sm='/mobile/Group 401-nov.jpg'
            xl='/desktop/nov2024.jpg'
          />
          <CalenderCard
            month='December'
            path='/dec'
            sm='/mobile/Group 400-dec.jpg'
            xl='/desktop/dec2024.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
