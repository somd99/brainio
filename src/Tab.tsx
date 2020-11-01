import { FundFilled, HomeFilled, PlayCircleFilled } from "@ant-design/icons";
import { Link, Redirect } from "react-router-dom";
import React, { FC, useState } from "react";

const Tab: FC = () => {
  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);

  return (
    <ul className="flex justify-between bg-joy-purple3 w-full py-3 fixed bottom-0 mb-0">
      <li className="mr-3 flex justify-center w-1/3 items-center ">
          <a
            className="w-full py-1 flex justify-center flex-row  items-center  hover:no-underline text-white font-semibold  transfrom ease-in-out duration-300"
            href="#"
          >
            {link1 ? <Redirect to="/plan"></Redirect>:null}
            <HomeFilled onClick={()=>setLink1(true)} className="text-xl transition transform ease-in-out duration-100 hover:scale-110" />
          </a>
      </li>
      <li className="mr-3 flex justify-center w-1/3 ">
        <div>
            <a
              className="w-full flex justify-center flex-row items-center rounded  hover:no-underline text-white font-semibold   transfrom ease-in-out duration-300"
              href="#"
            >
              {link3 ? <Redirect to="/load"></Redirect>:null}
              <PlayCircleFilled onClick={()=>setLink3(true)} className="text-joy-purple1 text-3xl transition transform ease-in-out duration-100 hover:scale-150" />
            </a>
        </div>
      </li>
      <li className="mr-3 flex justify-center w-1/3 items-center ">
          <a
            className="w-full py-1 flex justify-center flex-row  items-center hover:no-underline text-white font-semibold  transfrom ease-in-out duration-300"
            href="#"
          >
            {link2 ? <Redirect to="/dashboard"></Redirect>:null}
            <FundFilled onClick={()=>setLink2(true)} className="text-xl transition transform ease-in-out duration-100 hover:scale-110" />
          </a>

      </li>
    </ul>
  );
};

export default Tab;
