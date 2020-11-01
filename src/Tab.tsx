import React, { FC } from "react";
import {
  FundOutlined,
  HomeOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const Tab: FC = () => {
  return (
    <ul className="flex justify-between bg-joy-purple3 w-full py-3 absolute bottom-0  sticky bottom-0 mb-0">
      <li className="mr-3 flex justify-center w-1/3 items-center ">
        <div className="flex justify-center flex-row  items-center text-white font-semibold ">
          <HomeOutlined className="mr-2" />
          <a
            className="w-full py-2  hover:no-underline text-white font-semibold  transfrom ease-in-out duration-300"
            href="#"
          >
            หน้าแรก
          </a>
        </div>
      </li>
      <li className="mr-3 flex justify-center w-1/3 ">
        <div>
          <div className="flex justify-center flex-row  py-4 items-center text-white font-semibold bg-joy-purple1 px-3 rounded">
          <PlayCircleOutlined className="mr-2" />
            <a
              className="w-full rounded  hover:no-underline text-white font-semibold   transfrom ease-in-out duration-300"
              href="#"
            >
              เล่นเกม!
            </a>
          </div>
        </div>
      </li>
      <li className="mr-3 flex justify-center w-1/3 items-center ">
        <div className="flex justify-center flex-row  items-center text-white font-semibold ">
          <FundOutlined className="mr-2" />
          <a
            className="w-full py-2  hover:no-underline text-white font-semibold  transfrom ease-in-out duration-300"
            href="#"
          >
            แดชบอร์ด
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Tab;
