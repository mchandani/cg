import React from 'react'
import img from '../../assets/tutor image.png'
import { auto } from 'async';

class Mentors extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className="text-center p-5 font-weight-bold">
                    Mentor From Your Dream College
                </h1>
                <div className="p-5 mb-5 text-center mx-auto">
                    <img src={img} style={{
                        maxWidth:"75%",
                        height:auto
                    }}/>
                </div>
            </div>
        );
    }
}

export default Mentors;