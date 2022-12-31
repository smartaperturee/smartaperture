import React from 'react'
import "./footer.scss"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';


const footer = () => {
  return (
    <div class="container">
      <footer class="py-5">
        <div class="row">



          <div class="col-md-5 offset-md-1 mb-3">
            <form>


            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <div className='foot'>
            <p>Designed and maintained by <span className='Morsystems'>morsystems.</span></p>
            <p><em>e-mail</em> : morsystems0810@gmail.com</p>


          </div>
          <div className='frightcolumn'><ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-dark" target="_blank" href="https://twitter.com/Smart_aperture"><svg class="bi" width="24" height="24"><TwitterIcon style={{ color: "#007FFF" }} /></svg></a></li>
            <li class="ms-3"><a class="link-dark" target="_blank" href="https://www.instagram.com/smart.aperture/"><svg class="bi" width="24" height="24"><InstagramIcon style={{ color: "#833AB4" }} /></svg></a></li>
            <li class="ms-3"><a class="link-dark" target="_blank" href="/Login"><svg class="bi" width="24" height="24"><VpnKeyIcon style={{ color: "#833AB4" }} /></svg></a></li>
            <li class="ms-3"><a class="link-dark" target="_blank" href="https://www.youtube.com/@smartaperture"><svg class="bi" width="24" height="24"><YouTubeIcon style={{ color: "#833AB4" }} /></svg></a></li>
          </ul>
          <div className='aperturemain'>
            <div className='aperture'>
              <PhoneIcon className='icons' />
              <h5 style={{ color: "white" }}><em>Contact</em>  : +91 73260 54303 </h5>
            </div>

            <div className='aperture'>
              <EmailIcon className='icons'/>
              <p><em>e-mail</em> : info@smartaperture.com</p>
            </div>
          </div></div>

          


        </div>
      </footer>
    </div>
  )
}

export default footer