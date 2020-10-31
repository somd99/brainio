import React, { FC } from "react";
import ModuleCard from "./ModuleCard";
import Tab from "./Tab";

const Page: FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white justify-center items-center">
        <div className="flex-grow flex items-stretch text-colex-black">
          <div>
            <div className="flex pt-32">
              <p className="text-2xl text-joy-purple1 font-semibold pb-16">
                ทดสอบฟ้อนไทย
              </p>
            </div>
            <ModuleCard />
          </div>
        </div>
        <Tab />
      </div>
    </>
  );
};

export default Page;
