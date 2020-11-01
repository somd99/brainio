import { Button, Card, Col } from "react-bootstrap";
import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import fail from '../img/fail.png'

export default function ResultFail (){
    const [link, setLink] = useState(false)

    return (
        <div className="container kid-font" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <Col>
                <div style={{textAlign:'center'}}>
                    <p style={{fontSize:"15px", color:"grey"}}>ผลลัพธ์ของการทำแบบฝึกหัด</p>
                    <p className="text-yellow-400" style={{fontSize:"80px"}}>ไม่เป็นไร</p>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={fail} alt="Happy" width={250}/>
                </div>
                <div style={{padding:"10px"}}></div>
                <p style={{textAlign:'center', fontSize:"20px", color:"grey"}}>ไม่เป็นนะน้องเหมือง พรุ่งนี้ลองใหม่</p>
                <div style={{padding:"10px"}}></div>
                <div style={{display:"flex", justifyContent:"center"}}>   
                    
                    <Button onClick={()=>setLink(true)} variant="light" className="bg-joy-purple3 duration-300 transform ease-in-out hover:bg-joy-purple2 border border-2 border-white rounded-xl text-3xl" size="lg" block style={{color:"white"}}>เจอกันวันพรุ่งนี้</Button>
                </div>
            </Col>
            {link ? <Redirect to="/dashboard"></Redirect>:null}
        </div>
    )
}