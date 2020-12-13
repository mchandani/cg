import React from 'react'
import ScrollMenu from './scrollMenu';

class Branches extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="" style={{
                padding:"0 20% 0 20%"
            }}>
                <div className="" style={{
                    color:"#59549A",
                }}>
                    <h3 className="px-5">
                        {this.props.heading}
                    </h3>
                </div>
                <div>
                    <ScrollMenu />
                </div>
            </div>
        );
    }
}

export default Branches