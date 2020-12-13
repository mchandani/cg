import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../homepage_assets/logo.svg'
import { Icon } from 'react-icons-kit';
import { bars, times } from 'react-icons-kit/fa/';
import { Row, Col } from 'reactstrap'

import  "./NavBar.css";
function pageScroll() {
    window.scrollBy(0,4850); // horizontal and vertical scroll increments
    
}

function NavBar() {
    const [showSidebar, setShowSidebar] = useState(true);
    const [hideButtons, setHideButtons] = useState(false);
    const history = useHistory()
    
    return (
        <Row style={{boxShadow: "0px 3px 6px #00000029"}}>
            <Col md="7" xs="8" >
                <div style={{cursor:"pointer"}} onClick={()=>history.push('/')}>
                    <img className="logoxl" src={logo} alt="logo" />
                    <text className="cghead">Counselling Gurus</text>
                </div>
            </Col>
            <Col md="5" xs="4" className={showSidebar === true ? "sidebar":"colxl"} >
                {hideButtons === true ?
                    <Icon  onClick={() => setShowSidebar(!showSidebar) & setHideButtons(!hideButtons)}  className="barsIcon" icon={bars} /> :
                    <Icon onClick={() => setShowSidebar(!showSidebar) & setHideButtons(!hideButtons)} className="barsIcon" icon={times} />}
                <button onClick={() => history.push('/engineering/1')} className={hideButtons === true ? "hidebtn" : "btnxl"}>Engineering</button>
                <button onClick={() => history.push('/medical/2')} className={hideButtons === true ? "hidebtn" : "btnxl"}>Medical</button>
                <button onClick={() => history.push('/plans')} className={hideButtons === true ? "hidebtn" : "btnxl"}>Plans</button>
                <button onClick={() => history.push('/switcher')} className={hideButtons === true ? "hidebtn" : "btnxl"}>Login</button>
                <button onClick={pageScroll}  className={hideButtons === true ? "hidebtn" : "btnxl orangebtn"}>Contact Us</button>
            </Col>
        </Row>
    )
}

export default NavBar;