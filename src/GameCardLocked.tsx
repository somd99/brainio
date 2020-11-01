import React, { FC } from "react";
import { LockOutlined } from "@ant-design/icons";

const GameCardLocked: FC = () => {
  return (
    <div className="mt-10 mb-28 flex-shrink-0 max-w-sm flex flex-col justify-center items-center transform ease-in-out duration-300 hover:scale-110 ">
      <div className="w-4/5 rounded-lg overflow-hidden shadow-lg bg-gray-300">
        <img className="" src="/lock.png" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-600">เกมลับ </div>
          <p className="text-gray-500 text-base">
            เกมนี้ยังเล่นไม่ได้น้า รอผู้ปกครองจ่ายเงินแล้วกลับมาเล่นกัน!
          </p>
          <LockOutlined  />
        </div>
      </div>
    </div>
  );
};

export default GameCardLocked;
