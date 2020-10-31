import React, { FC } from "react";
import {
  PlayCircleOutlined
} from '@ant-design/icons';

const GameCard2: FC = () => {
  return (
    <div className="mt-10 mb-28 flex-shrink-0 max-w-sm flex flex-col justify-center items-center transform ease-in-out duration-300 hover:scale-110 ">
      <div className="w-4/5 rounded-lg overflow-hidden shadow-lg">
        <img className="" src="/gamecover2.png" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">ฟังนิทานกันเถอะ</div>
          <p className="text-gray-700 text-base">
            ในส่วนนี้ เด็กๆจะได้ฟังนิทานภาพ พร้อมกับศึกษาคำศัพท์ไปด้วยกัน โดยเด็กๆจะได้ฝึกการฟังพร้อมกับการอ่านไปพร้อมกัน
          </p>
          < PlayCircleOutlined/>
        </div>
      </div>
    </div>
  );
};

export default GameCard2;
