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
  // .header nav.navigation.fixed-top.change.navbar.navbar-expand.navbar-dark, .header nav.navigation.fixed-top.navbar.navbar-expand
  // return (
  //   <nav className="navigation fixed-top navbar navbar-expand navbar-dark">
  //     <div className="container-fluid">
  //       <a className="navbar-brand" href="#">Navbar</a>
  //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //           <li className="nav-item">
  //             <a className="nav-link active" aria-current="page" href="#">Home</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#">Link</a>
  //           </li>
  //           <li className="nav-item dropdown">
  //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //               Dropdown
  //             </a>
  //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
  //               <li><a className="dropdown-item" href="#">Action</a></li>
  //               <li><a className="dropdown-item" href="#">Another action</a></li>
  //               <li><hr className="dropdown-divider" /></li>
  //               <li><a className="dropdown-item" href="#">Something else here</a></li>
  //             </ul>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link disabled">Disabled</a>
  //           </li>
  //         </ul>
  //         <form className="d-flex" role="search">
  //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  //           <button className="btn btn-outline-success" type="submit">Search</button>
  //         </form>
  //       </div>
  //     </div>
  //   </nav>
  // )
}
