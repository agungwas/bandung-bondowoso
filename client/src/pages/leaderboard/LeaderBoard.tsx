import Select from 'components/Select'
import { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLeaderboard } from 'store/leaderboard/actions'
import { selectors } from 'store/rootSelector'
import { fetchTeamRequest } from 'store/team/actions'
import { fetchTournamentRequest } from 'store/tournament/actions'

export const LeaderBoardPage = () => {
  const dispatch = useDispatch()
  const leaderboard = useSelector(selectors.leaderboard.data);
  const team = useSelector(selectors.team.data)
  const tournament = useSelector(selectors.tournament.data)
  const [showAddModal, setShowAddModal] = useState<boolean>(false)
  const [teamOpt, setTeamOpt] = useState<number | 'default'>('default')
  const [tournamentOpt, setTournamentOpt] = useState<number | 'default'>('default')

  console.log(leaderboard, 'leaderboard')
  useEffect(() => {
    dispatch(fetchLeaderboard.request())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchTeamRequest())
    dispatch(fetchTournamentRequest())
  }, [showAddModal, dispatch])

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
            show={showAddModal}
            size="lg"
            centered
            backdrop={true}
            onHide={() => setShowAddModal(false)}
            backdropClassName="modal-backdrop foo-modal-backdrop in"
            onBackdropClick={() => setShowAddModal(false)}
          >
            {/* <Modal.Header closeButton closeVariant='white' closeLabel='X'>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className='bg-dark'>
              <Form>
                  <Form.Control as="input" type='number' placeholder='Position'/>
                  <Select
                    options={tournament.map(el => ({ id: el.id, label: el.title }))}
                    setVal={(e: any) => setTournamentOpt(+e.target.value)}
                    state={tournamentOpt}
                  />
                  <Select
                    options={team.map(el => ({ id: el.id, label: el.name }))}
                    setVal={(e: any) => setTeamOpt(+e.target.value)}
                    state={teamOpt}
                  />
                  <Button className='mt-3'>
                    Submit
                  </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <div className="content">
            <div className="leaderboards">
              <button type="button" className="_btn-signup btn btn-success mb-3" onClick={_ => setShowAddModal(true)}>Add Result</button>
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
                  {leaderboard && leaderboard.map((el, index) => (
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