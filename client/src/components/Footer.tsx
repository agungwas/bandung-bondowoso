import React from 'react';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="parrent-footer container-fluid">
        <div className="row">
          <div className="_align-center col-3 col-md-3 col-lg-3">
            <img className="footer-logo" src="https://metaco.gg/icon/logo-metaco.svg" alt="metaco-icon" />
            <span className="footer-copyright">Copyright © Metaco. All rights reserved.</span>
          </div>

          <div className="_align-center col-6 col-md-6 col-lg-6">
            <div className="footer-link">
              <a style={{ color: 'inherit' }} href="https://metaco.gg/company/tentang-kami" target="_blank" rel="noreferrer">Tentang Kami</a>
              <a style={{ color: 'inherit' }} href="https://metaco.gg/company/karir" target="_blank" rel="noreferrer">Karir</a>
              <a style={{ color: 'inherit' }} href="https://metaco.gg/company/pedoman-pemberitaan" target="_blank" rel="noreferrer">Pedoman Pemberitaan</a>
            </div>
          </div>

          <div className="_align-center col-3 col-md-3 col-lg-3">
            <div className="footer-sosmed">
              <div className="footer-sosmed-circle" onClick={_ => window.open('https://www.youtube.com/channel/UCXjdI6BVoMzRr1spqTtAlkA', '_blank', 'noopener,noreferrer')}>
                <img src="https://metaco.gg/icon/ic_youtube.svg" alt="youtube" />
              </div>
              <div className="footer-sosmed-circle" onClick={_ => window.open('https://www.instagram.com/metaco_gg', '_blank', 'noopener,noreferrer')}>
                <img src="https://metaco.gg/icon/ic_instagram.svg" alt="instagram" />
              </div>
              <div className="footer-sosmed-circle" onClick={_ => window.open('https://web.facebook.com/MetacoGG', '_blank', 'noopener,noreferrer')}>
                <img src="https://metaco.gg/icon/ic_facebook.svg" alt="facebook" />
              </div>
              <div className="footer-sosmed-circle" onClick={_ => window.open('https://twitter.com/metaco_gg', '_blank', 'noopener,noreferrer')}>
                <img src="https://metaco.gg/icon/ic_twitter.svg" alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer