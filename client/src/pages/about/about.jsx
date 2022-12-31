import React from 'react'

import { Container, Row, Col } from "react-bootstrap";
import photo from "../../Assets/Photo 2.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import wallpaper from "../../Assets/wallpaper.jpg"
import TrackVisibility from 'react-on-screen';
import "./about.scss"
import Bg from "../../Assets/Bg.jpg"


const About = () => {
    return (

        <section style={{ backgroundImage: `url(${Bg})` }} className="banner1" id='about'>
            <Container>
                <Row className="aligh-items-center1">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => <div>
                                <span className='about'>About me</span>
                                <p>
                                    Hi, My Self Swayamdeep .
                                    I Solve business problems through Graphic Design | Brand Identity | Social-media post | Poster | Video-Editing | Photography
                                    It's not about what you want as a client or me as a designer but WHAT THE BRAND NEEDS is actually what matters the most!
                                </p>
                                

                            </div>

                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={photo} alt="about Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default About