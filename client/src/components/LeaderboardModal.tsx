import { useDispatch } from 'hooks'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import Select from 'components/Select'
import { LeaderboardActions } from 'store/leaderboard/types';
import { ITeam, TeamActions } from 'store/team/actionTypes';
import { ITournament, TournamentActions } from 'store/tournament/actionTypes';


type ModalProps = {
  show: boolean;
  hideFunc: LeaderboardActions | TeamActions | TournamentActions;
  submitAction: LeaderboardActions | TeamActions | TournamentActions;
  loadingSubmit: boolean;
  position: number;
  setPosition: (e: number) => void;
  tournamentOpt: number | 'default';
  setTournamentOpt: (e: number) => void;
  teamOpt: number | 'default';
  setTeamOpt: (e: number) => void;
  tournamentData: ITournament[];
  teamData: ITeam[];
}


const LeaderboardModal: React.FC<ModalProps> = ({
  show,
  hideFunc,
  submitAction,
  loadingSubmit,
  position,
  setPosition,
  tournamentOpt,
  setTournamentOpt,
  teamOpt,
  setTeamOpt,
  tournamentData,
  teamData
}) => {
  const dispatch = useDispatch()

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    dispatch(submitAction)
  }

  const hideModal = () => dispatch(hideFunc)

  return (
    <Modal
      show={show}
      size="lg"
      centered
      backdrop={true}
      onHide={hideModal}
      backdropClassName="modal-backdrop foo-modal-backdrop in"
      onBackdropClick={hideModal}
    >
      <Modal.Body className='bg-dark'>
        <Form onSubmit={submit}>
            <Form.Control as="input" type='number' placeholder='Position' min={1} value={position} onChange={e => setPosition(+e.target.value)}/>
            <Select
              options={tournamentData.map(el => ({ id: el.id, label: el.title }))}
              setVal={(e: any) => setTournamentOpt(+e.target.value)}
              state={tournamentOpt}
            />
            <Select
              options={teamData.map(el => ({ id: el.id, label: el.name }))}
              setVal={(e: any) => setTeamOpt(+e.target.value)}
              state={teamOpt}
            />
            {!loadingSubmit && <Button className='mt-3' type='submit'>Submit</Button>}
            {loadingSubmit && (
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
  )
}

export default LeaderboardModal