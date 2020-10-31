import React, { FC } from "react";

const Date: FC = () => {
  return (
    <div className="max-w-xl mx-auto my-3  ">
      <div className="flex pb-3">
        <div className="flex-1"></div>

        <div className="flex-1">
          <div className="w-10 h-10 bg-joy-purple2 border-2 border-joy-purple2 mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-white font-semibold text-center w-full ">
              31
            </span>
          </div>
        </div>

        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
            <div
              className="bg-joy-purple3 text-xs leading-none py-1 text-center text-grey-darkest rounded "
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10 bg-joy-purple2 border-2 border-joy-purple2 mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-white font-semibold text-center w-full ">
              1
            </span>
          </div>
        </div>

        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div
              className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded "
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10 bg-gray-200 border-2 border-gray-200 mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-gray-400 text-center w-full">2</span>
          </div>
        </div>

        <div className="w-1/6 align-center  items-center align-middle content-center flex">
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div
              className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded "
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10 bg-gray-200 border-2 border-gray-200 mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-gray-400 text-center w-full">3</span>
          </div>
        </div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Date;
