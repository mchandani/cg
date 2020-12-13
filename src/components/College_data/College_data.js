import axios from 'axios'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './College_data.css'

const url = 'https://counsellinggurus.in:3001/s/enginerring/all';

class College_data extends React.Component {
    constructor() {
        super()
        this.state = {
            results: {},
            college: [],
            query: ''

        }
        this.cancel = ''
    }
    componentDidMount() {

        axios.get(url).then(res => {
            this.setState({ college: res.data })
            console.log(res.data)
        })

    }
    fetchSearchResult = (query) => {
        const searchUrl = `https://counsellinggurus.in:3001/s?search=${query}`
        if (this.cancel) {
            this.cancel.cancel()
        }

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl).then(res => {
            this.setState({ results: res.data })
            console.log(res.data)
        })
    }

    handleChange = (e) => {
        const query = e.target.value
        this.setState({ query: query })
        console.log(query)
        this.fetchSearchResult(query)
    }

    render() {
        const { college, query, results } = this.state
        return (
            <Container fluid>
                <Row>
                    <Col style={{ textAlign: "center" }}>
                        <h1 style={{ fontSize: "32px" }}>List of Colleges</h1>
                    </Col>
                </Row>

                <div className="divxxl" >
                    <Row>
                        <Col>
                            <div >
                                Search &nbsp;&nbsp;
                            <input onChange={this.handleChange} name="query" value={query} className="search" placeholder="Enter name of institute to search" />
                            </div>
                        </Col>
                    </Row>
                    <Row style={{
                        background: '#0051BA 0% 0% no-repeat padding-box',
                        borderRadius: '3px 3px 4px 0px',
                        font: 'normal normal medium 24px/32px Roboto',
                        color: "white",
                        textTransform: 'capitalize',

                    }} className="dataRow mt" >
                        <Col style={{ textAlign: "center" }}>
                            Name of the institute
                        </Col>

                    </Row>
                    {
                        query.length ?
                            results.length ?
                            results.map(results =>
                                <Row className="dataRow" style={{ border: "1px solid #979797", borderTop: "none", borderRadius: "3px 3px 4px 0px", top: "18px" }}  >
                                    <Col md="10" xs="12" key={college.id}>
                                        {results.sno} &nbsp;
                                <span className="college_name">

                                            {results.name}
                                        </span>
                                    </Col>
                                    <Col style={{ display: "flex", justifyContent: "center" }}>
                                        <button onClick={() => this.props.history.push(`/college_data/${results.sno}`)} style={{ padding: "10px", borderRadius: "50px" }} className="orangebtn mt">View</button>
                                    </Col>

                                </Row>) : null
                        :
                            college.length ?
                            college.map(college =>
                                <Row className="dataRow" style={{ border: "1px solid #979797", borderTop: "none", borderRadius: "3px 3px 4px 0px", top: "18px" }}  >
                                    <Col md="9" xs="12" key={college.id}>
                                        {college.sno} &nbsp;
                                        <span className="college_name">

                                            {college.name}
                                        </span>
                                    </Col>
                                    <Col style={{ display: "flex", justifyContent: "center" }}>
                                        <button onClick={() => this.props.history.push(`/college_data/${college.sno}`)} style={{ padding: "10px", borderRadius: "50px" }} className="orangebtn mt">View</button>
                                    </Col>

                                </Row>) : null
                    }
                </div>

            </Container>
        );
    }
}
export default College_data;
