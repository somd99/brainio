import React, { FC } from "react";

const Tab: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex justify-center items-center flex-row ">
      <div className="bg-joy-purple2 px-5 py-8 rounded-lg mr-5 transform ease-in-out duration-300 hover:scale-110 hover:font-bold shadow-2xl text-white hover:bg-joy-purple1">
        Dyslexia
      </div>
      <div className="bg-joy-purple3 px-5 py-8 rounded-lg transform ease-in-out duration-300 hover:scale-110 hover:font-bold shadow-2xl text-white hover:bg-joy-purple1">
        Dyslexia
      </div>
    </div>
    <div className="flex justify-center items-center flex-row  my-4 ">
      <div className="bg-joy-purple4 px-5 py-8 rounded-lg mr-5 transform ease-in-out duration-300 hover:scale-110 hover:font-bold shadow-2xl text-white hover:bg-joy-purple1">
        Dyslexia
      </div>
      <div className="bg-joy-purple5 px-5 py-8 rounded-lg transform ease-in-out duration-300 hover:scale-110 hover:font-bold shadow-2xl text-white hover:bg-joy-purple1">
        Dyslexia
      </div>
    </div>
  </div>
  );
};

export default Tab;
