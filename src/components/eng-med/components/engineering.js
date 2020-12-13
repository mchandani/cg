import React from 'react';
import Navbar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import Featues from './common/features'
import Mentors from './common/mentors'
import GetPlans from './common/getPlans'
import GetSurvey from './common/getSurvey'
import engIcon from '../assets/eng.svg'
import '../components/common/style.css'
import { useParams } from 'react-router-dom';
const landing_style = {
    
}
const Engineering = () => {

    const { type } = useParams();
        return(
            <div className="container-fluid">
                <Navbar />
                <div>
                <div className="row">
                    <div className="d-none d-lg-block col-4 text-center offset-1">
                        <img src={engIcon} className="img-fluid mw-100"/>
                    </div>
                    <div className="col-12 col-lg-6 px-2 offset-md-1">
                        <h1 className="my-5 font-weight-bold d-none d-md-block">
                            JEE 2020<br /> College admissions.<br/>All solutions at one place.
                        </h1>
                        <h2 className="my-5 font-weight-bold d-md-none">
                            JEE 2020<br /> College admissions.<br/>All solutions at one place.
                        </h2>
                        <h4 className="d-none d-md-block">
                            As you enter your dream college, you also step into the outside world as an independent adult. You are ready to change the world. But to change the world, you need to get the right college through proper counselling. So, what are you waiting for? Select a plan and get ready to bring a change!
                        </h4>
                        <h6 className="d-md-none">
                            As you enter your dream college, you also step into the outside world as an independent adult. You are ready to change the world. But to change the world, you need to get the right college through proper counselling. So, what are you waiting for? Select a plan and get ready to bring a change!
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

export default Engineering;