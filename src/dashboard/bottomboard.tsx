import { Card, Col, Row } from "react-bootstrap";
import { HorizontalBarSeries, LineSeries, XAxis, XYPlot, YAxis } from 'react-vis';

import React from "react";

export default function BottomBoard(){
    return (
        <div className="container">
            <p style={{fontSize:"35px", margin:"0px"}}>ผลลัพธ์</p>
            <Card border="grey">
                <Card.Body style={{padding:"10px"}}>
                <XYPlot style={{display:"flex", justifyContent:"center", alignItems:"center"}} width={300} height={300}>
                <XAxis
                    title="X Axis"
                    style={{
                        text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                    }}
                />
                <YAxis 
                    title="Y Axis"
                    style={{
                        text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                    }}
                />
                <LineSeries
                    className="first-series"
                    data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: 4
                    }}
                />
                <LineSeries
                    className="third-series"
                    curve={'curveMonotoneX'}
                    data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
                />
                <LineSeries
                    className="fourth-series"
                    data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
                />
                </XYPlot>    
                </Card.Body>
            </Card>
            <div style={{padding:"10px"}}></div>
            <Row>
                <Col>
                <Card border="grey">
                    <Card.Body style={{padding:"10px"}}>
                    <XYPlot xType="ordinal" width={200} height={200} xDistance={100}>
                                <XAxis/>
                                <YAxis/>
                                <HorizontalBarSeries color="#231942" barWidth={1} data={[{y: 2, x: 10}, {y: 4, x: 5}, {y: 5, x: 15}]} />
                                <HorizontalBarSeries color="#5E548E" barWidth={1} data={[{y: 2, x: 12}, {y: 4, x: 2}, {y: 5, x: 11}]} />
                            </XYPlot>  
                    </Card.Body>
                </Card>
                </Col>
                <Col style={{padding:"0px"}}>
                    <p style={{fontSize:"35px"}}>พัฒนาดี</p>
                    <p style={{color:"grey", fontSize:"12px"}}>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
        </div>
    )
}