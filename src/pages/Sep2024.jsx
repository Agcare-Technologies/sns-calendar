import React from "react";
import ShowAll from "../components/ShowAll";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate } from "react-router";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CalenderShot from "../components/CalenderShot";

const Sep2024 = () => {
  const navigate = useNavigate();
  return (
    <div className='pb-20 text-center bg-no-repeat bg-cover bg-xl-home sm:px-20'>
      <div className='xl:pt-[300px] pt-[48.88px] text-center'>
        <img className='w-[96px] mx-auto' src='mobile/safex_white.png' alt='' />

        <MonthTitle title='September 2024' />
        <p className='text-[12px] uppercase tracking-[1.2px] text-white font-["Helvetica_Neue_Medium"]'>
          to soothe your senses
        </p>
      </div>
      <div className='flex justify-center py-6 space-x-2'>
        <button onClick={() => navigate("/aug")} className='flex-0'>
          <AiOutlineLeft color='#FDFDFD' size={30} className='font-bold' />
        </button>
        <BirdCard birdImage={"/birds/sep.png"} />
        <button onClick={() => navigate("/oct")} className='flex-0'>
          <AiOutlineRight color='#FDFDFD' size={30} />
        </button>
      </div>

      <div className='flex justify-center pb-20 px-[30px] space-x-2'>
        <span></span>
        <CalenderShot />
        <span></span>
      </div>
      <ShowAll />
    </div>
  );
};

export default Sep2024;
