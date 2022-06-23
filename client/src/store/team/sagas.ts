import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
import { ApiResponse, api } from 'services/api';

import { fetchTeamFailure, fetchTeamSuccess } from 'store/team/actions';
import { FETCH_TEAM_REQUEST } from 'store/team/actionTypes';
import { FetchTeamFailure, FetchTeamSuccess, ITeam } from 'store/team/actionTypes';

const getTeams = () =>
  api.get<ApiResponse<ITeam[]>>('team', {}).then(data => data.data);


/*
  Worker Saga: Fired on FETCH_TEAM_REQUEST action
*/
function* fetchTeamSaga(): Generator<
  | CallEffect<ApiResponse<ITeam[]>>
  | PutEffect<FetchTeamSuccess>
  | PutEffect<FetchTeamFailure>,
  void,
  any
> {
  try {
    const response = yield call(getTeams);
    yield put(
      fetchTeamSuccess({
        teams: response.data,
      })
    );
  } catch (e: any) {
    console.log(e, 'ini error team')
    yield put(
      fetchTeamFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TEAM_REQUEST` action.
  Allows concurrent increments.
*/
function* teamSaga() {
  yield all([takeLatest(FETCH_TEAM_REQUEST, fetchTeamSaga)]);
}

export default teamSaga;
