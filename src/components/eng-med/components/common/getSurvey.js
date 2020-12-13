import React from 'react'
import img from '../../assets/grl.svg'

class getPlan extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="p-0 py-3 px-md-5" style={{backgroundColor:"#F9F9F9"}}>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <img src={img} className="img-fluid"/>
                    </div>
                    <div className="col-5">
                        <h1 className="d-none d-md-block">
                            Take Our survey
                        </h1>
                        <h2 className="d-block d-md-none">
                            Take Our survey
                        </h2>
                        <h4 className="d-none d-md-block">
                        Let us know about your problems in detailed manner so that we can provide you quick Support and proper guidance.
                        </h4>
                        <h6 className="d-block d-md-none">
                        Let us know about your problems in detailed manner so that we can provide you quick Support and proper guidance.
                        </h6>
                        <div className="my-5 d-none d-md-block">
                            <a href="/survey" className="btn btn-lg w-100 text-white" style={{backgroundColor:"#FF4E00"}}>
                                Take Survey
                            </a>
                        </div>
                    </div>
                    <div className="my-5 col-12 d-block d-md-none">
                            <a href="/survey" className="btn btn-lg w-100 text-white" style={{backgroundColor:"#FF4E00"}}>
                                Take Survey
                            </a>
                        </div>
                </div>
            </div>
        );
    }
}

export default getPlan;