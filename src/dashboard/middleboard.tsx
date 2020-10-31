import { Card, Col, Row } from "react-bootstrap";
import { VerticalBarSeriesCanvas, XAxis, XYPlot, YAxis } from 'react-vis';

import React from "react";

export default function MiddleBoard(){
    const greenData = [{x: 'Day 10', y: 10}, {x: 'Day 11', y: 5}, {x: 'Day 12', y: 15}];
    const blueData = [{x: 'Day 10', y: 12}, {x: 'Day 11', y: 2}, {x: 'Day 12', y: 11}];

    return (
        <div className="container">
            <p style={{fontSize:"35px", margin:"0px"}}>ภาพรวม</p>
           <Row>
                <Col>
                    <Card border="grey">
                        <Card.Body style={{padding:"10px"}}>
                            <Card.Title style={{fontSize:"20px"}}>Chart</Card.Title>
                            <XYPlot xType="ordinal" width={200} height={200} xDistance={100}>
                                <XAxis/>
                                <YAxis/>
                                <VerticalBarSeriesCanvas color="#231942" barWidth={10} data={greenData} />
                                <VerticalBarSeriesCanvas color="#5E548E" barWidth={10} data={blueData} />
                            </XYPlot>  
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{padding:"0px"}}>
                    <h1>ดีมาก!</h1>
                    <p style={{color:"grey", fontSize:"12px"}}>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
           </Row>
        </div>
    )
}