import { Button, Card, Col } from "react-bootstrap";

import React from "react";
import happy from '../img/happy.png'

export default function Result (){

    return (
        <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"80px"}}>
            <Col>
                <div style={{textAlign:'center'}}>
                    <p style={{fontSize:"15px", color:"grey"}}>ผลลัพธ์ของการทำแบบฝึกหัด</p>
                    <p style={{fontSize:"50px"}}>เก่งมาก!</p>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={happy} alt="Happy" width={250}/>
                </div>
                <div style={{padding:"10px"}}></div>
                <p style={{textAlign:'center', fontSize:"15px", color:"grey"}}>วันนี้น้องสมทำได้เก่งมาก จำคำศัพท์ใหม่ๆได้เยอะเลย มาสนุกกันใหม่เรื่อยๆเลยนะ พรุ่งนี้มาเจอกันใหม่นะ </p>
                <div style={{padding:"10px"}}></div>
                <div style={{display:"flex", justifyContent:"center"}}>   
                    <Button  variant="light" className="bg-joy-purple3 duration-300 transform ease-in-out hover:bg-joy-purple2 border border-2 border-white rounded-xl" size="lg" block style={{color:"white"}}>เจอกันวันพรุ่งนี้</Button>
                </div>
            </Col>
        </div>
    )
}