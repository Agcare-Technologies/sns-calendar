import React from "react";

import { ImFacebook } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import LogoSafex from "./LogoSafex";
const Footer = () => {
  return (
    <div>
      <div className='flex items-center content-center justify-between py-4 border-t-2 border-white place-items-center justify-items-center'>
        <div>
          <LogoSafex size='desktopFooter' />
          <LogoSafex size='mobileFooter' />
        </div>
        <div>
          <div className='flex space-x-1'>
            <a href='https://www.facebook.com/smithnsmithchemicals/'>
              <ImFacebook size={20} className='p-1 m-1 bg-white rounded-md' />
            </a>
            <a href='https://in.linkedin.com/company/smith-n-smith-chemicals-limited'>
              <RiLinkedinFill
                size={20}
                className='p-1 m-1 bg-white rounded-md'
              />
            </a>
            <a href='https://www.youtube.com/channel/UCMqyfZUGm_3lSo4GSaaxapA'>
              <FaYoutube size={20} className='p-1 m-1 bg-white rounded-md' />
            </a>
          </div>
        </div>
      </div>
      <div className='text-[8px] sm:text-[25px] flex items-center justify-between text-white font-["TIMES_NEW_ROMAN"] space-y-2'>
        <p className=''>VISIT OUR WEBSITE</p>
        <p className=''>FOLLOW US AT</p>
      </div>
    </div>
  );
};

export default Footer;
