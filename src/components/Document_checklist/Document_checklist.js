import React, { useState } from 'react'
import './Document_checklist.css'
import { Row, Col, Container } from "reactstrap";
import NavBar from '../NavBar/NavBar'
import { Icon } from 'react-icons-kit';
import Footer from '../Footer/Footer'
import { androidCheckboxOutline } from 'react-icons-kit/ionicons/androidCheckboxOutline'
function Document_checklist() {
 const [check1 , setCheck1] = useState(false)
 const [check2 , setCheck2] = useState(false)
 const [check3 , setCheck3] = useState(false)
 const [check4 , setCheck4] = useState(false)
    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col className="checkHead">
                    <Icon icon={androidCheckboxOutline} size="70" />
                    <div style={{ display: "flex", alignItems: "left", marginLeft: "10px", flexDirection: "column" }}>
                        <span className="checkText">Document Checklist</span>
                        <span>check before you leave</span>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md="12" xs="12" className="div-pos">

                    <div className="cardxxl">
                        <Row>
                            <Col >
                                <input type="checkbox" checked={check1} onChange={()=> setCheck1(!check1)} />
                                <span className="document_name">Name of the document</span>
                            </Col>
                        </Row>
                        <Row>
                            <ul style={{listStyleType:"none"}}>
                                <li> <input type="checkbox" checked={check1}/> Some point to check</li>
                                <li> <input type="checkbox" checked={check1} /> Some point to check</li>
                                <li> <input type="checkbox" checked={check1} /> Some point to check</li>
                                <li> <input type="checkbox" checked={check1} /> Some point to check</li>
                            </ul>
                        </Row>
                    </div>


                    <div className="cardxxl">
                        <Row>
                            <Col >
                                <input type="checkbox" checked={check2} onChange={()=> setCheck2(!check2)} />
                                <span className="document_name">Name of the document</span>
                            </Col>
                        </Row>
                        <Row>
                        <ul style={{listStyleType:"none"}}>
                                <li> <input type="checkbox" checked={check2}/> Some point to check</li>
                                <li> <input type="checkbox" checked={check2} /> Some point to check</li>
                                <li> <input type="checkbox" checked={check2} /> Some point to check</li>
                                <li> <input type="checkbox" checked={check2} /> Some point to check</li>
                            </ul>
                        </Row>
                    </div>                
                </Col>
            </Row>
            <Row>
                <Col md="12" xs="12" className="div-pos">

                    <div className="cardxxl">
                        <Row>
                            <Col >
                                <input type="checkbox" checked={check3} onChange={()=> setCheck3(!check3)} />
                                <span className="document_name">Name of the document</span>
                            </Col>
                        </Row>
                        <Row>
                        <ul style={{listStyleType:"none"}}>
                                <li> <input type="checkbox" checked={check3}/> Some point to check</li>
                                <li> <input type="checkbox" checked={check3} /> Some point to check</li>
                                <li> <input type="checkbox" checked={check3} /> Some point to check</li>
                                <li> <input type="checkbox" checked={check3} /> Some point to check</li>
                            </ul>
                        </Row>
                    </div>


                    <div className="cardxxl">
                        <Row>
                            <Col >
                                <input type="checkbox" checked={check4} onChange={()=> setCheck4(!check4)} />
                                <span className="document_name">Name of the document</span>
                            </Col>
                        </Row>
                        <Row>
                            <ul>
                            <ul style={{listStyleType:"none"}}>
                                <li> <input type="checkbox" checked={check4}/> Some point to check</li>
                                <li> <input type="checkbox" checked={check4} /> Some point to check</li>
                                <li> <input type="checkbox" checked={check4} /> Some point to check</li>
                                <li> <input type="checkbox" checked={check4} /> Some point to check</li>
                            </ul>
                            </ul>
                        </Row>
                    </div>                
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
}

export default Document_checklist