import React from 'react'
import './Cards.css'
import { Grid, Card, CardContent, Typography, Avatar } from '@material-ui/core'
import { Row, Col } from 'reactstrap'
import testimonial_1 from './testimonial-1.jpg'
import testimonial_2 from './testimonial-2.jpg'

function Cards() {


    return (
        <Row >
            <Col md="5" xs="12">
                <Grid item component={Card} md="3" xs="12" className="cardxl">
                    <CardContent>
                        <Row>
                            <Col md="4" xs="12">
                                <Avatar alt="Remy Sharp" src={testimonial_1} />
                            </Col>
                            <Col>
                                <h6 >Abhinav goyal </h6>
                                <Typography color="textPrimary">IIT,BHU</Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span >I was very much confused about what to do after getting a lower Rank but Counselling Gurus helped me to pave the right pathway to college. Thank You Ankit sir for your support.</span>
                            </Col>
                        </Row>

                    </CardContent>
                </Grid>
            </Col>
            <Col md="5" xs="12" >
                <Grid item component={Card} md="3" xs="12" className="cardxl">
                    <CardContent>
                        <Row>
                            <Col md="4" xs="12">
                                <Avatar alt="Remy Sharp" src={testimonial_2} />
                            </Col>
                            <Col>
                                <h6 >Mansi Tripathi </h6>
                                <Typography color="textPrimary">MGM,Indore</Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span >I was in dilemma about getting into college or dropping out. Counselling Gurus cleared all my doubts and helped me to get admitted to right College</span>
                            </Col>
                        </Row>

                    </CardContent>
                </Grid>
            </Col>
        </Row>
    );
}



export default Cards;