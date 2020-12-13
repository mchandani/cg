import React from 'react';
import Selector from './Selector';
import SelfAssesment from './SelfAssesment';
class GeneralDetails extends React.Component {
    constructor(props) {
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
    render() {
        if(this.state.next)
            return(
                <div className="h-100">
                    <SelfAssesment />
                </div>
            );
        return (
            <div className="container h-100">
                <div className="row mt-5 mb-5">
                    <Selector />
                </div>

                <form>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label className="font-weight-bold" for="name">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label className="font-weight-bold" for="contact">Contact No</label>
                            <input type="number" className="form-control" id="contact" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label className="font-weight-bold" for="email">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label className="font-weight-bold" for="city">City</label>
                            <input type="text" className="form-control" id="city" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-12">
                            <label className="font-weight-bold" for="exam">Which of the competitive exams are you preparing for?</label>
                            <select id="exam" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-12">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="firstTime" id="yes" value="yes" />
                                <label className="font-weight-bold" className="form-check-label" for="yes">Yes, I am a fresher</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="firstTime" id="no" value="no" />
                             <label className="font-weight-bold" class="form-check-label" for="no">No, I am a dropper</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label className="font-weight-bold" for="coaching">Coaching/Tutions</label>
                            <select id="exam" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label className="font-weight-bold" for="college">Which is your Dream College and Branch ?</label>
                            <input type="text" className="form-control" id="college" />
                        </div>
                    </div> 

                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label className="font-weight-bold" for="college">Which is your Dream College and Branch ?</label>
                            <input type="text" className="form-control" id="college" />
                        </div>
                    </div>                  
                </form>

                <div className="row">
                        <div className="col-12 d-flex">
                            <button className="btn btn-primary px-5 mx-auto" onClick={this.handleClick}>Next</button>
                        </div>
                </div> 
            </div>
        );
    }
}

export default GeneralDetails;