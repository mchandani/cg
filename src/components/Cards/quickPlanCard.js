import React from 'react'
import './Cards.css'

class quickPlanCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container plan-btn m-2 d-flex flex-column justify-content-center" style={{
                height:"125px",
                width:"125px"
            }}>
                <div className="text-center px-3 py-1">
                    <img src={this.props.icon} className="img-fluid"/>
                </div>
                <div className="font-weight-bold text-center" style={{fontSize:"13px"}}>
                    {this.props.desc}
                </div>
            </div>
        );
    }
}

export default quickPlanCard;