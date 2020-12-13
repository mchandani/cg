import React from 'react'

class Selector extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4 d-flex align-items-center">
                        <button class="btn btn-primary rounded-circle">1</button>&nbsp;&nbsp;
                        <b>General Details</b>
                    </div>
                    <div className="col-4 d-md-flex align-items-center">
                        <button class="btn btn-primary rounded-circle">2</button>&nbsp;&nbsp;
                        <b>Self Assesment</b>
                    </div>
                    <div className="col-4 d-md-flex align-items-center">
                        <button class="btn btn-primary rounded-circle">3</button>&nbsp;&nbsp;
                        <b>Preparation</b>
                    </div>
                </div>
            </div>
        );
    }
}

export default Selector;