import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs'

const Footer = () => {

  const {t} = useTranslation();
  
  return (
    <div className='Footer'>
      <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="">
    {/* Footer */}
    <footer
      className="text-center Footer_Bg text-lg-start text-white"
    >

      <section
        className=" Footer_Header"
      
      >
        <div className="footer_darkmode_white">
          <span>{t("Get connected with us on social networks")}:</span>
        </div>
    
      </section>
  
      <section className="">
        <div className="container text-center text-md-start">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold footer_darkmode_tefini">{t("Company name")}</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p className='footer_darkmode_tefini'>
                Try Talabee
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold footer_darkmode_tefini">{t("Social Media")}</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <div className='Footer_social'>
                <ul className='Media_Icon'>
                  <li><a href="/" className='footer_darkmode_tefini'><BsFacebook/></a></li>
                  <li><a href="/about" className='footer_darkmode_tefini'><BsGoogle/></a></li>
                  <li><a href="/about" className='footer_darkmode_tefini'><BsInstagram/></a></li>
                </ul>
              </div>
            
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold footer_darkmode_tefini">{t("Useful links")}</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="/" className="footer_darkmode_tefini">
                  {t("Home")}
                </a>
              </p>
              <p>
                <a href="/privacy" className="footer_darkmode_tefini">
                  {t("Privacy")}
                </a>
              </p>
              <p>
                <a href="/contact" className="footer_darkmode_tefini">
                  {t("Contact us")}
                </a>
              </p>
              <p>
                <a href="/about" className="footer_darkmode_tefini">
                  {t("About us")}
                </a>
              </p>
          
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold footer_darkmode_tefini">{t("Contact")}</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p className='footer_darkmode_tefini'>
                <i className="fas fa-home mr-3 " /> 0963958261912
              </p>
              <p className='footer_darkmode_tefini'>
                <i className="fas fa-envelope mr-3 " /> info@sdnone.com
              </p>
              <p className='footer_darkmode_tefini'>
                <i className="fas fa-home mr-3 " /> Qatar, Doha
              </p>
           
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-3 footer_darkmode_tefini"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2024 Copyright SDNone Company<br/>
        <a className="footer_darkmode_tefini" href="https://www.sdnone.net/" rel="noreferrer" target='_blank'>
            https://www.sdnone.net
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

    </div>
  )
}

export default Footer