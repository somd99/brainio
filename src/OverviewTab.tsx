import React, { FC } from "react";
import ModuleCard from "./ModuleCard";
import GameCard from "./GameCard";
import GameCard2 from "./GameCard2";
import GameCard3 from "./GameCard3";
import Nav from "./nav";
import Overview from "./Overview";

import Tab from "./Tab";
import Date from "./Date";

const OverviewTab: FC = () => {
  return (
    <>
      <Overview />
      <Tab />
    </>
  );
};

export default OverviewTab;
