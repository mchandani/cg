import React from 'react';
import wand from '../assets/magic-wand.svg'
import plant from '../assets/plant.svg'
import outline from '../assets/Outline.svg'
import { useParams } from 'react-router-dom';

import { services_jee,services_neet } from '../assets/plans_info'
function ConfirmPayment(){
        let { plan,stream } = useParams();
        let str;
        if(stream=="med")
            str="Medical"
        else if(stream=="eng")
            str="Engineering"
        let amt;
        if(plan=="Starter"){
            let o = services_jee[0].price.original;
            let d = services_jee[0].price.discount;
            amt = (100-d)*o/100 - 1;
        }
        else if(plan=="Standard"){
            let o = services_jee[1].price.original;
            let d = services_jee[1].price.discount;
            amt = (100-d)*o/100 - 1;
        }
        else if(plan=="Enhanced"){
            let o = services_jee[1].price.original;
            let d = services_jee[1].price.discount;
            amt = (100-d)*o/100 - 1;
        }
        return(
            <div className="row">
                <div className="col-6">
                    <div>
                        <h1 className="font-weight-bold">
                            all set to <span style={{color:"#0051BA"}} >go!</span>
                        </h1>
                        <div className="d-flex">
                            <h2 style={{color:"#0051BA"}}>Welcome To CG Family</h2>
                            <img src={wand}/>
                            <h3>kuch meethi meethi bate like we will be together till end ya fir esa hi kuch ya fir forget all your tension now</h3>
                        </div>
                        <div className="d-flex">
                            <h2 style={{color:"#0051BA"}}>Plant my tree - Give Back To Nature</h2>
                            <img src={plant}/>
                            <h3>Take any of our plan and we will plant a tree by your name. For more details, visit - https://plantmytree.co.in/</h3>
                        </div>
                        <div className="d-flex">
                            <h2 style={{color:"#0051BA"}}>Terms And Conditions</h2>
                            <img src={outline}/>
                            <h3>Fees is not totally refundable in any case.</h3>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div>
                        <h2 className="font-weight-bold">Payment Details</h2>
                        <form>
                            <div className="form-group">
                                <label for="amount">Amount</label>
                                <input type="text" className="form-control" readOnly id="amount" value={amt}/>
                            </div>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" readOnly id="name"/>
                            </div>
                            <div className="form-group">
                                <label for="stream">Stream</label>
                                <input type="text" className="form-control" readOnly id="stream" value={str}/>
                            </div>
                            <div className="form-group">
                                <label for="air">All India Rank</label>
                                <input type="text" className="form-control" placeholder="Enter Your AIR" id="air"/>
                            </div>
                            <div className="form-group">
                                <label for="category">Category</label>
                                <select className="form-control" id="category"> 
                                    <option>select category</option>
                                    <option>GEN</option>
                                    <option>EWS</option>
                                    <option>SC</option>
                                    <option>ST</option>
                                    <option>OBC</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="coupon">Coupon Code</label>
                                <input type="text" className="form-control" placeholder="enter coupon code if any" id="coupon"/>
                            </div>
                            <div>
                                <button type="submit" className="btn px-3 text-white" style={{backgroundImage:"linear-gradient('91deg, #0051BACF 0%, #0658BF 100%')"}}>Pay ₹499.00</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

export default ConfirmPayment