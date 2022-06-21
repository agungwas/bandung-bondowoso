import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from "pages/dashboard";
import { NavBar } from 'components/NavBar';
import { Footer } from 'components/Footer';

export const ManageRoutes = () => {
  return (
    <div id="__next">
      <div className="root-page row justify-content-center" style={{ backgroundColor: '#202228' }}>
        <NavBar />
        <div className="content-layout">
          <div className="leaderboard-layout">
              <div className="header">
                <div className="background"><img src="https://metaco.gg/images/leaderboard-banner.png" alt="banner" /></div>
                <div className="title">
                    <h4>Leaderboard</h4>
                    <div className="display-4">The Champions</div>
                    <div className="times">
                      <div className="item active">All Time</div>
                      <div className="item">Bulan ini</div>
                      <div className="item">Minggu ini</div>
                    </div>
                </div>
              </div>
              <div className="game-tabs">
                <div className="horizontal-menu" style={{ alignItems: 'center', display: 'flex', userSelect: 'none' }}>
                    <div className="menu-wrapper" style={{ overflow: 'hidden', userSelect: 'none' }}>
                      <div className="menu-wrapper--inner" style={{ transform: 'translate3d(-2px, 0px, 0px)', transition: 'transform 0.4s ease 0s', width: '990000px', textAlign: 'left' }}>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game active"><img className="game-logo" src="https://metaco.gg/icon/all-games.png" alt="all-games"/> The Champions</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/bbd09b5ba201824582a27218238276d0.jpg" alt="all-games"/> VALORANT</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/6948e49a07dc00a4ac1fb0c34b612ee7.jpg" alt="all-games"/> FREE FIRE</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/57073caa54dfeae1e484700e16952b67.jpg" alt="all-games"/> MOBILE LEGENDS</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/67ca72940e5777f4093e7a96cf44ea7b.jpg" alt="all-games"/> PUBGM</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/a60a418d7c650cfefccecb6a16ed5d7e.jpg" alt="all-games"/> DOTA 2</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/c7d2f2036b48d034e5a2f0886854efdb.jpg" alt="all-games"/> PES Mobile</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/828699056a3e65933a478d5b0fe4d36b.jpg" alt="all-games"/> ARENA OF VALOR</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/b246b305f7063f0f63c5d21320a9535d.jpg" alt="all-games"/> CLASH ROYALE SOLO</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game false"><img className="game-logo" src="https://metacoweb.s3.amazonaws.com/game/thumbs/c026714802067289884feb996cdee8e7.jpg" alt="all-games"/> TEKKEN 7</div>
                          </div>
                          <div className="menu-item-wrapper " tabIndex={0} style={{ display: 'inline-block' }}>
                            <div className="item-game" style={{ gap: '0px' }}><img height="50" width="1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="/>View More</div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="content">
                <div className="leaderboards">
                    <div className="row">
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/bbd09b5ba201824582a27218238276d0.jpg" alt="game-icon"/></div>
                                <span className="title">VALORANT</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/4288cea0cb40828eb251db4be2df002e.jpg" alt="logo"/>Various Xtreme</td>
                                      <td>277</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/4404e110589f69739030c56e4e5c6297.jpg" alt="logo"/>PXE</td>
                                      <td>194</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/f7705544289a76b0a0a31e124be66f2f.jpg" alt="logo"/>Nongkrong Kilat</td>
                                      <td>158</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/6948e49a07dc00a4ac1fb0c34b612ee7.jpg" alt="game-icon"/></div>
                                <span className="title">FREE FIRE</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/5865df29a2e14588d7badcb12b0e63e5.jpg" alt="logo"/>MANTAPKALI MONARCH</td>
                                      <td>405</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/18de76ad353496ac9e1c7e0808df05f2.jpg" alt="logo"/>Pengebol </td>
                                      <td>376</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>BDRX TCN</td>
                                      <td>358</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/57073caa54dfeae1e484700e16952b67.jpg" alt="game-icon"/></div>
                                <span className="title">MOBILE LEGENDS</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/f4e804437ef6ac2a78d1c5ce0377f002.jpg" alt="logo"/>RAITH AURUM</td>
                                      <td>531</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/a1195731df8af8b6220b7cfcd34e23cb.jpg" alt="logo"/>Demigod</td>
                                      <td>352</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>RAITH AURUM V</td>
                                      <td>319</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/67ca72940e5777f4093e7a96cf44ea7b.jpg" alt="game-icon"/></div>
                                <span className="title">PUBGM</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/19faf1ba25fe6385f4a92a26c812577f.jpg" alt="logo"/>NRX POTA</td>
                                      <td>700</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/5eef190684bf9686d37fabafef4404ba.jpg" alt="logo"/>VENDETTA</td>
                                      <td>375</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/737bfd34b9aa980a2edfc4df2b08ed86.jpg" alt="logo"/>CYTSER REBORN</td>
                                      <td>143</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/a60a418d7c650cfefccecb6a16ed5d7e.jpg" alt="game-icon"/></div>
                                <span className="title">DOTA 2</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>WibuSlayer</td>
                                      <td>688</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>Mama Ling Enjoyers</td>
                                      <td>638</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>LEKTAUKO</td>
                                      <td>525</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/c7d2f2036b48d034e5a2f0886854efdb.jpg" alt="game-icon"/></div>
                                <span className="title">PES Mobile</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>RONVI</td>
                                      <td>185</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>C1KARANG</td>
                                      <td>165</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>MS• Pangbol 2.0</td>
                                      <td>130</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/828699056a3e65933a478d5b0fe4d36b.jpg" alt="game-icon"/></div>
                                <span className="title">ARENA OF VALOR</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/21b9c88a69c0293deebc0126a2ce27ac.jpg" alt="logo"/>Archangel Bishamonten</td>
                                      <td>131</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/b3d0bb3c9d323d6b6d03c9b5825c6ba5.jpg" alt="logo"/>Silence But Deadly</td>
                                      <td>130</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/team/thumbs/46422ca16d76da1f88fe066abbd29871.jpg" alt="logo"/>CGt Star</td>
                                      <td>108</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/b246b305f7063f0f63c5d21320a9535d.jpg" alt="game-icon"/></div>
                                <span className="title">CLASH ROYALE SOLO</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>BLAZE</td>
                                      <td>531</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>Anaban❤Snipe</td>
                                      <td>449</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>King I RezZ™</td>
                                      <td>409</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="leaderboard-card">
                            <div className="header-card">
                                <div className="logo"><img src="https://metacoweb.s3.amazonaws.com/game/thumbs/c026714802067289884feb996cdee8e7.jpg" alt="game-icon"/></div>
                                <span className="title">TEKKEN 7</span>
                            </div>
                            <table className="header-table">
                                <thead>
                                  <tr>
                                      <th>Rank</th>
                                      <th>Team</th>
                                      <th>Point</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/user/images/f3aefa47d32d097e17eaf241d84e159a.jpg" alt="logo"/>DRivals RTM</td>
                                      <td>580</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td><img src="https://metaco.gg/images/profile/default-profile-picture.png" alt="logo"/>Shomus</td>
                                      <td>457</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td><img src="https://metacoweb.s3.amazonaws.com/user/images/c0a1096faa9d06ba0b7f70b9667e32fe.jpg" alt="logo"/>Lizanias</td>
                                      <td>272</td>
                                  </tr>
                                </tbody>
                            </table>
                            <button type="button" className="button-more btn btn-outline-secondary btn-block">Explore More</button>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <Routes>
          <Route index element={<DashboardPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}