import BottomBoard from "./bottomboard";
import MiddleBoard from "./middleboard";
import React from "react";

export default function DashBoard(){
    return (
        <div>
            <MiddleBoard></MiddleBoard>
            <div style={{padding:"10px"}}></div>
            <BottomBoard></BottomBoard>
        </div>
    )
}