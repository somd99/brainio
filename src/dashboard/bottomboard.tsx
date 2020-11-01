import { Card, Col, Row } from "react-bootstrap";
import {
  HorizontalBarSeries,
  LineSeries,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";

import React from "react";

export default function BottomBoard() {
  return (
    <div className="">
      <h1 className="text-joy-purple1 text-lg font-bold mx-6 pt-3">
        ความสามารถในการฟัง พูด เขียน และสะกดคำ
      </h1>
      <div className="mx-6 flex flex-col items-start">
        <div className="flex rounded-lg text-white shadow w-full bg-white">
          <div className="flex flex-col justify-center items-center w-full">
            <XYPlot
              className="mt-1.5"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width={300}
              height={300}
            >
              <XAxis
                title="วัน"
                style={{
                  text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                }}
              />
              <YAxis
                title="ผลคะแนน"
                style={{
                  text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                }}
              />
              <LineSeries
                className="first-series"
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 8 },
                  { x: 4, y: 11 },
                ]}
                style={{
                  strokeLinejoin: "round",
                  strokeWidth: 4,
                }}
              />
              <LineSeries
                className="third-series"
                curve={"curveMonotoneX"}
                data={[
                  { x: 1, y: 5 },
                  { x: 2, y: 8 },
                  { x: 3, y: 9 },
                  { x: 4, y: 10 },
                ]}
              />
              <LineSeries
                className="fourth-series"
                data={[
                  { x: 1, y: 1 },
                  { x: 2, y: 3 },
                  { x: 3, y: 4 },
                  { x: 4, y: 12 },
                ]}
              />
              <LineSeries
                className="fifth-series"
                data={[
                  { x: 1, y: 3 },
                  { x: 2, y: 6 },
                  { x: 3, y: 8 },
                  { x: 4, y: 10 },
                ]}
              />
            </XYPlot>
            <div className="flex  flex-col items-start justify-start w-5/6"></div>
          </div>
        </div>
      </div>
      <img className="pt-3 opacity-50" src="bgg.svg"/>
    </div>
  );
}
