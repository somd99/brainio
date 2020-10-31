import React, { FC } from "react";
import ModuleCard from "./ModuleCard";
import GameCard from "./GameCard";
import GameCard2 from "./GameCard2";
import GameCard3 from "./GameCard3";
import Nav from "./nav";
import OverviewCard from "./OverviewCard";

import Tab from "./Tab";
import Date from "./Date";

const Overview: FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white justify-center items-center ">
        <div className="flex-grow w-full flex-col flex items-center text-colex-black w-full">
          <div className="w-full">
            <Nav />
            <OverviewCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
