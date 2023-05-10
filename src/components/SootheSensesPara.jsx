import React from "react";
import cn from "classnames";
const SootheSensesPara = ({ size }) => {
  return (
    <div>
      <p className='text-[30px] text-white font-["Times_New_Roman"]'>
        to soothe your senses
      </p>
    </div>
  );
};

export default SootheSensesPara;

/*
const sizeclasses = cn('text-white font-["Times_New_Roman"] ', {
    "text-[122px]": size === "big",
    "text-[30px] uppercase": size === "small",
  });
  */
