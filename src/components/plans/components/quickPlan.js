import React from 'react'
import QuickPlanCard from '../../Cards/quickPlanCard'

import meet from '../assets/quickplan/meet.png'
import mentor from '../assets/quickplan/mentor.png'
import career from '../assets/quickplan/career.png'
import choice from '../assets/quickplan/choice.png'
import docs from '../assets/quickplan/docs.png'
import branch from '../assets/quickplan/branch.png'

class QuickPlan extends React.Component{
    render(){
        return(
            <div className="py-1 py-md-5 my-5" style={{
                backgroundColor:'#F9F9F9',
            }}>
                <div className="row">

                    <h1 className="col-12 col-lg-2 py-5 d-flex flex-column justify-content-center align-items-center">
                       <div>Quick Plan</div>
                    </h1>

                    <div className="col-12 col-lg-10">
                        <div className="row">
                            <div className="col-6 col-sm-4 col-xl-2">
                                <QuickPlanCard desc="Personal Virtual meeting (1Hour)" icon={meet}/>
                            </div>
                            <div className="col-6 col-sm-4 col-xl-2">
                                <QuickPlanCard desc="Mentor-Neet Ranker" icon={mentor}/>
                            </div>
                            <div className="col-6 col-sm-4 col-xl-2">
                                <QuickPlanCard desc="Career Guidance" icon={career}/>
                            </div>
                            <div className="col-6 col-sm-4 col-xl-2">
                                <QuickPlanCard desc="Choice Filling" icon={choice}/>
                            </div>
                            <div className="col-6 col-sm-4 col-xl-2">
                                <QuickPlanCard desc="Doncumentation" icon={docs}/>
                            </div>
                            <div className="col-6 col-sm-4 col-xl-2">
                                <QuickPlanCard desc="Branch-College Dilema" icon={branch}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-center mt-5">
                        <a href="https://rzp.io/l/CGquick99" className="px-5 btn btn-primary btn-lg text-white" style={{borderRadius:"5px"}}>Get Now</a>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default QuickPlan;