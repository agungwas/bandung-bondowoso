import Select from 'components/Select'
import { useDispatch, useSelector } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { selectors } from 'store/rootSelector'
import { getTeam } from 'store/team/actions'
import { getUser } from 'store/user/actions'

const Explorer = () => {
  const dispatch = useDispatch()
  const [tab, setTab] = useState<'Team' | 'Player'>('Team')
  const dataGetTeam = useSelector(selectors.team.data)
  const paginationGetTeam = useSelector(selectors.team.pagination)
  const dataGetUser = useSelector(selectors.user.data)
  const paginationGetUser = useSelector(selectors.user.pagination)

  const pagination = () => tab === 'Team' ? paginationGetTeam : paginationGetUser
  const data: any = () => tab === 'Team' ? dataGetTeam : dataGetUser
  const action = () => tab === 'Team' ? getTeam : getUser

  const setLimit: React.ChangeEventHandler<HTMLSelectElement> = e => {
    dispatch(action().request({ pagination: { ...pagination(), limit: +e.target.value, page: 1 }})) 
  }

  const clearPagination = () => {
    dispatch(action().setPagination({ search: '' }))
    dispatch(action().request({ pagination: { limit: 12 }}))
  }

  useEffect(() => {
    dispatch(action().setPagination({ search: '' }))
    dispatch(action().request({ pagination: { limit: 12 }}))
  }, [tab])

  useEffect(() => {
    dispatch(getTeam.request({ pagination: { limit: pagination()?.limit || 12 }}))

    return () => {
      dispatch(getTeam.failure({ error: '' }))
    }
  }, [dispatch])

  const toPage = (page: number) => {
    dispatch(action().request({ pagination: { ...pagination(), page }}))
  }


  return (
    <div className="explorer">
      <div className="breadcrumb container">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
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
                    value={pagination()?.search}
                    onChange={e => dispatch(action().setPagination({ search: e.target.value }))}
                    onKeyDownCapture={e => e.key === 'Enter' && dispatch(action().request({ pagination: pagination() }))}
                  />
                  <div className="input-group-append">
                    <span className="text-input-search input-group-text" onClick={_=> dispatch(getTeam.request({ pagination: pagination() }))}>
                      <img src="https://metaco.gg/icon/ui/search.png" alt="search icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <Select
                options={[{ id: 6, label: 'Tampilkan: 6 Data' }, { id: 12, label: 'Tampilkan: 12 Data' }, { id: 18, label: 'Tampilkan: 18 Data' }]}
                state={pagination()?.limit || 0}
                setVal={setLimit}
                disableFirstOption
                className="form-group mt-0"
                style={{ width: '100%' }}
              />
            </div>
            <div className="col-md-1">
              <button type="button" className="text-input-search btn btn-secondary" onClick={clearPagination}>
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="explorer__tabs">
          <div className="explorer__list row">
            <div className="col-2">
              <button
                onClick={_=> setTab('Team')}
                type="button"
                className={"tabs__item font-weight-bold btn btn-base btn-block " + (tab === 'Team' && 'active')}
              >
                Team
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={_=> setTab('Player')}
                type="button"
                className={"tabs__item font-weight-bold btn btn-base btn-block " + (tab === 'Player' && 'active')}
              >
                Player
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="explorer__content container">
        <div className="content__count">Hasil : {pagination()?.totalData} {tab === 'Team' ? 'Tim' : 'Player'}</div>
        <div className="content__row row">
          {data().map((el: any, index: number) => (
            <div className="content__column col-6 col-md-3 col-lg-2" key={index}>
              <div className="card-explorer">
                <img
                  src={tab === 'Team' ? el.logo : (el.picture ? el.picture : 'https://metaco.gg/images/default-image-reward-thumb.svg')}
                  alt={"logo " + el.name}
                  className="card-explorer__image"
                />
                <span className="card-explorer__name">{el.name}</span>
                {tab === 'Team' && (
                  <React.Fragment>
                    <span className="card-explorer__game">{el.tournament_name}</span>
                    <span className="card-explorer__points">{el.point || 0} points</span>
                  </React.Fragment>
                )}
                <a className="card-explorer__button" target="_blank" rel="noreferrer" href={`https://metaco.gg/${tab === 'Team' ? 'team' : 'profile'}/` + el.name.toLowerCase().split(' ').join('-')}>
                  Lihat Profile
                </a>
              </div>
            </div>
          ))}
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
              <li className={"page-item " + (pagination()?.page === 1 && 'disabled')}>
                <button className="page-link" aria-label="Previous" onClick={_=> toPage(pagination()?.page as number - 1)}>
                  <span aria-hidden="true">‹</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              {pagination()?.totalPage && Array.from({ length: pagination()?.totalPage as number}, (x, i) => i).map(el => (
                <li className={"page-item " + (pagination()?.page === el + 1 && 'active')} onClick={_ => toPage(el + 1)}>
                  <button className="page-link">{el + 1}</button>
                </li>
              ))}
              <li className={"page-item " + (pagination()?.totalPage === pagination()?.page && 'disabled')}>
                <button className="page-link" aria-label="Next" onClick={_=> toPage(pagination()?.page as number + 1)}>
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