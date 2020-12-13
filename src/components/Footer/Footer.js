import React from 'react'
import './Footer.css'
import { Icon } from 'react-icons-kit';
import { facebook, youtubePlay, phone, envelope, instagram} from 'react-icons-kit/fa/';
import play from './playstore.png'
import { Row, Col } from 'reactstrap'
import logo from '../homepage_assets/logo.svg'
import {useHistory} from 'react-router-dom'
function Footer() {
    const history = useHistory()
    return (
        <div style={{ backgroundColor: "#2b1c57" , padding:"20px 0px" }}>
            <Row>
                <Col md="5" style={{ textAlign: "center" }}>
                    <img className="logoxl" src={logo} alt="logo" />
                    <span style={{ color: "white" ,fontSize:"30px"}} className="cghead font-weight-bold">Counselling Gurus</span>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <p style={{ color: "white" }}>Subscribe to our newsletter to get latest educational updates</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col md="7">
                            <input type="email" style={{ width: "100%", color: "#bfbacc", border: "1px solid #4f639d", backgroundColor: "transparent", padding: "6px 20px" }} placeholder="Email Address" />
                        </Col>
                        <Col md="5">
                            <button className="subsBtn">Subscribe</button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ color: "white" }}>
                <Col xs="6" md="2">
                    <Row>
                        <Col style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            
                            <span className="headingxl">Visit Us</span>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Motilal Nehru National Institute Of Technology,Prayagraj-211004.
                        </Col>
                    </Row>
                </Col>
                <Col xs="6" md="2" style={{textAlign:"center"}}>
                    <Row>
                        <Col >
                            
                            <span className="headingxl">Features</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col > 
                            <button onClick={()=>history.push('/engineering')} className="footbtn">Engineering</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <button onClick={()=>history.push('/medical')} className="footbtn">Medical</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <button onClick={()=>history.push('/plans')} className="footbtn">Plan</button>
                        </Col>
                    </Row>
                    
                </Col>

                
                <Col md="4" xs="12">
                    <Row>
                        <Col>
                            <span className="headingxl">Contact Us</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex"}}>
                            <Icon size="18" icon={phone} />
                            <div><span className="smallerFont">Give us a missed call at <br/>888-256-5858</span></div>
                            
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Icon size="15" icon={envelope} />
                            <span className=" mailSpan smallerFont">contact@counsellinggurus.in</span>
                        </Col>
                    </Row>
                    
                </Col>
                <Col md="3" xs="12">
                    <Row>
                        <Col style={{textAlign:"center"}}>
                            <span className="headingxl font-weight-bold" style={{fontSize:"25px"}}>Connect with Us</span>
                        </Col>
                    </Row>
                    <Row>
                        <a href="https://linktr.ee/cgapp"><img src={play} className="img-fluid"/></a>
                    </Row>
                    <Row>
                        <Col className="iconPos" >
                            <a href="http://www.facebook.com/counsellinggurus"><Icon style={{color:"white"}} icon={facebook} size="25" /></a>
                            <a href="https://www.youtube.com/channel/UCRd0rqiEdIBBiJtzPh8S0Lw"><Icon style={{color:"white"}} icon={youtubePlay} size="25" /></a>
                            <a href="http://www.instagram.com/counsellinggurus"><Icon style={{color:"white"}} icon={instagram} size="25" /></a>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    )
}

export default Footer;