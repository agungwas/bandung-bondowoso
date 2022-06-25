const Explorer = () => {

  return (
    <div className="explorer">
      <div className="breadcrumb container">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>Home</a>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              Gamer Explorer
            </li>
          </ol>
        </nav>
      </div>
      <div className="explorer__filter container">
        <div>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search"
                    defaultValue=""
                    className="text-input-search form-control"
                  />
                  <div className="input-group-append">
                    <span className="text-input-search input-group-text">
                      <img src="/icon/ui/search.png" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ width: "100%" }} className="form-group">
                <div className="dropdown">
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="text-input-search dropdown-toggle btn btn-secondary"
                  >
                    Tampilkan: {/* */}12{/* */} Data
                  </button>
                  <div
                    tabIndex={-1}
                    role="menu"
                    aria-hidden="true"
                    className="dropdown-menu"
                  >
                    <button
                      type="button"
                      tabIndex={0}
                      role="menuitem"
                      className="dropdown-item"
                    >
                      6{/* */} Data
                    </button>
                    <button
                      type="button"
                      tabIndex={0}
                      role="menuitem"
                      className="dropdown-item active"
                    >
                      12{/* */} Data
                    </button>
                    <button
                      type="button"
                      tabIndex={0}
                      role="menuitem"
                      className="dropdown-item"
                    >
                      18{/* */} Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <button type="button" className="text-input-search btn btn-secondary">
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="explorer__tabs">
          <div className="explorer__list row">
            <div className="col-2">
              <button
                type="button"
                className="tabs__item font-weight-bold active btn btn-base btn-block"
              >
                Team
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="tabs__item font-weight-bold  btn btn-base btn-block"
              >
                Player
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="explorer__content container">
        <div className="content__count">Hasil : undefined Tim</div>
        <div className="content__row row">
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="https://metacoweb.s3.amazonaws.com/team/thumbs/5d314019bf880f6dad6f9b1573ecd6e3.jpg"
                alt="Team TOMTJU HeNz~"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">TOMTJU HeNz~</span>
              <span className="card-explorer__game">Juara POINT BLANK</span>
              <span className="card-explorer__points">849 points</span>
              <a className="card-explorer__button" href="/team/tomtju-henz">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="https://metacoweb.s3.amazonaws.com/team/thumbs/19faf1ba25fe6385f4a92a26c812577f.jpg"
                alt="Team NRX POTA"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">NRX POTA</span>
              <span className="card-explorer__game">Juara PUBGM</span>
              <span className="card-explorer__points">700 points</span>
              <a className="card-explorer__button" href="/team/nrx-pota">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="/images/default-image-reward-thumb.svg"
                alt="Team WibuSlayer"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">WibuSlayer</span>
              <span className="card-explorer__game">Juara DOTA 2</span>
              <span className="card-explorer__points">688 points</span>
              <a className="card-explorer__button" href="/team/wibuslayer">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="/images/default-image-reward-thumb.svg"
                alt="Team Mama Ling Enjoyers"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">Mama Ling Enjoyers</span>
              <span className="card-explorer__game">Juara DOTA 2</span>
              <span className="card-explorer__points">638 points</span>
              <a className="card-explorer__button" href="/team/mama-ling-enjoyers">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="https://metacoweb.s3.amazonaws.com/team/thumbs/f4e804437ef6ac2a78d1c5ce0377f002.jpg"
                alt="Team RAITH AURUM"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">RAITH AURUM</span>
              <span className="card-explorer__game">Juara MOBILE LEGENDS</span>
              <span className="card-explorer__points">531 points</span>
              <a className="card-explorer__button" href="/team/raith-aurum">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="/images/default-image-reward-thumb.svg"
                alt="Team LEKTAUKO"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">LEKTAUKO</span>
              <span className="card-explorer__game">Juara DOTA 2</span>
              <span className="card-explorer__points">525 points</span>
              <a className="card-explorer__button" href="/team/lektauko">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="/images/default-image-reward-thumb.svg"
                alt="Team Devenation"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">Devenation</span>
              <span className="card-explorer__game">Juara DOTA 2</span>
              <span className="card-explorer__points">436 points</span>
              <a className="card-explorer__button" href="/team/devenation">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="https://metacoweb.s3.amazonaws.com/team/thumbs/5865df29a2e14588d7badcb12b0e63e5.jpg"
                alt="Team MANTAPKALI MONARCH"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">MANTAPKALI MONARCH</span>
              <span className="card-explorer__game">Juara FREE FIRE</span>
              <span className="card-explorer__points">405 points</span>
              <a className="card-explorer__button" href="/team/mantapkali-monarch">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="https://metacoweb.s3.amazonaws.com/team/thumbs/b649eaf20e85237415d95a39be44657f.jpg"
                alt="Team V1 NvL713 By FR"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">V1 NvL713 By FR</span>
              <span className="card-explorer__game">Juara POINT BLANK</span>
              <span className="card-explorer__points">390 points</span>
              <a className="card-explorer__button" href="/team/v1-nvl713-by-fr">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="https://metacoweb.s3.amazonaws.com/team/thumbs/18de76ad353496ac9e1c7e0808df05f2.jpg"
                alt="Team Pengebol "
                className="card-explorer__image"
              />
              <span className="card-explorer__name">Pengebol </span>
              <span className="card-explorer__game">Juara FREE FIRE</span>
              <span className="card-explorer__points">376 points</span>
              <a className="card-explorer__button" href="/team/pengebol">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="https://metacoweb.s3.amazonaws.com/team/thumbs/5eef190684bf9686d37fabafef4404ba.jpg"
                alt="Team VENDETTA"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">VENDETTA</span>
              <span className="card-explorer__game">Juara PUBGM</span>
              <span className="card-explorer__points">375 points</span>
              <a className="card-explorer__button" href="/team/vendetta">
                Lihat Profile
              </a>
            </div>
          </div>
          <div className="content__column col-6 col-md-3 col-lg-2">
            <div className="card-explorer">
              <img
                src="https://metacoweb.s3.amazonaws.com/team/thumbs/cce45947b62875d7affd9f908945ef81.jpg"
                alt="Team BDRX TCN"
                className="card-explorer__image"
              />
              <span className="card-explorer__name">BDRX TCN</span>
              <span className="card-explorer__game">Juara FREE FIRE</span>
              <span className="card-explorer__points">358 points</span>
              <a className="card-explorer__button" href="/team/bdrx-tcn">
                Lihat Profile
              </a>
            </div>
          </div>
        </div>
        <div className="content__pagination">
          <nav
            className="metaco-pagination"
            aria-label="Page navigation metaco-pagination"
          >
            <ul
              style={{ display: "flex", justifyContent: "center", flex: 1 }}
              className="pagination"
            >
              <li className="page-item disabled">
                <button className="page-link" aria-label="Previous">
                  <span aria-hidden="true">‹</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              <li className="page-item active">
                <button className="page-link">1</button>
              </li>
              <li className="page-item">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">3</button>
              </li>
              <li className="page-item">
                <button className="page-link">4</button>
              </li>
              <li className="page-item">
                <button className="page-link">5</button>
              </li>
              <li className="page-item">
                <button className="page-link" aria-label="Next">
                  <span aria-hidden="true">›</span>
                  <span className="sr-only">Next</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  )
}

export default Explorer