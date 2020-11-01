import React, { FC, useState } from "react";

import {
  PlayCircleOutlined
} from '@ant-design/icons';
import { Redirect } from "react-router-dom";

const ModuleCard: FC = () => {
  const [link,setLink] = useState(false);

  return (
    <div onClick={()=>setLink(true)} className="mt-10 mb-28 flex-shrink-0 max-w-sm flex flex-col justify-center items-center transform ease-in-out duration-300 hover:scale-110 ">
      <div className="w-4/5 rounded-lg overflow-hidden shadow-lg">
        <img className="" src="/gamecover.png" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">เกมคำศัพท์แสนสนุก</div>
          <p className="text-gray-700 text-base">
            เด็ก ๆ จะได้รับความสนุกในการศึกษาคำศัพท์ ผ่านการเล่นเกมการ์ด  เพื่อการเรียนรู้ที่มีประสิทธิภาพพร้อมการเสริมสร้างทักษะไปในตัวด้วย!
          </p>
          < PlayCircleOutlined/>
        </div>
      </div>
      {link ? <Redirect to="/game1"></Redirect>:null}
    </div>
  );
};

export default ModuleCard;
