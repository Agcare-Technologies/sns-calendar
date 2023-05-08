import React from "react";
import CalenderCard from "../components/CalenderCard";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import { months } from "../data/months";
import Footer from "../components/Footer";

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
        <div className='xl:pt-[256px] space-y-4 text-center '>
          <LogoSafex />
          <SootheSensesPara size='big' />
          <p className='text-white text-[30px] py-10 font-["Helvetica_Neue"] tracking-[3px] font-medium'>
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
