import Select from 'components/Select'
import { useEffect, useState } from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'hooks'
import { addLeaderboard, getLeaderboard } from 'store/leaderboard/actions'
import { selectors } from 'store/rootSelector'
import { fetchTeamRequest } from 'store/team/actions'
import { fetchTournamentRequest } from 'store/tournament/actions'

const LeaderBoardPage = () => {
  const dispatch = useDispatch()
  const dataGetLeaderboard = useSelector(selectors.leaderboard.get.data)
  const loadingGetLeaderboard = useSelector(selectors.leaderboard.get.loading)
  const loadingAddLeaderboard = useSelector(selectors.leaderboard.add.loading)
  const showModalAddLeaderboard = useSelector(selectors.leaderboard.add.showModal)
  const team = useSelector(selectors.team.data)
  const tournamentData = useSelector(selectors.tournament.data)

  const [selectedTourList, setSelectedTourList] = useState<number | 'default'>('default')
  const [teamOpt, setTeamOpt] = useState<number | 'default'>('default')
  const [tournamentOpt, setTournamentOpt] = useState<number | 'default'>('default')
  const [position, setPosition] = useState<number>(1)

  useEffect(() => {
    if (selectedTourList !== 'default' && !loadingAddLeaderboard) dispatch(getLeaderboard.request({ tournament_id: selectedTourList }))
    dispatch(fetchTournamentRequest())
  }, [dispatch, loadingAddLeaderboard, selectedTourList])

  useEffect(() => {
    if (showModalAddLeaderboard) {
      setTournamentOpt('default')
      setTeamOpt('default')
      setPosition(1)
      dispatch(fetchTeamRequest())
      dispatch(fetchTournamentRequest())
    }
  }, [showModalAddLeaderboard, dispatch])

  const addTourResult: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    dispatch(addLeaderboard.request({ position, team_id: +teamOpt || 0, tournament_id: +tournamentOpt || 0 }))

  }

  const leaderboardTable = () => {
    if (loadingGetLeaderboard) return (
      <div className="text-center">
        <Spinner
          as="span"
          animation="border"
          role="status"
          aria-hidden="true"
          style={{ width: '60px', height: '60px' }}
        />
      </div>
    )
    else if (selectedTourList === 'default') return (
      <div className="text-center">
        <h4>
          Mohon pilih tournament
        </h4>
      </div>
    ) 
    else if (!isNaN(selectedTourList) && !dataGetLeaderboard.length) return (
      <div className="text-center">
        Belum ada data di tournament ini
      </div>
    )
    else return (
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rangking</th>
            <th>Nama Tim</th>
            <th>Nama Kapten</th>
            <th>Point</th>
          </tr>
        </thead>
        <tbody>
          {dataGetLeaderboard && dataGetLeaderboard.map((el, index) => (
            <tr className={index < 3 ? "active" : undefined }>
              <td>
                { index < 3 && <img src={`https://metaco.gg/images/leaderboard/${index + 1}.png`} alt={(index + 1).toString()} /> }
                { index > 2 && index + 1} 
              </td>
              <td>
                <img
                  src={el.team?.logo}
                  alt={'logo ' + el.team?.name}
                />{" "}
                {el.team?.name}
              </td>
              <td>{el.team?.captain?.name}</td>
              <td>{el.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
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
                  </div>
                </div>
            </div>
          </div>
          <Modal
            show={showModalAddLeaderboard}
            size="lg"
            centered
            backdrop={true}
            onHide={() => dispatch(addLeaderboard.setShowModal(false))}
            backdropClassName="modal-backdrop foo-modal-backdrop in"
            onBackdropClick={() => addLeaderboard.setShowModal(false)}
          >
            <Modal.Body className='bg-dark'>
              <Form onSubmit={addTourResult}>
                  <Form.Control as="input" type='number' placeholder='Position' min={1} value={position} onChange={e => setPosition(+e.target.value)}/>
                  <Select
                    options={tournamentData.map(el => ({ id: el.id, label: el.title }))}
                    setVal={(e: any) => setTournamentOpt(+e.target.value)}
                    state={tournamentOpt}
                  />
                  <Select
                    options={team.map(el => ({ id: el.id, label: el.name }))}
                    setVal={(e: any) => setTeamOpt(+e.target.value)}
                    state={teamOpt}
                  />
                  {!loadingAddLeaderboard && <Button className='mt-3' type='submit'>Submit</Button>}
                  {loadingAddLeaderboard && (
                    <Button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>
                  )}
              </Form>
            </Modal.Body>
          </Modal>
          <div className="content">
            <div className="leaderboards">
              <div className="w-100 d-flex justify-content-between h-25 mb-3">
                <Select
                  options={tournamentData.map(el => ({ id: el.id, label: el.title }))}
                  setVal={(e: any) => setSelectedTourList(+e.target.value)}
                  state={selectedTourList}
                  placeholder="Pilih tournament"
                  className="w-25 m-0 p-0 tabs__item font-weight-bold btn btn-base btn-block mt-0"
                  style={{ height: '50px' }}
                />
                <button 
                  style={{ height: '50px' }} 
                  type="button" 
                  className={`tabs__item font-weight-bold btn btn-base btn-block mt-3 m-0 w-25 ${showModalAddLeaderboard ? 'active' : ''}`}
                  onClick={_ => dispatch(addLeaderboard.setShowModal(true))}
                >Add Result</button>
              </div>
              {leaderboardTable()}
            </div>
          </div>
      </div>
      <div style={{ position: 'relative', cursor: 'pointer' }} >
        <img src="https://metaco.gg/images/footer-banner.png" style={{ width: '100%', borderRadius: 'unset' }} alt='banner' />
        <div style={{ position: 'absolute', top: '40%', left: '35%' }} >
          <h1 style={{ textAlign: 'center', color: '#fff' }} >
            Find Latest Esport Event<br /> on Metaco
          </h1>
        </div>
      </div>
    </div>
  )
} 

export default LeaderBoardPage