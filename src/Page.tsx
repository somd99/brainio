import React, { FC } from "react";
import ModuleCard from "./ModuleCard";

const Page: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-whitejustify-center items-center">
      <div className="flex-grow flex items-stretch text-colex-black">
        <div>
          <div className="flex pt-32">
            <p className="text-2xl text-joy-purple1 font-semibold pb-16">
              Welcome back, Som!
            </p>
          </div>

          <ModuleCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
