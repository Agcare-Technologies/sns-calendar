import React from "react";
import LogoSafex from "./LogoSafex";
import { ImFacebook } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className='flex items-center content-center justify-between py-4 place-items-center justify-items-center'>
        <div>
          <LogoSafex />
        </div>
        <div>
          <div className='flex space-x-6'>
            <a href=''>
              <ImFacebook size={50} className='p-2 m-1 bg-white rounded-xl' />
            </a>
            <a href=''>
              <RiLinkedinFill
                size={50}
                className='p-2 m-1 bg-white rounded-xl'
              />
            </a>
            <a href=''>
              <FaYoutube size={50} className='p-2 m-1 bg-white rounded-xl' />
            </a>
          </div>
        </div>
      </div>
      <div className='text-[25px] flex justify-between text-white font-["TIMES_NEW_ROMAN"] space-y-2'>
        <p>VISIT OUR WEBSITE</p>
        <p>FOLLOW US AT</p>
      </div>
    </div>
  );
};

export default Footer;

/*
<div className='flex justify-between'>
        <div className=''>
          <LogoSafex />
          <p className='text-[25px] text-white font-["TIMES_NEW_ROMAN"]'>
            VISIT OUR WEBSITE
          </p>
        </div>
        <div>
          <div className='flex'>
            <ImFacebook size={45} />
            <RiLinkedinFill size={45} />
            <FaYoutube size={45} />
          </div>
          <p className='text-[25px] text-white font-["TIMES_NEW_ROMAN"]'>
            FOLLOW US AT
          </p>
        </div>
      </div>
      */
