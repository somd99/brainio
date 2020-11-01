import { Card, Col, Row } from "react-bootstrap";
import { VerticalBarSeriesCanvas, XAxis, XYPlot, YAxis } from "react-vis";

import React from "react";

export default function MiddleBoard() {
  const greenData = [
    { x: "วันที่ 30", y: 10 },
    { x: "วันที่ 31", y: 5 },
    { x: "วันที่ 1", y: 15 },
  ];
  const blueData = [
    { x: "วันที่ 30", y: 12 },
    { x: "วันที่ 31", y: 2 },
    { x: "วันที่ 1", y: 11 },
  ];

  return (
    <div className="">
      <div className="mx-6 flex flex-col items-start">
        <div className="flex rounded-lg text-white shadow w-full bg-white">
          <div className="flex flex-col justify-center items-center w-full">
            <XYPlot
              className="flex items-center justify-center mt-3"
              xType="ordinal"
              width={200}
              height={200}
              xDistance={100}
            >
              <XAxis />
              <YAxis />
              <VerticalBarSeriesCanvas
                color="#231942"
                barWidth={10}
                data={greenData}
              />
              <VerticalBarSeriesCanvas
                color="#5E548E"
                barWidth={10}
                data={blueData}
              />
            </XYPlot>
            <div className="flex  flex-col items-start justify-start w-5/6">
              <h1 className="text-joy-purple1 text-lg font-bold">การอ่าน</h1>
              <h1 className="text-joy-purple1 text-sm mb-3.5">
                ผลคะแนนในระยะสามวันที่ผ่านมาเทียบกับผู้เล่นเกมคนอื่นๆ ในวัยเดียวกัน
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
