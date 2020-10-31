import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import black from '../img/black.jpg'

export default function MainGame5(){

    const word = ["B","L","A","C","K"];
    const w_word = ["L","A","K", "B","C","E"];

    const [seconds, setSeconds] = useState(5);
    const [isActive, setIsActive] = useState(true);
    const [select, setSelect] = useState([]);
    const [show, setShow] = useState(false);

      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);
      
    
    function handleWord(data){
        setSelect([...select,data])
    }

    function handleDelete(){
        setSelect(select.slice(0,select.length-1));
    }

    function handleNext(){
        console.log(select)
        console.log(word)
        setShow(true)
    }

    function handleClose(){
        setShow(false);
    }
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }

    return(
        <div className="container" style={{paddingTop:"50px"}}>
            {seconds < 0 ? <p style={{margin:"0px", textAlign:"center"}}>เขียนคำตอบให้ถูกต้องนะ</p>:<p style={{margin:"0px", textAlign:"center"}}>{seconds}</p>}
            <p style={{textAlign:"center", fontSize:"30px"}}>Question 3</p>
            <Card.Img src={black} variant="top"></Card.Img>
                
                <div style={{padding:"10px"}}></div>
                {seconds < 0 ?
                <Row>
                    <Col xs="9" style={{paddingLeft:"50px",flex: 1,flexDirection: 'row',justifyContent: 'center',paddingRight:"50px"}}>
                        {select.map((data) => 
                            <Button variant="outline-secondary" style={{fontSize:"20px", color:"#5E548E"}} onClick={()=>handleWord(data)} value={data}>{data}</Button>
                        )}
                    </Col>
                    <Col xs="3">
                    <Button className="border border-white bg-red-500 transition transform rounded-full ease-in-out hover:bg-red-600 duration-300 hover:scale-90" onClick={handleDelete}>ลบ</Button>
                    </Col>
                </Row>
                :
                <Col>
                    <Row style={{paddingLeft:"30px",flex: 1,flexDirection: 'row',justifyContent: 'space-between',paddingRight:"30px"}}>
                        {word.map((data) => 
                            <Card border="joy-purple3">
                                <Card.Body style={{padding:"10px", paddingLeft:"15px", paddingRight:"15px"}}>
                                    <p style={{fontSize:"40px", margin:"0px", color:"#5E548E"}}>{data}</p>
                                </Card.Body>
                            </Card>
                        )}
                    </Row>
                </Col>
                }
                
                <div style={{padding:"10px"}}></div>
                {seconds <0  ?
                <Col>
                    <Row style={{paddingLeft:"50px",flex: 1,flexDirection: 'row',justifyContent: 'space-between',paddingRight:"50px"}}>
                        {w_word.map((data) => 
                            <Button className="text-joy-purple3 text-3xl bg-white hover:scale-150 ease-in-out transform hover:text-joy-purple5 transition duration-300 border border-2 border-joy-purple4" onClick={()=>handleWord(data)} value={data}>{data}</Button>
                        )}
                    </Row>
                </Col>
                : null}
                
                <div style={{padding:"10px"}}></div>
                {seconds<0 ?
                <Button className="bg-joy-purple3 duration-300 transform ease-in-out hover:bg-joy-purple2 border border-2 border-white rounded-xl"  block size="lg" onClick={handleNext}>มั่นใจแล้ว!</Button>
                :
                null}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        {arrayEquals(select,word) ? <Modal.Title>ทำถูกแล้ว!</Modal.Title>:<Modal.Title>ลองใหม่นะ</Modal.Title>}
                    </Modal.Header>
                    <Modal.Footer>
                        <Button className="border border-white bg-red-500 transition transform rounded-full ease-in-out hover:bg-red-600 duration-300 hover:scale-90" onClick={handleClose}>ปิด</Button>
                        {arrayEquals(select,word) ? <Button className="bg-joy-purple2 transition transform ease-in-out duration-300 hover:scale-110">ไปต่อเลย!</Button>:null}
                    </Modal.Footer>
                </Modal>
        </div>
    )
}