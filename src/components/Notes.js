import React from 'react';

const Notes = () => {
    return (
        <div className="container-fluid" style={{background: "#eee", fontFamily: "sans-serif"}}>
            <div className="row mt-5">
                <div className="col-sm-6">
                    <div className="container mt-5 mb-5">
                        <img src="/notes.svg" alt="Notes" className="img-responsive" width="90%" />
                    </div>
                </div>
                <div className="col-sm-6 mt-5">
                        <h1 className="font-weight-bold ml-5">Put The Concepts Right<br />
                        With <span style={{color: 'blue'}}>Quick Revision Notes</span></h1>
                        <div className="container mt-5 pl-5 pr-5">
                            <div className="d-flex bg-white rounded mb-0 p-3 m-2">
                                <img src="/logo512.png" width="13%" className="mr-4" />
                                <div>
                                    <h3>Physics For <span style={{color: 'blue'}}>IIT-JEE</span></h3>
                                    <p className="m-0">Electromagnetics, Mechanics, Kinematics, Optics <br />and much more</p>
                                    <a href="/notes/195Vd4WSLqR-NuUn1Kjmw6NMytSU5IfLi/" style={{color: "red"}}>view</a>
                                </div>
                            </div>
                            <div className="d-flex bg-white rounded mb-0 p-3 m-2">
                            <img src="/logo512.png" width="13%" className="mr-4" />
                                <div>
                                    <h3>Mathematics For <span style={{color: 'blue'}}>IIT-JEE</span></h3>
                                    <p className="m-0">Electromagnetics, Mechanics, Kinematics, Optics <br />and much more</p>
                                    <a href="/notes/1_093qVIjPLckSiTMQOVNIxppISLbqnGK/" style={{color: "red"}}>view</a>
                                </div>
                            </div>
                            <div className="d-flex bg-white rounded mb-0 p-3 m-2">
                            <img src="/logo512.png" width="13%" className="mr-4" />
                                <div>
                                    <h3>Chemistry For <span style={{color: 'blue'}}>IIT-JEE</span></h3>
                                    <p className="m-0">Electromagnetics, Mechanics, Kinematics, Optics <br />and much more</p>
                                    <a href="/notes/12tiw4LP-dzc9L6K3n4aUljxLcISImONM/" style={{color: "red"}}>view</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Notes;