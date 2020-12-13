import React from 'react'
import logo from '../assets/logo.png'
import bg from '../assets/bg.png'
import GeneralDetails from './forms/GeneralDetails'

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    state={
        next:false,
    }
    handleClick(){
        this.setState({
            next:true
        })
    }
    render(){
        if(this.state.next)
            return(
                <div>
                    <GeneralDetails />
                </div>
            );
        return(
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition : 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color:'white',
                height:"100vh"
            }}>
                <div className="row justify-content-center">
                    <div className="col-3">
                        <img className="img-fluid" src = {logo}/>
                    </div>
                    <h4 className="col-4">
                        Counselling Gurus
                    </h4>
                </div>
                    
                <div style={{marginTop:"50%"}} className="row justify-content-center">
                    <h2 className="col text-center">
                        Survey for JEE/NEET 2020 Aspirants.
                    </h2>
                </div>

                <div className="row my-5">
                    <h4 className="col text-center px-5">
                    A team of IITians/ NITians/Medical students are leading this initiative. Just help us to get the problems you are facing and get mentored by experts.
                    </h4>
                </div>

                <div className="row">
                        <div className="col-12 d-flex d-lg-none">
                            <button class="btn btn-primary px-5 mx-auto" onClick={this.handleClick}>Next</button>
                        </div>
                </div> 
            </div>
        );
    }
}

export default Landing;