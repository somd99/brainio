import React, { FC } from "react";

const OverviewCard: FC = () => {
  return (
    <>
      <div className="mx-6 flex flex-col items-start">
        <h1 className="text-joy-purple1 text-lg font-bold">สรุปผล</h1>
        <div className="flex rounded-lg text-white shadow w-full bg-joy-purple2">
          <div className="flex flex-col px-4 py-2 pt-4 w-full">
            <div className="flex w-full flex-row justify-between">
              <h1 className="text-white text-sm">หัวข้อเสร็จสิ้น</h1>
              <h1 className="text-white text-sm">9</h1>
            </div>
            <div className="flex w-full flex-row justify-between">
              <h1 className="text-white text-sm">คำศัพท์ที่เรียน</h1>
              <h1 className="text-white text-sm">26</h1>
            </div>
            <div className="flex w-full flex-row justify-between">
              <h1 className="text-white text-sm">จำนวนเวลาที่ใช้ไปทั้งหมด</h1>
              <h1 className="text-white text-sm">2 ชั่วโมง</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 flex flex-col items-start pt-3">
        <h1 className="text-joy-purple1 text-lg font-bold">ผลดำเนินงาน</h1>
        <div className="flex rounded-lg text-white shadow w-full bg-white">
          <div className="flex flex-col px-2 py-2 pt-4 w-full">
            <div className="flex flex-row justify-between w-full pb-3">
              <div className="flex flex-row justify-between w-full">
                <div className="w-10 h-10 bg-joy-purple2 border-4 border-joy-purple3 mx-auto rounded-full text-lg text-white flex items-center">
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
      <h1 className="text-joy-purple1 text-lg font-bold mx-6 pt-3">
        ความสำเร็จล่าสุด
      </h1>
      <div className="mx-6 flex flex-col items-start">
        <div className="flex rounded-lg text-white shadow w-full bg-white">
          <div className="flex flex-col justify-center items-center">
            <img className="w-3/6 py-4" src="/congrats.svg" />
            <div className="flex  flex-col items-start justify-start w-5/6">
              <h1 className="text-joy-purple1 text-lg font-bold">การอ่าน</h1>
              <h1 className="text-joy-purple1 text-sm">น้องสมสามารถอ่านได้เพิ่ม 20 คำ</h1>
            </div>
            <div className="w-5/6 py-2 bg-yellow-400 rounded-md items-center text-center mb-2 hover:bg-yellow-600 transition ease-in-out duration-300">
              Explore packages
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 flex flex-col items-start pt-2">
        <div className="flex rounded-lg text-white shadow w-full bg-white">
          <div className="flex flex-col justify-center items-center"></div>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
