import React from 'react'

class branchCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container" style={{
                height:"230px",
                width:"150px",
            }}>
                <div className="row bg-primary" style={{
                    height:'80%',
                    borderRadius:"25px 25px 0px 0px",
                }}>

                </div>
                <div className="row bg-danger" style={{
                    height:'20%',
                    borderRadius:"0px 0px 25px 25px",
                }}>
                    <div className="col-2">
                        
                    </div>
                    <div className="col-10">
                        
                    </div>
                </div>
            </div>
        );
    };
}

export default branchCard;