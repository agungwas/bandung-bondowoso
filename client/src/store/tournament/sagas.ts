import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
import { ApiResponse, api } from 'services/api';

import { fetchTournamentFailure, fetchTournamentSuccess } from 'store/tournament/actions';
import { FETCH_TOURNAMENT_REQUEST } from 'store/tournament/actionTypes';
import { FetchTournamentFailure, FetchTournamentSuccess, ITournament } from 'store/tournament/actionTypes';

const getTournaments = () =>
  api.get<ApiResponse<ITournament[]>>('tournament', {}).then(data => data.data);


/*
  Worker Saga: Fired on FETCH_TOURNAMENT_REQUEST action
*/
function* fetchTournamentSaga(): Generator<
  | CallEffect<ApiResponse<ITournament[]>>
  | PutEffect<FetchTournamentSuccess>
  | PutEffect<FetchTournamentFailure>,
  void,
  any
> {
  try {
    const response = yield call(getTournaments);
    console.log(response, 'ini response')
    yield put(
      fetchTournamentSuccess({
        tournaments: response.data,
      })
    );
  } catch (e: any) {
    console.log(e, 'ini error tournament')
    yield put(
      fetchTournamentFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TOURNAMENT_REQUEST` action.
  Allows concurrent increments.
*/
function* tournamentSaga() {
  yield all([takeLatest(FETCH_TOURNAMENT_REQUEST, fetchTournamentSaga)]);
}

export default tournamentSaga;
