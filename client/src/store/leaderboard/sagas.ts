import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
import { ApiResponse, api } from 'services/api';

import { fetchLeaderboard } from 'store/leaderboard/actions';
import { FetchLeaderboard, FETCH_LEADERBOARD, ILeaderboard } from 'store/leaderboard/actionTypes';

const getLeaderboards = () =>
  api.get<ApiResponse<ILeaderboard[]>>('leaderboard', {}).then(data => data.data);

/*
  Worker Saga: Fired on FETCH_LEADERBOARD_REQUEST action
*/
function* fetchLeaderboardSaga(): Generator<
  | CallEffect<ApiResponse<ILeaderboard[]>>
  | PutEffect<FetchLeaderboard.Success>
  | PutEffect<FetchLeaderboard.Failure>,
  void,
  any
> {
  try {
    const response = yield call(getLeaderboards);
    yield put(
      fetchLeaderboard.success({
        leaderboards: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchLeaderboard.failure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_LEADERBOARD_REQUEST` action.
  Allows concurrent increments.
*/
function* leaderboardSaga() {
  yield all([takeLatest(FETCH_LEADERBOARD.REQUEST, fetchLeaderboardSaga)]);
}

export default leaderboardSaga;
