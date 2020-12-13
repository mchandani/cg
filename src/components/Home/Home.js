import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
import backimg from "../homepage_assets/landingbackground.png";
import { Icon } from "react-icons-kit";
import { search, quoteLeft } from "react-icons-kit/fa/";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import UndrawPie from "../homepage_assets/undraw_pie_chart.svg";
import UndrawSetup from "../homepage_assets/undraw_setup.svg";
import Group from "../homepage_assets/Group 788.svg";
import Scene from "../homepage_assets/9 SCENE.svg";
import Layer2 from "../homepage_assets/Layer 2.svg";
import Group16 from "../homepage_assets/Group 16.svg";
import Student from "../homepage_assets/student.svg";
import { Typography } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import CountUp from "react-countup";
import { Link } from 'react-router-dom'
class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <NavBar />

        <div
          className="imgxl"
          style={{
            backgroundImage: `url(${backimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "91.7vh",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              background:
                "transparent linear-gradient(269deg, #0051BA3D 0%, #00295DC7 100%) 0% 0% no-repeat padding-box",
              opacity: "1",
            }}
          >
            <div className="divxl h-50">
              <div className="row h-100">
                <div className="col-12  col-lg-6">
                  <h1 className="fontxl m-4">
                    Don't Lose Your Dream{" "}
                    <span style={{ color: "#FF4E00", fontWeight: "bold" }}>
                      College
                    </span>{" "}
                  </h1>
                  <h4 className="m-4">
                    Many Students Lose Their Dream College Due To Wrong Choice
                    Filling And Make Mistakes In The Counselling Process
                    <br /> <span style={{ color: "yellow" }}>Don't</span> Let
                    That Happen To You{" "}
                  </h4>
                  <a
                    href="https://rzp.io/l/cgplans"
                    className="m-4 orangebtn orangebtnxl font-weignt-bold d-block text-decoration-none text-white"
                    style={{
                      marginTop: "20px",
                      width: "200px",
                      padding: "10px",
                    }}
                  >
                    Call A Mentor Now
                  </a>
                  <div className="col-12 col-lg-6 d-flex justify-content-center d-block d-lg-none">
                    <iframe
                      height="280px"
                      className="w-100"
                      src="https://www.youtube.com/embed/rnLZMI_P1ek?autoplay=1"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6 text-right d-none d-lg-block">
                  <iframe
                    className="w-75 h-100"
                    src="https://www.youtube.com/embed/rnLZMI_P1ek?autoplay=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="rowxl">
          <Col>
            <Row>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                md="6"
                xs="12"
              >
                <div className="cardxs">
                  <img className="imgxs" src={Group16} alt="group16" />
                  <div>
                    <Typography color="textPrimary"> Data</Typography>
                  </div>
                  <div>
                    <Typography color="textSecondary">
                      Get well researched data related to patterns and trends
                      over the years. Understand the whole process in great
                      detail with the help of statistics and data!{" "}
                    </Typography>
                  </div>
                </div>
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                md="6"
                xs="12"
              >
                <div className="cardxs">
                  <img
                    className="imgxs"
                    style={{ width: "40px" }}
                    src={Student}
                    alt="student"
                  />
                  <div>
                    <Typography color="textPrimary">Expert Mentors</Typography>
                  </div>
                  <div>
                    <Typography color="textSecondary">
                      What’s better than getting guidance from the people who
                      have done it all? Our expert mentors have been guiding
                      students for a long time and are the right people to lead
                      you towards your dream.{" "}
                    </Typography>
                  </div>
                </div>
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                md="6"
                xs="12"
              >
                <div className="cardxs">
                  <img className="imgxs" src={Group16} alt="group16" />
                  <div>
                    <Typography color="textPrimary">We Know Better</Typography>
                  </div>
                  <div>
                    <Typography color="textSecondary">
                      Our numerous students have gone on to study in esteemed
                      colleges as we have guided them properly through the
                      intrinsic process of counselling.{" "}
                    </Typography>
                  </div>
                </div>
              </Col>

              <Col
                style={{ display: "flex", justifyContent: "center" }}
                md="6"
                xs="12"
              >
                <div className="cardxs">
                  <img className="imgxs" src={Group16} alt="group16" />
                  <div>
                    <Typography color="textPrimary">Advantage</Typography>
                  </div>
                  <div>
                    <Typography color="textSecondary">
                      Joining a guided counselling process will give an edge
                      over other students who are struggling to comprehend the
                      details. Join us now and be ahead of the game!
                    </Typography>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md="6" style={{ paddingTop: "25px" }}>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <span
                  style={{
                    color: "orange",
                    fontWeight: "400",
                    fontSize: "20px",
                  }}
                >
                  Our Features
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>
                  We are here to solve all your queries with the help of our
                  expert mentors
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                We have a great network of experts amongst the most prestigious
                institutes across the country who are always ready to help you
                make the admission process convenient.We believe in :
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li style={{ listStyleType: "circle" }}>Commitment</li>
                  <li style={{ listStyleType: "circle" }}>Dedication</li>
                  <li style={{ listStyleType: "circle" }}>Passion</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="#sec2" className=" orangebtn orangebtnxl">Know More</a>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* ----------------------------------------------------------------------------------------------- */}
        <Row className="greyBack" id="sec2">
          <Col className="col-6-xl" md="6" xs="12">
            <Row>
              <div>
                <h3>
                  Predict your dream destination with the help of our analytics
                </h3>
                <p className="contPara">
                  The college predictor at Counselling Gurus follows an advanced
                  algorithm to accurately devise your predicted college
                  according to your rank and marks. It takes into account
                  factors like total no. of students, categories, no. of seats,
                  rank of college. One of the most distinctive features of the
                  college predictor is that it analyses previous trends and
                  statistics and paints an accurate picture for you. All in all,
                  our college predictor will guide you to a college and give you
                  an accurate prediction backed up by experience, statistics,
                  and trends.
                </p>
                <Link to="/college_data" className="orangebtn orangebtnxl d-block mt-4 text-white text-decoration-none">Know More</Link>
              </div>
            </Row>
          </Col>
          <Col className="col-6-xl" md="6" xs="12">
            <img className="conImg" src={UndrawPie} alt="undraw_pie" />
          </Col>
        </Row>
        <Row className="whiteBack">
          <Col className="col-6-xl" md="6" xs="12">
            <img className="conImg" src={Group} alt="group_788" />
          </Col>

          <Col className="col-6-xl" md="6" xs="12">
            <Row>
              <div className="conPos">
                <h3>Comparison on College Predictor</h3>
                <p className="contPara">
                  Learning about previous trends and incidents is the best
                  method of predicting a college and that is exactly what our
                  college predictor does. Worried about which college you will
                  get into? Refer to our college predictor and compare trends of
                  previous year and take a deeper look into different colleges
                  and ranks!
                </p>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="greyBack">
          <Col className="col-6-xl" md="6" xs="12">
            <Row>
              <div className="conPos">
                <h3>Get guided by the best!</h3>
                <p className="contPara">
                  “The only source of knowledge is experience” – Albert
                  Einstein. Getting the college of your dreams is a difficult
                  task, and it is important to listen to the right mentors
                  during counselling. One wrong move and you could miss out on
                  the perfect college despite getting the right rank and marks.
                  This is where our expert mentors come in. With experienced
                  people from multiple IITs and NITs, Counselling Gurus provides
                  a unique methodology as our mentors take you through the
                  process step by step!
                </p>
              </div>
            </Row>
          </Col>
          <Col className="col-6-xl" md="6" xs="12">
            <img className="conImg" src={Scene} alt="Scene" />
          </Col>
        </Row>
        <Row className="whiteBack">
          <Col className="col-6-xl" md="6" xs="12">
            <img className="conImg" src={UndrawSetup} alt="undraw_setup" />
          </Col>

          <Col className="col-6-xl" md="6" xs="12">
            <Row>
              <div className="conPos">
                <h3>
                  Selecting the right college is important, but selecting a
                  branch is just as important!
                </h3>
                <p className="contPara">
                  It is important to select the right branch whenever you think
                  of a college. The numbers and data can get quite tricky to
                  understand due to the intrinsic process of counselling. Here,
                  our college predictor makes life easy for you as it breaks
                  down college and branch statistics and presents it in a simple
                  and understandable manner!
                </p>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="infoxl">
            <div className="infoDivxl">
              <span style={{ fontSize: "55px", fontWeight: "500" }}>
                <CountUp start={0} end={30} duration={1.5} separator="," />+
              </span>
              <br />
              Cities Covered
            </div>
            <div className="infoDivxl">
              <span style={{ fontSize: "55px", fontWeight: "500" }}>
                <CountUp start={0} end={500} duration={5.5} separator="," />+
              </span>
              <br />
              Top Institutions Covered
            </div>
            <div className="infoDivxl">
              <span style={{ fontSize: "55px", fontWeight: "500" }}>
                <CountUp start={0} end={2000} duration={5.5} separator="," />+
              </span>
              <br />
              Got Their Dream Job
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>But We Did Not Stop Here</h2>
          </Col>
        </Row>
        <Row>
          <Col md="2"></Col>
          <Col>
            <Row>
              <Col>
                <Icon style={{ color: "#2b1c57" }} icon={quoteLeft} size="50" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  This is a wonderful initiative by the young minds of our
                  country. Such service from IITians and NITians to help others
                  achieve their dreams is highly commendable
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>-IAS Dr Rajendra Pensia</h3>
              </Col>
            </Row>
            <Cards />
          </Col>
          <Col md="2"></Col>
        </Row>

        <Row className="greyBack">
          <Col md="6" xs="12" className="col-6-xl">
            <img
              style={{ width: "400px", height: "450px" }}
              className="conImg"
              src={Layer2}
              alt="Layer2"
            />
          </Col>
          <Col md="6" xs="12" className="col-6-xl">
            <Row>
              <div>
                <h3>College Comparison</h3>
                <p className="contPara">
                  While JEE and NEET are two of the most life-changing exams in
                  the world, what’s even more challengeing is the process
                  afterwards. Counselling can be a hectic affair for someone who
                  has worked tirelessly for 2-4 years to crack the exam. It is
                  even more difficult to analyse the trends and dynamics of
                  factors such as Rank vs Marks, changing cutoffs with each
                  round, no. of seats. It is almost impossible to keep track of
                  all factors and that is where we come in. We provide you with
                  a hassle free experience and guide you through the process.
                  With professional help, you gain an advantage and move towards
                  your dream college!
                </p>
                <button className="surveybtn">Take A Survey</button>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
