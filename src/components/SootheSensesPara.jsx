import React from "react";
import cn from "classnames";
const SootheSensesPara = ({ size }) => {
  const sizeclasses = cn('text-white font-["Times_New_Roman"] ', {
    "text-[122px]": size === "big",
    "text-[30px] uppercase": size === "small",
  });
  return (
    <div>
      <p className={sizeclasses}>to soothe your senses</p>
    </div>
  );
};

export default SootheSensesPara;
