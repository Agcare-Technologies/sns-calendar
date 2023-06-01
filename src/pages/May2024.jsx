import React from "react";
import ShowAll from "../components/ShowAll";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";
import { useNavigate } from "react-router";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CalenderShot from "../components/CalenderShot";
import audio from "/audio/may.mp3";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";

const May2024 = () => {
  const navigate = useNavigate();
  return (
    <div className='pb-6 text-center bg-no-repeat bg-cover bg-xxs-bg sm:px-20'>
      <div className='xl:pt-[300px] pt-[48.88px] text-center'>
        <LogoSafex size='small' />

        <MonthTitle title='May 2024' />
        <SootheSensesPara use='month' />
      </div>
      <div className='flex justify-center py-6 space-x-2'>
        <button onClick={() => navigate("/apr")} className='flex-0'>
          <AiOutlineLeft color='#FDFDFD' size={30} className='font-bold' />
        </button>
        <BirdCard
          birdImage={"/mobile/mobile-birds/may.png"}
          birdName='Indian Cuckoo'
          artist='Recorded by David Edwards'
          song={audio}
        />
        <button onClick={() => navigate("/jun")} className='flex-0'>
          <AiOutlineRight color='#FDFDFD' size={30} />
        </button>
      </div>

      <div className='flex justify-center pb-6 px-[30px] space-x-2'>
        <span></span>
        <CalenderShot dates='dates/may.png' />
        <span></span>
      </div>
      <ShowAll />
    </div>
  );
};

export default May2024;
