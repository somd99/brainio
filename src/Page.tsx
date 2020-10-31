import React, { FC } from "react";
import ModuleCard from "./ModuleCard";
import GameCard from "./GameCard";
import GameCard2 from "./GameCard2";
import GameCard3 from "./GameCard3";
import Nav from './nav'


import Tab from "./Tab";
import Date from "./Date";

const Page: FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white justify-center items-center">
        <div className="flex-grow flex-col flex items-stretch text-colex-black w-full">
          <div className="w-full">
            <Date />
            <div className="flex justify-center">
              <p className="text-2xl text-joy-purple1 font-semibold">
              สวัสดีวันอาทิตย์! 
              </p>
            </div>
          </div>
          <div className="flex overflow-x-scroll">
          <GameCard3/>
          <GameCard />
          <GameCard2/>
          <GameCard/>
          <GameCard/>
          <GameCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
