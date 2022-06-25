import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [showSearch, setShowSearch] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  const componentRef = useRef<HTMLDivElement>(null);

  const openSearch: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      const newWindow = window.open('https://metaco.gg/search?keyword=' + search, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
      setSearch('')
      setShowSearch(false)
    }
  }

  function handleClickOutside(event: any) {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setShowSearch(false)
    }
  }

  useEffect(() => { 
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentRef]);

  useEffect(() => {
    setSearch('')
  }, [showSearch])

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
                <li className="nav-item"><Link to="/leaderboard" className="nav-link">Leaderboard</Link></li>
                <li className="nav-item"><Link to="/explorer" className="nav-link">Explorer</Link></li>
                <li className="nav-item"><a rel="noreferrer" target={'_blank'} href="https://metaco.gg/all-events" className="nav-link">Events</a></li>
                <li className="nav-item"><a rel="noreferrer" target={'_blank'} href="https://metaco.gg/all-articles" className="nav-link">Articles</a></li>
                <li className="nav-item"><a rel="noreferrer" target={'_blank'} href="https://metaco.gg/reward" className="nav-link">Reward</a></li>
                <li className="nav-item"><img src="https://metaco.gg/icon/ic_search.svg" alt="icon-search" className="metaco-header-search-icon" onClick={_=> setShowSearch(!showSearch)} /></li>
                <li className="nav-item"><button type="button" onClick={_ => window.open('https://metaco.gg/login' + search, '_blank', 'noopener,noreferrer')} className="_btn-signup btn btn-primary .text-decoration-none">Connect</button></li>
              </ul>
            </span>
          </div>
        </nav>
      </div>
      {showSearch && (
        <div 
          ref={componentRef}
          className="nav-search-form change fade show">
          <div>
            <input
              name="inputSearch"
              placeholder="Temukan artikel dan turnamenmu.."
              type="text"
              className="input-form-search form-control"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={openSearch}
            />
            <div className="icon-close" onClick={_=> setShowSearch(!showSearch)}>
              <img src="https://metaco.gg/icon/ic_close_button.svg" alt="close" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar
