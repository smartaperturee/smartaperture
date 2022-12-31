import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import svg1 from "../../Assets/svg1.svg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import 'animate.css';
import photo from "../../Assets/Photo 2.png"
import TrackVisibility from 'react-on-screen';
import "./hero.scss"




import Bg from "../../Assets/Bg.jpg"
const Hero = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Video Editor", "Photographer", "Graphic Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home" style={{ backgroundImage: `url(${Bg})` }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className='text'>{`Hi! I'm Swayamdeep`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Video Editor", "Photographer", "Graphic Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p> Hi, My Self Swayamdeep
                    |Graphics Designer
                    Video Editor|
                    Photographer
                    I Solve business problems 
                    through Graphic Design | Brand Identity | Social-media post | Poster | Video-Editing | Photography</p>
                  <Link to="/post" style={{ textDecoration: "none" }} >
                    <button>See Posts <ArrowRightCircle size={25} /></button>
                  </Link>

                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={photo} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero