import React, { FC, useState } from "react";

import {
  PlayCircleOutlined
} from '@ant-design/icons';
import { Redirect } from "react-router-dom";

const GameCard3: FC = () => {
  const [link,setLink] = useState(false);

  return (
    <div onClick={()=>setLink(true)} className=" mb-28 flex-shrink-0 max-w-sm flex flex-col justify-center items-center transform ease-in-out duration-300 hover:scale-110 ">
      <div className="w-4/5 rounded-lg overflow-hidden shadow-lg">
        <img className="" src="/gamecover3.png" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">ขีดเขียนวันละนิด</div>
          <p className="text-gray-700 text-base">
            ในส่วนนี้ จะทำการฝึกให้เด็กเขียนหนังสืออย่างถูกหลักการ เพื่อให้เด็ก ๆ สามารถเขียนหนังสือได้อย่างถูกหลักการ
          </p>
          < PlayCircleOutlined/>
        </div>
      </div>
      {link ? <Redirect to="/game1"></Redirect>:null}
      
    </div>
  );
};

export default GameCard3;
