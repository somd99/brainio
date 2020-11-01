import BottomBoard from "./bottomboard";
import MiddleBoard from "./middleboard";
import React from "react";

export default function DashBoard(){
    return (
        <div>
            <MiddleBoard></MiddleBoard>
            <BottomBoard></BottomBoard>
        </div>
    )
}