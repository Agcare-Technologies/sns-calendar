import React from "react";
import cn from "classnames";
const SootheSensesPara = ({ use }) => {
  const sizeclasses = cn("text-white  ", {
    "text-[30px] text-white font-['Times_New_Roman']": use === "home",
    "text-[122px] text-white font-['Times_New_Roman'] hidden sm:block":
      use === "desktopHome",
    "text-[12px] uppercase tracking-[1.2px] sm:hidden text-white font-['Helvetica_Neue_Medium']":
      use === "month",
  });
  return (
    <div>
      <p className={sizeclasses}>to soothe your senses</p>
    </div>
  );
};

export default SootheSensesPara;

/*

  */
