import React from "react";
import CalenderCard from "../components/CalenderCard";

import SootheSensesPara from "../components/SootheSensesPara";
import { months } from "../data/months";
import Footer from "../components/Footer";
import LogoSafex from "../components/LogoSafex";

const HomePage = () => {
  return (
    <div>
      <div className='px-10 sm:px-[50px] md:px-[100px] bg-cover bg-xs-home sm:bg-xl-home'>
        <div className='xl:pt-[256px] pt-16 text-center space-y-1'>
          <img
            className='w-[110px] mx-auto'
            src='/mobile/safex_white.png'
            alt=''
          />
          <SootheSensesPara />
          <p className='text-white text-[11.2px] uppercase font-medium tracking-[1.12px] font-["Helvetica_Neue_Medium"] '>
            CALENDAR NOVEMBER 2023 - DECEMBER 2024
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-5 '>
          {months.map((month) => (
            <CalenderCard month={month} key={month.id} />
          ))}
        </div>
        <div className='py-40'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
