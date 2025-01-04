import React from "react";
import mylogo from "../../assets/images/newlogo.png";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2  flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 rounded-[5000px]"
        src={mylogo}
        alt="mylogo"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r   flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
