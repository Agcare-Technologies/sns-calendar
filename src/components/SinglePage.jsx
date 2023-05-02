import React from "react";
import ShowAll from "../components/ShowAll";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";
import { useNavigate, useNavigation } from "react-router-dom";

const SinglePage = ({ title, Image }) => {
  const navigation = useNavigate();
  return (
    <div className='h-screen px-2 bg-cyan-200'>
      <div className='flex flex-col items-center pt-20 space-y-5 text-center space-between'>
        <LogoSafex />
        <MonthTitle title={title} />
        <SootheSensesPara />
      </div>
      <div className='flex justify-end space-x-2 items-center sm:px-[50px] md:px-[100px]'>
        <p onClick={() => navigation(-1)} className='flex-0'>
          LA
        </p>
        <div className='flex-1'>
          <BirdCard />
        </div>
        <p onClick={() => navigation(+1)} className='flex-0'>
          RA
        </p>
      </div>
    </div>
  );
};

export default SinglePage;
