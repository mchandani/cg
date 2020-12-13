import React from 'react';
import Selector from './Selector';
import Preparation from './Preparation';
class SelfAssesment extends React.Component {
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
                <div>
                    <Preparation />
                </div>
            );
        return (
        <div className="container h-100">
            <div className="row mt-5 mb-5">
                <Selector />
            </div>

            <form>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label className="font-weight-bold">For engineering aspirants, rate your performance for the JEE Main exam held in January?</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="E" value="1" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="E" value="2" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="E" value="3" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="E" value="4" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="E" value="5" />
                        </div>
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-12">
                        <label className="font-weight-bold">Compared to your preparation for the January exam, how will you rate your preparation for the coming exam?</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="F" value="1" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="F" value="2" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="F" value="3" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="F" value="4" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="F" value="5" />
                        </div>
                    </div>
                </div>


                <div className="form-row">
                        <p className="font-weight-bold col-12">What are the different problems you face during your preparation?</p>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c1" />
                            <label className="custom-control-label" for="c1">Lack of self confidence</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c2" />
                            <label className="custom-control-label" for="c2">Excessive family pressure</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c3" />
                            <label className="custom-control-label" for="c3">Not individual focus on students by teachers</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c4" />
                            <label className="custom-control-label" for="c4">Book Trap (Confusion between various available resources for preparation)</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c5" />
                            <label className="custom-control-label" for="c5">Focusing only on one subject and ignoring others</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c6" />
                            <label className="custom-control-label" for="c6">Mugging up instead of understanding topics</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c7" />
                            <label className="custom-control-label" for="c7">Not preparing short/quick notes for revision</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c8" />
                            <label className="custom-control-label" for="c8">Leaving questions upto calculations</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c9" />
                            <label className="custom-control-label" for="c9">Feeling afraid to look back at mistakes during test papers</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c10" />
                            <label className="custom-control-label" for="c10">Lack of moral guidance by seniors</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c11" />
                            <label className="custom-control-label" for="c11">Piling up of backlogs. Not pacing up with the syllabus</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c12" />
                            <label className="custom-control-label" for="c12">Forgetting formulae</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c13" />
                            <label className="custom-control-label" for="c13">Accumulation of doubts</label>
                        </div>
                        <div class="custom-control custom-checkbox col-6">
                            <input type="checkbox" className="custom-control-input" name="G" id="c14" />
                            <label className="custom-control-label" for="c14">Skipping mock tests/papers</label>
                        </div>
                </div>
           </form>     
           <div className="row mt-5">
                        <div className="col-12 d-flex">
                            <button className="btn btn-primary px-5 mx-auto" onClick={this.handleClick}>Next</button>
                        </div>
            </div> 
        </div>
        );
    }
}

export default SelfAssesment;