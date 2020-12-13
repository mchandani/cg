import React from 'react';
import '../assets/styles.css'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import { useParams } from 'react-router-dom';
import Circle from './circle';  
import { medBranches, engBranches } from '../apicall'

function Branch (){

        let { type } = useParams();
        let branches = [];
        if(type=="eng"){
            branches = engBranches;
        }else if(type=="med"){
            branches = medBranches;
        }

        let i=1;
        const brachesComponenets = branches.map( (branch) => {
            return Circle(branch['Branch Name'], branch['PPT Link'],`i${i++}`);
        })
        return(
            <div className="container-fluid" style={{
                backgroundColor:"#F4F4FA",
                height:"100%"
            }}>
                <div className="row d-flex w-100 justify-content-center">
                    <div className='p-5 w-100 text-center'>
                        <img src={logo} className="img-fluid w-25"/>
                    </div>
                </div>

                <div className="row d-flex w-100 justify-content-center">
                    <div className='p-5'>
                        <div className="d-flex align-items-center" style={{
                            height:"40px",
                            boxShadow :"5px 10px #dae0eb",
                            border:"10px"
                        }}>
                            {/* <input className="h-100" style={{
                                height:"30px",
                                width:"350px",
                                border:"solid 2px",
                                borderRadius:"10px",
                            }}/>
                            <button className="p-1" style={{
                                border:"solid 2px",
                                borderRadius:"10px",
                                backgroundColor:"#FF0869",
                            }}>
                                <img src={search} style={{
                                    width:"30px",
                                    height:"30px",
                                }}/>
                            </button>  */}
                        </div>
                    </div>
                </div>

                <div className="mt-5 row container mx-auto justify-content-center">
                    {brachesComponenets}
                </div>

            </div>
        );
    }

export default Branch;