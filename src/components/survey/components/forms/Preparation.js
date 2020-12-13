import React from 'react';
import Selector from './Selector';

class Preparation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="container h-100">
            <div className="row mt-5 mb-5">
                <Selector />
            </div>

            <form>
                <div className="form-row">
                    <div className="form-group col-12 row">
                        <p className="font-weight-bold col-12">What are the social media handles you use?</p>
                        <div className="row px-4">
                        <div class="custom-control custom-checkbox col-2">
                        <input type="checkbox" className="custom-control-input" name="H" id="c1" />
                        <label className="custom-control-label" for="c1">Facebook</label>
                        </div>
                        <div class="custom-control custom-checkbox col-2">
                        <input type="checkbox" className="custom-control-input" name="H" id="c2" />
                        <label className="custom-control-label" for="c2">Instagram</label>
                        </div>
                        <div class="custom-control custom-checkbox col-2">
                        <input type="checkbox" className="custom-control-input" name="H" id="c3" />
                        <label className="custom-control-label" for="c3">Whatsapp</label>
                        </div>
                        <div class="custom-control custom-checkbox col-2">
                        <input type="checkbox" className="custom-control-input" name="H" id="c4" />
                        <label className="custom-control-label" for="c4">Snapchat</label>
                        </div>
                        <div class="custom-control custom-checkbox col-2">
                        <input type="checkbox" className="custom-control-input" name="H" id="c5" />
                        <label className="custom-control-label" for="c5">Quora</label>
                        </div>
                        <div class="custom-control custom-checkbox col-2">
                        <input type="checkbox" className="custom-control-input" name="H" id="c6" />
                        <label className="custom-control-label" for="c6">Do not have smartphone </label>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-12">
                        <label className="font-weight-bold">Rate the online classes and reading material during this lockdown</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="I" value="1" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="I" value="2" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="I" value="3" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="I" value="4" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="I" value="5" />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                        <p className="col-12 font-weight-bold">Do you want guidance from mentors currently in IITs/NITs and Medical Colleges?</p>
                        <div className="form-group col-12">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="firstTime" id="yes" value="yes" />
                                <label className="font-weight-bold" className="form-check-label" for="yes">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="firstTime" id="no" value="no" />
                             <label className="font-weight-bold" class="form-check-label" for="no">No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="firstTime" id="no" value="no" />
                             <label className="font-weight-bold" class="form-check-label" for="no">Maybe</label>
                            </div>
                        </div>
                </div>

                <div className="form-row">
                        <div className="form-group col-12">
                            <label className="font-weight-bold" for="coaching">Do you know about JoSAA and other Counselling procedures.</label>
                            <select id="exam" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                </div>

                <div className="form-row">
                        <div className="form-group col-12">
                            <label className="font-weight-bold" for="name">Write down the questions you want to ask to them</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                </div>


                <div className="row">
                        <div className="col-12 d-flex">
                            <button className="btn btn-primary px-5 mx-auto">Submit</button>
                        </div>
                </div>
           </form>     
        </div>
        );
    }
}

export default Preparation;