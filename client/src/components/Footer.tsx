import React from 'react';

export const Footer = () => {
  return (
    <React.Fragment>
      <div style={{ position: 'relative', cursor: 'pointer' }} >
        <img src="https://metaco.gg/images/footer-banner.png" style={{ width: '100%', borderRadius: 'unset' }} alt='banner' />
        <div style={{ position: 'absolute', top: '40%', left: '35%' }} >
          <h1 style={{ textAlign: 'center', color: '#fff' }} >
            Find Latest Esport Event<br /> on Metaco
          </h1>
        </div>
      </div>
      <div className="parrent-footer container-fluid">
        <div className="row">
          <div className="_align-center col-3 col-md-3 col-lg-3">
            <img className="footer-logo" src="https://metaco.gg/icon/logo-metaco.svg" alt="metaco-icon" />
            <span className="footer-copyright">Copyright © Metaco. All rights reserved.</span>
          </div>

          <div className="_align-center col-6 col-md-6 col-lg-6">
            <div className="footer-link">
              <a className="text-decoration-none" href="https://metaco.gg/company/tentang-kami" target="_blank" rel="noreferrer">Tentang Kami</a>
              <a className="text-decoration-none" href="https://metaco.gg/company/karir" target="_blank" rel="noreferrer">Karir</a>
              <a className="text-decoration-none" href="https://metaco.gg/company/pedoman-pemberitaan" target="_blank" rel="noreferrer">Pedoman Pemberitaan</a>
            </div>
          </div>

          <div className="_align-center col-3 col-md-3 col-lg-3">
            <div className="footer-sosmed">
              <div className="footer-sosmed-circle">
                <img src="https://metaco.gg/icon/ic_youtube.svg" alt="youtube" />
              </div>
              <div className="footer-sosmed-circle">
                <img src="https://metaco.gg/icon/ic_instagram.svg" alt="instagram" />
              </div>
              <div className="footer-sosmed-circle">
                <img src="https://metaco.gg/icon/ic_facebook.svg" alt="facebook" />
              </div>
              <div className="footer-sosmed-circle">
                <img src="https://metaco.gg/icon/ic_twitter.svg" alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
