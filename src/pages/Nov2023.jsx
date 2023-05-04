import React from "react";
import ShowAll from "../components/ShowAll";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate } from "react-router";
import CalenderShot from "../components/CalenderShot";

const Nov2023 = () => {
  const navigate = useNavigate();
  return (
    <div className='pb-20 text-center bg-no-repeat bg-cover bg-xl-home bg-home sm:px-20'>
      <div className='pt-[300px] text-center space-y-16'>
        <div>
          <LogoSafex />
        </div>
        <div className='flex items-center justify-between text-center'>
          <button onClick={() => navigate("/home")} className='flex-0'>
            LA
          </button>
          <MonthTitle title='November 2023' />
          <button onClick={() => navigate("/dec2023")} className='flex-0'>
            RA
          </button>
        </div>
        <div>
          <SootheSensesPara size='small' />
        </div>
      </div>
      <div className='flex justify-center pt-20'>
        <BirdCard size='big' />
      </div>
      <div className='flex justify-center'>
        <ReactAudioPlayer
          className='w-[800px] h-20'
          src='audio/audio.mp3'
          loop={true}
          autoPlay={true}
          controls={true}
        />
      </div>
      <div className='flex justify-center pt-20 pb-32'>
        <CalenderShot size='big' />
      </div>
      <ShowAll />
    </div>
  );
};

export default Nov2023;

/*
<div className='flex justify-center space-x-2 items-center sm:px-[50px] md:px-[100px]'>
        <div className=''>
          <BirdCard size='big' />
          
        </div>
      </div>
      */

/*
      <div className='h-screen px-2 bg-cyan-200'>
      <div className='flex flex-col xl:pt-[300px] items-center pt-20 space-y-12 text-center space-between'>
        <LogoSafex />
        <div className='flex justify-end'>
          <button onClick={() => navigate("/home")} className='flex-0'>
            LA
          </button>
          <div>
            <MonthTitle title='November 2023' />
            <SootheSensesPara size='small' />
          </div>
          <button onClick={() => navigate("/dec2023")} className='flex-0'>
            RA
          </button>
        </div>
      </div>
    </div>
    */
