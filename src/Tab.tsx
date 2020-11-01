import React, { FC } from "react";
import { FundFilled, HomeFilled, PlayCircleFilled } from "@ant-design/icons";

const Tab: FC = () => {
  return (
    <ul className="flex justify-between bg-joy-purple3 w-full py-3 fixed bottom-0 mb-0">
      <li className="mr-3 flex justify-center w-1/3 items-center ">
          <a
            className="w-full py-1 flex justify-center flex-row  items-center  hover:no-underline text-white font-semibold  transfrom ease-in-out duration-300"
            href="#"
          >
            <HomeFilled className="text-xl transition transform ease-in-out duration-100 hover:scale-110" />
          </a>
      </li>
      <li className="mr-3 flex justify-center w-1/3 ">
        <div>
            <a
              className="w-full flex justify-center flex-row items-center rounded  hover:no-underline text-white font-semibold   transfrom ease-in-out duration-300"
              href="#"
            >
              <PlayCircleFilled className="text-joy-purple1 text-3xl transition transform ease-in-out duration-100 hover:scale-150" />
            </a>
        </div>
      </li>
      <li className="mr-3 flex justify-center w-1/3 items-center ">
          <a
            className="w-full py-1 flex justify-center flex-row  items-center hover:no-underline text-white font-semibold  transfrom ease-in-out duration-300"
            href="#"
          >
            <FundFilled className="text-xl transition transform ease-in-out duration-100 hover:scale-110" />
          </a>

      </li>
    </ul>
  );
};

export default Tab;
