import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import {useParams} from 'react-router-dom'
import '../Rank_display/Rank_display.css'
import './College_stats.css'

function College_stats()  {
    
    const [stats,setStats] = useState([])
    const [scores,setScores] = useState([])

        
    const {sno} = useParams()
        const statsUrl = `https://counsellinggurus.in:3001/s/stats/${sno}`;
        const scoresUrl = `https://counsellinggurus.in:3001/s/scores/${sno}`;
        
        useEffect(()=>{
            axios.get(statsUrl).then(res => {
            setStats( res.data[0] )
            
        });
        axios.get(scoresUrl).then(res => {
            setScores( res.data[0] )
            
        });
        },[])
        
        
        return (
            <Container fluid>

                <div className='pad-1' style={{  background: "#28323B", borderTop: "1px soRowd black", color: "white" }}>
                    <Row  >
                        <Col >

                            <span className="font-1">
                                {stats[1]}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>
                                Location : {stats[2]}
                            </span>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            NIRF Rank : {scores[0]}
                        </Col>
                        <Col>
                            NIRF Score : {scores[3]}
                        </Col>
                        <Col>
                            Institute Grade : {scores[4]}
                        </Col>
                    </Row>

                </div>
                {/* <Row>
                    <Col>
                    <RadialChart
                        progress={11.18/20*100}
                        color="#3c71d0"
                    />
                    <span style={{position:"fixed"}}>Student strength</span>
                    </Col>
                    <Col>
                    <RadialChart
                        progress={11.18/20*100}
                        color="#3c71d0"
                    />
                    <span style={{position:"fixed"}}>Student strength</span>
                    </Col>
                     
                </Row>*/}
                <Row>
                    <Col style={{padding:"0px",textTransform:"capitalize"}}>
                        <Row>
                            <Col md="6" xs="9">
                                <h3 >Stat</h3>
                            </Col>
                            <Col>
                                <h3>Value</h3>
                            </Col>
                        </Row>

                        <Row className="greyback">
                            <Col md="6" xs="9">
                                Sanctioned Approved Intake
                            </Col>
                            <Col>
                                {stats[3]}
                            </Col>
                        </Row>

                        <Row className="whiteback">
                            <Col md="6" xs="9">
                                Total Actual Student Strength
                            </Col>
                            <Col>
                                {stats[4]}
                            </Col>
                        </Row>

                        <Row className="greyback">
                            <Col md="6" xs="9">
                                Female to Male Ratio
                            </Col>
                            <Col>
                                {stats[5]}
                            </Col>
                        </Row>

                        <Row className="whiteback">
                            <Col md="6" xs="9">
                                Students graduated
                            </Col>
                            <Col>
                                {stats[6]}
                            </Col>
                        </Row>
                        <Row className="greyback">
                            <Col md="6" xs="9">
                                Students placed
                            </Col>
                            <Col>
                                {stats[7]}
                            </Col>
                        </Row>
                        <Row className="whiteback">
                            <Col md="6" xs="9">
                               Media salary
                            </Col>
                            <Col>
                                {stats[8]}
                            </Col>
                        </Row>
                        <Row className="greyback">
                            <Col md="6" xs="9">
                                No. of students selected for higher studies
                            </Col>
                            <Col>
                                {stats[9]}
                            </Col>
                        </Row>
                        <Row className="whiteback">
                            <Col md="6" xs="9">
                                Capital expenditure
                            </Col>
                            <Col>
                                {stats[10]}
                            </Col>
                        </Row>
                        <Row className="greyback">
                            <Col md="6" xs="9">
                                Operational expenditure
                            </Col>
                            <Col>
                                {stats[11]}
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>

            </Container>
        );

            }
    

export default College_stats;
