import React from "react";

const MonthTitle = ({ title }) => {
  return (
    <div>
      <h2 className='2xl:text-[132px] xl:text-[100px] sm:text-[65] lg:text-[80] text-[35px] font-["Times_New_Roman"] text-white'>
        {title}
      </h2>
    </div>
  );
};

export default MonthTitle;
