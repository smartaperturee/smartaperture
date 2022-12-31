import React from 'react'
import "./testimonial.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import food from "../../Assets/food.png"
import ConsultnacyHub from "../../Assets/Consultnacy Hub.png"
import DAY_Consultants from "../../Assets/DAY_Consultants.png"
import imkinfluence from "../../Assets/imk influence.jpg"
import Logo from "../../Assets/LOGO 2.jpg"
import ONR from "../../Assets/ONR.png"
import RAJGURUlogo from "../../Assets/RAJGURU logo.png"
import Yuvi from "../../Assets/YUVI Originaals.png"
import "./testimonial.scss"
import Bg from "../../Assets/wallpaper.jpg"



 const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="work"style={{ backgroundImage: `url(${Bg})` }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className='projectheading'> My Projects</h2>
                        <p>Here are some of my clients.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={food} alt="Image" />
                                <h5>Fit Food</h5>
                            </div>
                            <div className="item">
                                <img src={ConsultnacyHub} alt="Image" />
                                <h5>Consultnacy Hub</h5>
                            </div>
                            <div className="item">
                                <img src={DAY_Consultants} alt="Image" />
                                <h5>DAY_Consultants</h5>
                            </div>
                            <div className="item">
                                <img src={Logo} alt="Image" />
                                <h5>Performance Rhino</h5>
                            </div>
                            <div className="item">
                                <img src={imkinfluence} alt="Image" />
                                <h5>Imk Influence</h5>
                            </div>
                            <div className="item">
                                <img src={ONR} alt="Image" />
                                <h5>ONR</h5>
                            </div>
                            <div className="item">
                                <img src={RAJGURUlogo} alt="Image" />
                                <h5>RAJGURU</h5>
                            </div>
                            <div className="item">
                                <img src={Yuvi} alt="Image" />
                                <h5>YUVI Originals</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left"  alt="Image" />
    </section>
  )
}
export default Skills