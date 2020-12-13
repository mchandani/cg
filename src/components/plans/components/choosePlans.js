import React from "react";
import ChoosePlanCard from "./choosePlanCard";

import eng from "../assets/architect.svg";
import med from "../assets/stethoscope.svg";
import '../assets/btn.css'

import Premium from './premium'
import { services_neet, services_jee } from "../assets/plans_info";

class ChoosePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "eng",
      styleMed : {
        width: "125px",
        backgroundColor:"rgba(0, 0, 0, 0.2)"
      },
      styleEng : {
        width: "125px",
        backgroundColor:"rgba(199, 199, 199, 0.336)"
      }
    };
    this.setMed = this.setMed.bind(this);
    this.setEng = this.setEng.bind(this);
  }
  setMed() {
    this.setState((state) => {
      return {
         type: "med",
         styleMed : {
          width: "125px",
          backgroundColor:"rgba(0, 0, 0, 0.2)"
         },
         styleEng : {
          width: "125px",
          backgroundColor:"rgba(199, 199, 199, 0.336)"
        }
     };
    });
  }
  setEng() {
    this.setState((state) => {
      return {
         type: "eng",
         styleMed : {
          width: "125px",
          backgroundColor:"rgba(199, 199, 199, 0.336)"
         },
         styleEng : {
          width: "125px",
          backgroundColor:"rgba(0, 0, 0, 0.2)"
        }
     };
    });
  }
  render() {
    let services = [];
    if (this.state.type == "med") services = services_neet;
    else services = services_jee;
    let btnStyleEng = {
        widht:"75px"
    }
    let btnStyleMed = {
        widht:"75px"
    }
    return (
      <div>
        <div className="row">
          <h1 className="col-12 font-weight-bold text-center py-5 d-none d-md-block">
            Choose From Plans
          </h1>
          <h2 className="col-12 font-weight-bold text-center py-5 d-block d-md-none">
            Choose From Plans
          </h2>
        </div>
        <div className="row justify-content-center text-center">
            <div
              className="mr-1 mx-md-5 me-btn"
              style={this.state.styleEng}
              onClick={this.setEng}
            >
              <div>
                <img src={eng} style={{ width: "75px", height: "100px" }} />
              </div>
              <h6 className="font-weight-bold text-center">Engineering</h6>
            </div>

            <div
              className="ml-1 mx-md-5 me-btn"
              style={this.state.styleMed}
              onClick={this.setMed}
            >
              <div>
                <img src={med} style={{ width: "75px", height: "100px" }} />
              </div>
              <h6 className="font-weight-bold text-center">Medical</h6>
            </div>
            
          </div>
        <div className="d-flex flex-wrap justify-content-center px-5">
          <div className="">
            <ChoosePlanCard service={services[0]} />
          </div>
          <div className="">
            <ChoosePlanCard service={services[1]} />
          </div>
          <div className="">
            <ChoosePlanCard service={services[2]} />
          </div>
        </div>

        
        <Premium stream={this.state.type}/>
      </div>
    );
  }
}

export default ChoosePlan;
