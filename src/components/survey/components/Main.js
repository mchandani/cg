import React from 'react'
import Landing from './Landing'
import GeneralDetails from './forms/GeneralDetails'
import { Responsive } from './Responsive'

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{
                height:"100vh",
            }}>
                <Responsive displayIn={["Laptop"]}>
                    <div className="row p-0">
                        <div className="bg-danger col-4 p-0">
                            <Landing />
                        </div>
                        <div className="col-8 p-0">
                            <GeneralDetails />
                        </div>
                    </div>
                </Responsive>

                <Responsive displayIn={["Tablet"]}>
                    <div className="row p-0">
                        <div className="col-12 p-0">
                            <Landing />
                        </div>
                    </div>
                </Responsive>

                <Responsive displayIn={["Mobile"]}>
                    <div className="row p-0">
                        <div className="col-12 p-0">
                            <Landing />
                        </div>
                    </div>
                </Responsive>
            </div>
        );
    }
}

export default Main;