import React from 'react'
import './Rank_display.css'
import Rec1179 from '../Rank_display/rank_display_assets/Rectangle 1179.svg'
import Rec1180 from '../Rank_display/rank_display_assets/Rectangle 1180.svg'
import Trophy from '../Rank_display/rank_display_assets/Group 1622.svg'
import {Row,Col} from 'reactstrap'
import { Icon } from 'react-icons-kit';
import {  times } from 'react-icons-kit/fa/';
import {useHistory} from 'react-router-dom'
import {fetchData} from '../College_data/College_data'
function College_predictor(){
    
     const history=useHistory()
    
    return(
        
        <div className="parDiv">
            <div className="childDiv">
                <img className="img-w" style={{position:"absolute"}} src={Rec1179} alt= "rec1179" />
                <Row style={{padding:"35px 8px 8px 8px"}}>
                    <Col style={{textAlign:"center"}}>
                        <Row style={{padding:"8px 30px"}}>
                            <Col>
                                <img style={{width:"100px",height:"100px"}} src={Trophy} />
                                <Icon style={{right:"0",position:"absolute",marginTop:"-20px"}} icon={times} size="25"  />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span style={{fontWeight:"700"}}>
                                    Your Rank Would Be Around
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span style={{fontSize:"75px",fontWeight:"650"}}>3500</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span style={{fontWeight:"500"}}>Want To Know What Colleges You Would Get?</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button onClick={()=>history.push('/college_data')} className=" vcbtn">VIEW COLLEGES</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <img className="img-w" style={{float:"right"}} src={Rec1180} alt= "rec1179" />
            </div>
        </div>
    );
}

export default College_predictor;