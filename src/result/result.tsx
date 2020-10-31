import { Col } from "react-bootstrap";
import React from "react";
import happy from '../img/happy.png'

export default function Result (){

    return (
        <div className="container">
            <Col>
                <h1 className="center" style={{textAlign:'center'}}>Good Job!</h1>
                <img src={happy} alt="Happy"/>
            </Col>
        </div>
    )
}