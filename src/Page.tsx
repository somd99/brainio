import React, { FC } from "react";

import Date from "./Date";
import GameCard from "./GameCard";
import GameCard2 from "./GameCard2";
import GameCard3 from "./GameCard3";
import GameCardLocked from "./GameCardLocked";
import { Link } from "react-router-dom";
import ModuleCard from "./ModuleCard";
import Nav from "./nav";
import Tab from "./Tab";

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
            <GameCard2 />
            <GameCardLocked />
            <GameCardLocked />
            <GameCardLocked />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
