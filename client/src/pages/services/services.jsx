import React from 'react'
import "./services.scss"
import gd from "../../Assets/gd.jpg"
import dm from "../../Assets/3d.png"
import mg from "../../Assets/mg.jpg"
import photo from "../../Assets/photo.jpg"
import ve from "../../Assets/ve.png"
import Bg from "../../Assets/wallpaper.jpg"


const services = () => {
  return (
    <div className='maincontainer' id='services' style={{ backgroundImage: `url(${Bg})` }}>
      <div className='heading'>Our Services</div>
      <div className="container marketing">
        <div className="row margin">
          <div className="col-lg-4 " style={{ backgroundImage: `url(${Bg})` }}>
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" src={gd} focusable="false" />

            <h3 className="fw-normal">Graphic Designing</h3>
           

          </div>
          <div className="col-lg-4 ">
            <img className="bd-place style={{ backgroundImage: `url(${Bg})` }}holder-img rounded-circle" width="140" height="140" role="img" src={photo} focusable="false" />
            <h2 className="fw-normal">Photography</h2>
            
          </div>
          <div className="col-lg-4 " style={{ backgroundImage: `url(${Bg})` }}>
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" src={ve} focusable="false" />

            <h2 className="fw-normal">Video Editing</h2>
           

          </div>
        </div>
      </div>
      <div className="container marketing " style={{ backgroundImage: `url(${Bg})` }}>
        <div className="row">
          <div className="col-lg-4 ">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" src={dm} focusable="false" />

            <h2 className="fw-normal">3D Modeling</h2>
            

          </div>
          <div className="col-lg-4 " style={{ backgroundImage: `url(${Bg})` }}>
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" src={mg} focusable="false" />

            <h2 className="fw-normal">Motion Graphics</h2>
           

          </div>

        </div>
      </div>
    </div>
  )
}

export default services