import React from 'react'
import diamond from '../assets/diamond.svg'
import QuickPlanCard from '../../Cards/quickPlanCard'

import clock from '../assets/premium/clock.png'
import support from '../assets/premium/support.svg'
import guidance from '../assets/premium/guidance.png'
import mentors from '../assets/premium/mentors.png'
import all from '../assets/premium/all.png'
import facility from '../assets/premium/facility.png'
import stats from '../assets/premium/stats.png'

const Premium = (props) => {

    const p = [
        {
            name:"24x7 Support",
            icon:clock
        },
        {
            name:props.stream=="eng"?"Branch Sliding Support":"On Ground Report",
            icon:support
        },
        {
            name:"Career Guidance",
            icon:guidance
        },
        {
            name:"Best Picked Mentors",
            icon:mentors
        },
        {
            name:"All Features Of Above Packs",
            icon:all
        },
        {
            name:"Every Facility",
            icon:facility
        },
        {
            name:props.stream=="eng"?"Placement And Intern Stats":"Current Trends",
            icon:stats
        }
    ]
        const plans = p.map((plan)=>{
            return  (
                <div>
                    <QuickPlanCard desc={plan.name} icon={plan.icon}/>
                </div>
            )
        })
        return(
            <div className="" style={{backgroundColor:"#F9F9F9"}}>
                <div className="d-flex justify-content-between">
                    <div>
                        <h1>
                            want more?
                        </h1>
                        <h1 className="font-weight-bold text-right">
                            Take Our Premium Plan
                        </h1>
                    </div>
                    <div>
                        <img src={diamond} className="mw-100"/>
                    </div>
                </div>
                <div className="">
                    <div className="row justify-content-center">
                        {plans}
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <a href="https://rzp.io/l/CGpremium" type="button" className="btn text-white font-weight-bold" style={{backgroundColor:"#8645FF", borderRadius:10 ,padding:"1em 3em 1em 3em"}}>Go Premium</a>
                </div>
            </div>
        );
    }

export default Premium;