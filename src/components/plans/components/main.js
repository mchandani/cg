import React from 'react'
import Navbar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import QuickPlan from './quickPlan'
import ChoosePlans from './choosePlans'
import Premium from './premium'

import bgGradiend from '../assets/bgGrad.svg'
import teachIcon from '../assets/teach.svg'

class Plans extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar />
                <div className="row" style={{
                    backgroundImage: `url(${bgGradiend})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    height:"93vh",
                    
                }}>
                    <div className="p-2 p-md-5">
                    <div className="row">
                        <div className="col-12 col-md-6 px-2">
                            <h1 className="text-white">
                                One More <br />
                                Step To Your Dream
                            </h1>
                            <h4 className="text-white mt-4 mt-md-5 d-none d-md-block">
                                Various students have different needs so we have created a range of plans to cater your needs in most efficient and affordable manner.
                            </h4>
                            <h5 className="text-white mt-4 mt-md-5 d-block d-md-none">
                                Various students have different needs so we have created a range of plans to cater your needs in most efficient and affordable manner.
                            </h5>
                            <div style={{marginTop:"50%"}} className="d-flex justify-content-center d-md-block">
                                <a href="#sec2" className="btn text-white" style={{backgroundColor:"#FF4E00", borderRadius:50 ,padding:"1em 3em 1em 3em"}}>View Plans</a>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-6">
                            <img src={teachIcon} className="img-fluid mw-100"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="sec2">
                    <QuickPlan />
                </div>
                
                <div className="px-2 my-5">
                    <ChoosePlans />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Plans;