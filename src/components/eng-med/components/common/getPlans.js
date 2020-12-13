import React from 'react'
import img from '../../assets/bulleye.png'

class getPlan extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="p-2 p-md-5" style={{backgroundColor:"#F9F9F9"}}>
                <div className="row">
                    <div className="col-6 d-none d-md-block">
                        <img src={img} className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="font-weight-bold my-5">
                            why take our plan?
                        </h2>
                        <h4 className="d-none d-md-block">
                            <ul>
                                <li>Well Researched Data</li>
                                <li>Experienced Mentors</li>
                                <li>Quick Support</li>
                                <li>Career Guidance</li>
                                <li>Campus Networking</li>
                            </ul>
                        </h4>
                        <h6 className="d-block d-md-none">
                            <ul>
                                <li>Well Researched Data</li>
                                <li>Experienced Mentors</li>
                                <li>Quick Support</li>
                                <li>Career Guidance</li>
                                <li>Campus Networking</li>
                            </ul>
                        </h6>
                        <div className="row justify-content-around my-5">
                            <a href="/plans" className="btn text-white btn-lg col-12 col-md-6 m-1" style={{backgroundColor:"#FF4E00",width:"40%",borderRadius:"50px"}}>View Pricing</a>
                            {/* <a href="/plans" className="btn btn-lg border col-12 col-md-6 m-1" style={{width:"40%",borderRadius:"50px"}}>FAQs</a> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default getPlan;