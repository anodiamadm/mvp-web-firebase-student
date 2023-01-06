import React from 'react'

function Footer() {
  return (
  <>
    <footer className="page-footer footer-bgcolor">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <div className='footer-box'>
              <p className="grey-text text-lighten-4"><i className="fa-solid fa-brain"></i>&nbsp;&nbsp; Clear all concepts</p>
              <p className="grey-text text-lighten-4"><i className="fa-solid fa-dumbbell"></i>&nbsp;&nbsp;Build confidence</p>
              <p className="grey-text text-lighten-4"><i className="fa fa-trophy"></i>&nbsp;&nbsp; Score highest grades</p>
            </div>
          </div>
          <div className="col l6 s12">
            <div className='footer-box'>
              <p className="grey-text text-lighten-4">
                <i className="fa fa-envelope"></i>&nbsp;&nbsp; contact-us@anodiam.com
              </p>
              <p className="grey-text text-lighten-4">
                <i className="fa fa-phone"></i>&nbsp;&nbsp;+61&nbsp;&nbsp;
                <img alt='Au' src={ process.env.PUBLIC_URL + '/resources/australia_flag_icon.png' } className="flag-img" />
                &nbsp;&nbsp;470-142-229
              </p>
              <p className="grey-text text-lighten-4">
                <i className="fa-solid fa-landmark"></i>&nbsp;&nbsp; 8/71 Wolseley Street, Bexley, NSW Australia 2207
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2023 Copyright Anodiam Limited.
          <a className="grey-text text-lighten-4 right" href="https://www.whatsapp.com/">
            &nbsp;<i className="fa-brands fa-whatsapp">&nbsp;</i>&nbsp;
          </a>
          <a className="grey-text text-lighten-4 right" href="https://www.instagram.com/anirbanchakrabarty/">
            &nbsp;<i className="fa-brands fa-instagram">&nbsp;</i>&nbsp;
          </a>
          <a target="_blank" rel="noreferrer" className="grey-text text-lighten-4 right" href="https://www.facebook.com/profile.php?id=100069987403036">
            &nbsp;<i className="fa-brands fa-facebook">&nbsp;</i>&nbsp;
          </a>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Footer
