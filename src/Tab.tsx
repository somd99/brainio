import React, { FC } from "react";

const Tab: FC = () => {
  return (
    <ul className="flex justify-between bg-joy-purple3 w-full ">
      <li className="mr-3">
        <a
          className="inline-block bg-joy-purple3  rounded py-2 px-4  text-white font-semibold"
          href="#"
        >
          Active Pill
        </a>
      </li>
      <li className="mr-3">
        <a
          className="inline-block  rounded  py-2 px-4 text-white font-semibold"
          href="#"
        >
          Pill
        </a>
      </li>
      <li className="mr-3">
        <a
          className="inline-block py-2 px-4  text-white font-semibold"
          href="#"
        >
          Disabled Pill
        </a>
      </li>
    </ul>
  );
};

export default Tab;
