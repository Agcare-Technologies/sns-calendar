import React from "react";
import ShowAll from "../components/ShowAll";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate } from "react-router";

const Nov2023 = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen px-2 bg-cyan-200'>
      <div className='flex flex-col items-center pt-20 space-y-5 text-center space-between'>
        <LogoSafex />
        <MonthTitle />
        <SootheSensesPara />
      </div>
      <div className='flex justify-end space-x-2 items-center sm:px-[50px] md:px-[100px]'>
        <button onClick={() => navigate("/home")} className='flex-0'>
          LA
        </button>
        <div className='flex-1'>
          <BirdCard />
          <ReactAudioPlayer
            src='audio/audio.mp3'
            loop={true}
            autoPlay={true}
            controls={true}
          />
        </div>
        <button onClick={() => navigate("/dec2023")} className='flex-0'>
          RA
        </button>
      </div>
    </div>
  );
};

export default Nov2023;
