import React from "react";

const LogoSafex = () => {
  const css = `@media (max-width: 650px) {
    .safexLogo {
        background-image: url("/mobile/background.png")
    }
}
@media (min-width: 750px) {
    .safexLogo {
        background-image: url("/desktop/safex_white.png");
    }
}`;
  return (
    <div>
      <style scoped>{css}</style>
      <div>
        <img
          className='mx-auto 2xl:w-[229px] 2xl:h-[122px]'
          src='/mobile/safex_white.png'
          alt='Safex Logo'
        />
      </div>
    </div>
  );
};

export default LogoSafex;
