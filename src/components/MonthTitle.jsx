import React from "react";

const MonthTitle = ({ title }) => {
  return (
    <div>
      <h2 className='xl:text-[132px] text-[35px] font-["Times_New_Roman"] text-white'>
        {title}
      </h2>
    </div>
  );
};

export default MonthTitle;
