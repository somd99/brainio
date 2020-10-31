import React, { FC } from "react";

const Tab: FC = () => {
  return (
    <ul className="flex justify-between bg-joy-purple3 w-full py-3 ">
      <li className="mr-3 flex justify-center items-center w-1/3 ">
        <div>
          <a
            className="w-full bg-joy-purple3  rounded py-2  text-white font-semibold transfrom ease-in-out duration-300"
            href="#"
          >
            Active Pill
          </a>
        </div>
      </li>
      <li className="mr-3 flex justify-center w-1/3 ">
        <div>
          <a
            className="w-full rounded  py-2  text-white font-semibold hover:bg-joy-purple1  transfrom ease-in-out duration-300"
            href="#"
          >
            Pill
          </a>
        </div>
      </li>
      <li className="mr-3 flex justify-center w-1/3 ">
        <div>
          <a
            className=" w-full py-2  text-white font-semibold  transfrom ease-in-out duration-300" 
            href="#"
          >
            Disabled Pill
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Tab;
