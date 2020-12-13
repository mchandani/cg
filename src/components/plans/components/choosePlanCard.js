import React from 'react'
import { Link } from 'react-router-dom';
class ChoosePlanCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const service = this.props.service;
        const pay = service.link;
        const type = service.type;
        const name = service.name;
        const originalPrice = service.price.original;
        const discount = service.price.discount;
        const discountedPrice = Math.floor(originalPrice-originalPrice*discount/100);

        const availabe = service.available.map((service)=>(
            <li>{service}</li>
        ))
        const style={
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            width:"350px",
            height:"500px",
            padding:"1em 2.5em 1em 2.5em",
        }

        if(name=="Standard"){
            style.color='white'
            style.backgroundColor="#181059"
        }

        return(
            <div className="my-1 m-2 m-lg-4" style={style}>
                <div className="row px-1 py-3">
                    <h5 className ="col-12 font-weight-bold">
                        {name}
                    </h5>
                    <ul className="col-12 px-5 pt-3">
                        {availabe}
                    </ul>
                    <div className="col-12 mt-2">
                        <div className="text-center font-weight-bold"><s>
                            &#x20b9;{originalPrice-1}
                        </s></div>
                        <div className="text-right mt-2">
                            <span className="px-2 text-white font-weight-bold" style={{backgroundColor:'#FF4E00',borderRadius:"10px"}}>
                                {discount}% off
                            </span>
                        </div>
                        <h2 className="font-weight-bold text-center">
                            &#x20b9;{discountedPrice-1}&nbsp;
                            <span>only</span>
                        </h2>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <a className="text-white px-5 py-2" style={{backgroundColor:'#8645FF',borderRadius:'5px',textDecoration:"none"}} href={pay} >Choose</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChoosePlanCard;