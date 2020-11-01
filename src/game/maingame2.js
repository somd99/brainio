import '../App.css';

import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import dog from '../img/dog.jpg'
import nothing from '../img/delete.png'

export default function MainGame2(){

    const word = ["ห","ม","า"];
    const w_word = ["ม","า","ห", "น"];

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
        <div className="flex flex-col h-screen kid-font bg-yellow-100" style={{height:"100vh"}}>
            <div className="bg-joy-purple3" style={{marginBottom:"10px",paddingTop:"10px"}}>
                {seconds < 0 ? <p style={{margin:"0px", textAlign:"center", fontSize:"30px", color:"white"}}>เขียนคำตอบให้ถูกต้องนะ!</p>:
                <div className="rounded-full border border-2 border-joy w-10 bg-white" style={{marginLeft:"200px"}}>
                    <p style={{margin:"0px", textAlign:"center", fontSize:"25px", color:"#BE95C4"}}>{seconds}</p>
                </div>
                }
                <p style={{textAlign:"center", fontSize:"40px", color:"white", marginBottom:"0px"}}>คำถามข้อที่ 2 / 3</p>
            </div>
                
                <div className="container" style={{display:"flex", flex:"1", flexDirection:"row", justifyContent:"center"}}> 
                    <Card.Img className="rounded-xl" src={dog} variant="top"></Card.Img>
                </div>
                <div style={{padding:"10px"}}></div>
                
                
                {seconds < 0 ?
                <div className="container" style={{marginLeft:"10px"}}>
                    <Row>
                        <Col style={{backgroundColor:"white", height:"68px"}}>
                            {select.map((data) => 
                                <Button className="text-white text-4xl bg-joy-purple4 ease-in-out transform border border-2 border-joy-purple4" onClick={()=>handleWord(data)} value={data}>{data}</Button>
                            )}
                        </Col>
                        <Col>
                            <Button className="flex justify-center items-center border border-white bg-red-500 transition transform rounded-full ease-in-out hover:bg-red-600 duration-300 hover:scale-90 h-full" block onClick={handleDelete}>
                                <img className="" src={nothing} alt="delete" width={40}></img>
                            </Button>
                        </Col>
                    </Row>
                </div>
                :
                <Col>
                    <Row style={{paddingLeft:"50px",flex: 1,flexDirection: 'row',justifyContent: 'center',paddingRight:"50px"}}>
                        {word.map((data) => 
                        <div>
                            <Card>
                                <Card.Body className="text-joy-purple3 text-5xl bg-white ease-in-out transform border border-2 border-joy-purple4">{data}</Card.Body>
                            </Card>
                        </div>
                
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
                {seconds<0 ?
                <Button className="bg-joy-purple3 duration-300 transform ease-in-out hover:bg-joy-purple2 border border-2 border-white rounded-xl text-3xl"  block size="lg" onClick={handleNext}>มั่นใจแล้ว!</Button>
                :
                null}
                <Modal show={show} onHide={handleClose}>
                    {arrayEquals(select,word) ? 
                        <Modal.Header className="bg-green-500">
                        <Modal.Title style={{color:"white"}}>ทำถูกแล้ว!</Modal.Title>
                        </Modal.Header>
                        :
                        <Modal.Header className="bg-red-500" closeButton>
                            <Modal.Title style={{color:"white"}}>ลองใหม่นะ</Modal.Title>
                        </Modal.Header>}
                    <Modal.Footer>
                        
                        {arrayEquals(select,word) ?
                        <div>
                            <Link to="/game5">
                                <Button className="bg-green-500 transition transform ease-in-out duration-300 hover:scale-110">ไปต่อเลย!</Button>
                            </Link>
                        </div>
                        :<Button className="border border-white bg-red-500 transition transform rounded-full ease-in-out hover:bg-red-600 duration-300 hover:scale-90" onClick={handleClose}>ปิด</Button>}
                    </Modal.Footer>
                </Modal>
        </div>
    )
}