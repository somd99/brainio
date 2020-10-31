import React, { FC } from "react";
import { LockOutlined } from "@ant-design/icons";

const GameCardLocked: FC = () => {
  return (
    <div className="mt-10 mb-28 flex-shrink-0 max-w-sm flex flex-col justify-center items-center transform ease-in-out duration-300 hover:scale-110 ">
      <div className="w-4/5 rounded-lg overflow-hidden shadow-lg">
        <img className="" src="/lock.svg" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">เกมคำศัพท์แสนสนุก</div>
          <p className="text-gray-700 text-base">
            ในส่วนนี้ เด็กๆจะได้รับความสนุกในการศึกษาคำศัพท์ ผ่านการเล่นเกม
            เพื่อการเรียนรู้ที่มีประสิทธิภาพพร้อมการเสริมสร้าง
          </p>
          <LockOutlined />
        </div>
      </div>
    </div>
  );
};

export default GameCardLocked;