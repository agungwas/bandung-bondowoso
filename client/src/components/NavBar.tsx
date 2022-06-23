import React from 'react';

export const NavBar = () => {
  return (
    <>
      <div className="header">
        <nav style={{ top: 0 }} className="navigation fixed-top navbar navbar-expand navbar-dark">
          <div className="collapse navbar-collapse">
            <ul className="mr-auto navbar-nav">
              <a href="/"> 
                <img src="https://metaco.gg/icon/logo-metaco.svg" alt="logo-metaco" className="metaco-header-logo" draggable="false" />
              </a>
            </ul>
            <span className="navbar-text">
              <ul className="mr-auto navbar-nav">
                <li className="nav-item"><a href="/all-events" className="nav-link">Events</a></li>
                <li className="nav-item"><a href="/all-articles" className="nav-link">Articles</a></li>
                <li className="nav-item"><a href="/leaderboard" className="nav-link">Leaderboard</a></li>
                <li className="nav-item"><a href="/reward" className="nav-link">Reward</a></li>
                <li className="nav-item"><img src="https://metaco.gg/icon/ic_search.svg" alt="icon-search" className="metaco-header-search-icon" /></li>
                <li className="nav-item"><button type="button" className="_btn-signup btn btn-primary">Connect</button></li>
              </ul>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
