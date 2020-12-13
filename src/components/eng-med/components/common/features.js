import React from "react";
import QuickPlanCard from "../../../Cards/quickPlanCard";
import "./style.css";

import clock from "../../assets/features/clock.png";
import support from "../../assets/features/support.svg";
import guidance from "../../assets/features/guidance.png";
import mentors from "../../assets/features/mentors.png";
import rank from "../../assets/features/rank.svg";
import college from "../../assets/features/college.svg";
import branch from "../../assets/features/branch.png";
import doc from "../../assets/features/doc.png";
import analytics from "../../assets/features/analytics.svg";
import compare from "../../assets/features/compare.svg";
import scolar from "../../assets/features/scolar.svg";
import loans from "../../assets/features/loans.svg";
import playstore from "../../assets/playstore.png";
const features = (props) => {
    console.log(props.stream);
  const f = [
    {
      name: "24x7 Support",
      icon: clock,
    },
    {
      name: "Branch Sliding Support",
      icon: support,
    },
    {
      name: "Career Guidance",
      icon: guidance,
    },
    {
      name: "Best Picked Mentors",
      icon: mentors,
    },
    {
      name: props.stream==1?"Jee Rank Predictor" : "Neet Rank Predictor",
      icon: rank,
    },
    {
      name: "College Predictor",
      icon: college,
    },
    {
      name: "Branches Info",
      icon: branch,
    },
    {
      name: "Document Verification",
      icon: doc,
    },
    {
      name: "Colleges data and rankings",
      icon: analytics,
    },
    {
      name: "College Comparator",
      icon: compare,
    },
    {
      name: "Scolarships",
      icon: scolar,
    },
    {
      name: "Loans",
      icon: loans,
    },
  ];
  const features = f.map((feature) => {
    return (
      <div className="m-0 m-sm-3 m-lg-5">
        <QuickPlanCard desc={feature.name} icon={feature.icon} />
      </div>
    );
  });
  let link;
  if(props.stream == 1){
    link = "https://play.google.com/store/apps/details?id=com.counselling_gurus_eng.counselling_gurus"
  }else{
    link = "https://play.google.com/store/apps/details?id=com.counsellinggurus.counselling_gurus_medical"
  }
  return (
    <div className="px-sm-0 px-md-5" style={{ backgroundColor: "#F9F9F9" }}>
      <div className="pt-5">
        <h1 className="font-weight-bold text-center pt-5">Our Features</h1>
      </div>
      <div className="text-center">
          <a href={link}>
              <img className="img-fluid" src={playstore} />
          </a>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row justify-content-center break-width">{features}</div>
      </div>
    </div>
  );
};

export default features;
