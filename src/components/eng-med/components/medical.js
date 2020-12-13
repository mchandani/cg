import React from 'react';
import Navbar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import Featues from './common/features'
import Mentors from './common/mentors'

import GetPlans from './common/getPlans'
import GetSurvey from './common/getSurvey'

import docIcon from '../assets/doc.svg'

import { useParams } from 'react-router-dom'
import '../components/common/style.css'
const landing_style = {
    
}
const Medical = () => {

    const { type } = useParams();
        return(
            <div className="container-fluid">
                <Navbar />
                <div>
                <div className="row">
                    <div className="d-none d-lg-block col-4 text-center offset-1">
                        <img src={docIcon} className="img-fluid mw-100"/>
                    </div>
                    <div className="col-12 col-lg-6 px-2 offset-md-1">
                        <h1 className="my-5 font-weight-bold d-none d-md-block">
                            NEET 2020<br /> College admissions.<br/>All solutions at one place.
                        </h1>
                        <h2 className="my-5 font-weight-bold d-md-none">
                            NEET 2020<br /> College admissions.<br/>All solutions at one place.
                        </h2>
                        <h4 className="d-none d-md-block">
                            Counselling is the most important step in the journey to your dream college. Don’t let this be the stumbling block in your success. Select a plan now and get the right guidance from seasoned experts!
                        </h4>
                        <h6 className="d-md-none">
                            Counselling is the most important step in the journey to your dream college. Don’t let this be the stumbling block in your success. Select a plan now and get the right guidance from seasoned experts!
                        </h6>
                        <div className="my-5 py-0 py-md-5 d-flex justify-content-center d-md-block">
                            <a type="button" href="#features" className="btn text-white px-4 py-2 px-md-5 py-md-3" style={{backgroundColor:"#FF4E00", borderRadius:50}}>OUR FEATURES</a>
                        </div>
                    </div>
                </div>
                </div>

                <div id="features">
                    <Featues stream={type}/>
                </div>
                <Mentors />
                <GetPlans />
                <GetSurvey />
                <Footer />
            </div>
        );
    }

export default Medical;