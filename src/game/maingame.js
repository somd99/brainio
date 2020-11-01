import '../App.css';

import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import cat from '../img/cat.jpg';
import correct from '../img/correct.png';
import nothing from '../img/delete.png';
import wrong from '../img/wrong.png'

export default function MainGame(){

    const word = ["แ","ม","ว"];
    const w_word = ["ม","ว","แ", "น"];

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
        <div className="flex flex-col h-screen kid-font bg-white" style={{height:"100vh"}}>
            <div className="bg-joy-purple2" style={{marginBottom:"10px", paddingTop:"10px"}}>
                {seconds < 0 ? <p style={{margin:"0px", textAlign:"center", fontSize:"30px", color:"white"}}>เขียนคำตอบให้ถูกต้องนะ!</p>:
                <div className="rounded-full border-solid border-2 border-joy w-10 bg-white" style={{marginLeft:"200px"}}>
                    <p style={{margin:"0px", textAlign:"center", fontSize:"25px", color:"#BE95C4"}}>{seconds}</p>
                </div>
                }
                <p style={{textAlign:"center", fontSize:"40px", color:"white", marginBottom:"0px"}}>คำถามข้อที่ 1 / 3</p>
            </div>
                
                <div className="container" style={{display:"flex", flex:"1", flexDirection:"row", justifyContent:"center"}}> 
                    <Card.Img className="rounded-xl" src={cat} variant="top"></Card.Img>
                </div>
                <div style={{padding:"10px"}}></div>
                
                
                {seconds < 0 ?
                <div className="container" style={{marginLeft:"10px"}}>
                    <Row>
                        <Col style={{borderBottomStyle:"solid", borderBottomColor:"grey", borderBottomWidth:"3px", height:"71px"}}>
                            <Row style={{flex: 1,flexDirection: 'row',justifyContent: 'center'}}>
                            {select.map((data) => 
                                    <Button className="text-white text-3xl bg-joy-purple4 ease-in-out transform border-solid border-2 border-joy-purple4" onClick={()=>handleWord(data)} value={data}>{data}</Button>
                                )}
                            </Row>
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
                                <Card.Body className="text-joy-purple3 text-5xl bg-white ease-in-out transform border-solid border-2 border-joy-purple4">{data}</Card.Body>
                            </Card>
                        </div>
                
                        )}
                    </Row>
                </Col>
                }
               
                
                
                <div style={{padding:"20px"}}></div>
                {seconds <0  ?
                <Col>
                    <Row style={{paddingLeft:"50px",flex: 1,flexDirection: 'row',justifyContent: 'space-between',paddingRight:"50px"}}>
                        {w_word.map((data) => 
                            <Button className="text-joy-purple3 text-3xl bg-white hover:scale-150 ease-in-out transform hover:text-joy-purple5 transition duration-300 border-solid border-2 border-joy-purple1" onClick={()=>handleWord(data)} value={data}>{data}</Button>
                        )}
                    </Row>
                </Col>
                : null}
                {seconds<0 ?
                <Button className="bg-joy-purple1 duration-300 transform ease-in-out hover:bg-joy-purple3 hover:text-joy-purple1 border-solid border-2 border-joy-purple4 text-3xl"  block size="lg" onClick={handleNext}>มั่นใจแล้ว!</Button>
            
                
                :
                null}
                <div style={{fontFamily:"Itim"}}>
                <Modal style={{fontFamily:"Itim"}} show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    {arrayEquals(select,word) ? 
                        <Modal.Header>
                            <Modal.Body style={{color:"black", textAlign:"center"}}>
                                <div style={{display:"flex", flex:"1", flexDirection:"column", justifyContent:"center"}}>
                                    <p style={{fontSize:"50px", color:"#F8BA00"}}>ทำถูกแล้ว!</p>
                                    <img style={{height:"300px", width:"300px", marginLeft:"40px"}} src={correct} alt="right"></img>
                                </div>
                            </Modal.Body>
                        </Modal.Header>
                        :
                        <Modal.Header>
                            <Modal.Body style={{color:"black", textAlign:"center"}}>
                                <div style={{display:"flex", flex:"1", flexDirection:"column", justifyContent:"center"}}> 
                                    <p style={{fontSize:"50px", color:"#F8BA00"}}>ลองใหม่นะ!</p>
                                    <img src={wrong} alt="wrong"></img>
                                </div>
                            </Modal.Body>
                        </Modal.Header>}
                    <Modal.Footer>
                        {arrayEquals(select,word) ?
                        <div style={{width:"100vh"}}>
                            <Link to="/game2">
                                <Button className="bg-green-500 transition transform ease-in-out duration-300 hover:scale-110" block size="lg">ไปต่อเลย!</Button>
                            </Link>
                        </div>
                        :
                        <div style={{width:"100vh"}}>
                             <Button className="border border-white bg-red-500 transition transform rounded-full ease-in-out hover:bg-red-600 duration-300 hover:scale-90" block size="lg" onClick={handleClose}>ปิด</Button>
                        </div>}
                    </Modal.Footer>
                </Modal>
                </div>
                
        </div>
        
    )
}