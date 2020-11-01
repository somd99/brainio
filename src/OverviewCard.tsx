import React, { FC } from "react";
import { Progress } from "antd";
import DashBoard from "./dashboard/dashboard";

const OverviewCard: FC = () => {
  return (
    <>
      <div className="w-full rounded-b-xl  bg-joy-purple4 flex justify-end items-end flex-col shadow-md ">
        <div className="pl-2.5 flex flex-row w-full justify-between">
          <img className="border-2 shadow-lg border-solid border-white w-1/5 h-auto rounded-full mx-2 my-2" src="kid.jpg" />
          <div className="flex flex-col">
      
            <h1 className="pt-4 px-4  text-black  text-2xl font-bold ml-6">
              สวัสดี สม
            </h1>
            <h1 className="pt-0 pb-2 px-4  text-gray-900  text-sm font-normal  ml-6">
              วันอาทิตย์ที่ 1 พฤศจิกายน
            </h1>
          </div>
        </div>
      </div>
      <div></div>

      <div className="mx-6 flex flex-col items-start pt-4">
        <h1 className="text-joy-purple1 text-lg font-bold">สรุปผล</h1>
        <div className="flex rounded-lg text-white shadow w-full bg-white">
          <div className="flex flex-col px-4 py-2 pt-4 w-full">
            <div className="flex w-full flex-row justify-between">
              <h1 className="text-joy-purple2 text-sm">หัวข้อเสร็จสิ้น</h1>
              <div className="h-3 relative w-3/5 shadow-md rounded-full overflow-hidden flex-shrink">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-joy-purple1 absolute"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="flex w-full flex-row justify-between">
              <h1 className="text-joy-purple2 text-sm">คำศัพท์ที่เรียน</h1>
              <div className="h-3 relative w-3/5 shadow-md rounded-full overflow-hidden flex-shrink">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-joy-purple1 absolute"
                  style={{ width: "33%" }}
                ></div>
              </div>
            </div>
            <div className="flex w-full flex-row justify-between">
              <h1 className="text-joy-purple2 text-sm">เวลาที่ใช้ไปทั้งหมด</h1>
              <div className="h-3 relative w-3/5 shadow-md rounded-full overflow-hidden flex-shrink">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-joy-purple1 absolute"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 flex flex-col items-start pt-3">
        <h1 className="text-joy-purple1 text-lg font-bold">ผลดำเนินงาน</h1>
        <div className="flex rounded-lg text-white shadow w-full bg-white">
          <div className="flex flex-col px-2 py-2 pt-4 w-full">
            <div className="flex flex-col">
              <h1 className="pt-0 pb-1   text-gray-600  text-xs font-normal  ml-3">
                พฤศจิกายน
              </h1>
              <div className="flex flex-row justify-between w-full pb-3">
                <div className="flex flex-row justify-between w-full">
                  <div className="w-10 h-10  bg-gray-200 border-2 border-gray-200 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-white font-semibold text-center w-full ">
                      30
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="w-10 h-10 bg-joy-purple2 border-4 border-joy-purple3 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-white font-semibold text-center w-full ">
                      31
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-full">
                  <div className="w-10 h-10 bg-joy-purple2 border-4 border-joy-purple3 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-white font-semibold text-center w-full ">
                      1
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-full">
                  <div className="w-10 h-10 bg-gray-200 border-2 border-gray-200 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-400 text-center w-full">2</span>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-full">
                  <div className="w-10 h-10 bg-gray-200 border-2 border-gray-200 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-400 text-center w-full">3</span>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-full">
                  <div className="w-10 h-10 bg-gray-200 border-2 border-gray-200 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-400 text-center w-full">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-joy-purple1 text-lg font-bold mx-6 pt-3">
        ความสำเร็จล่าสุด
      </h1>
      <div className="mx-6 flex flex-col items-start">
        <div className="flex rounded-lg text-white shadow w-full bg-white">
          <div className="flex flex-col justify-center items-center">
            <img className="w-3/6 py-4" src="/congrats.svg" />
            <div className="flex  flex-col items-start justify-start w-5/6">
              <h1 className="text-joy-purple1 text-lg font-bold">การอ่าน</h1>
              <h1 className="text-joy-purple1 text-sm">
                น้องสมสามารถอ่านได้เพิ่ม 20 คำ
              </h1>
            </div>
            <div className="w-5/6 py-2 bg-yellow-400 rounded-md items-center text-center mb-3 mt-1 hover:bg-yellow-600 transition ease-in-out duration-300">
              รายละเอียดเพิ่มเติม
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-joy-purple1 text-lg font-bold mx-6 pt-3">พัฒนาการ</h1>

      <DashBoard />
      <div className="mx-6 flex flex-col items-start pt-2">
        <div className="flex min-h-16 rounded-lg text-white shadow w-full bg-white"></div>
      </div>
    </>
  );
};

export default OverviewCard;
