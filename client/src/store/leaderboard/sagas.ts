import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
import { ApiResponse, api } from 'services/api';

import { addLeaderboard, getLeaderboard } from 'store/leaderboard/actions';
import { ADD_LEADERBOARD, GET_LEADERBOARD } from 'store/leaderboard/actionTypes';
import { AddLeaderboard, GetLeaderboard, ILeaderboard } from 'store/leaderboard/types';

const getLeaderboardApi = (payload: GetLeaderboard.RequestPayload) =>
  api.get<ApiResponse<ILeaderboard[]>>('leaderboard', { params: payload }).then(data => data.data);

const addLeaderboardsApi = ({ team_id, position, tournament_id }: AddLeaderboard.RequestPayload) => 
  api.post<ApiResponse>('leaderboard', { team_id, position, tournament_id }).then(data => data.data)


/*
  Worker Saga: Fired on GET_LEADERBOARD_REQUEST action
*/
function* getLeaderboardSaga({ payload }: GetLeaderboard.Request): Generator<
  | CallEffect<ApiResponse<ILeaderboard[]>> 
  | PutEffect<GetLeaderboard.Success>
  | PutEffect<GetLeaderboard.Failure>,
  void,
  any
> {
  try {
    const response = yield call(getLeaderboardApi, payload);

    yield put(getLeaderboard.success({ leaderboards: response.data }));
  } catch (e: any) {
    yield put(getLeaderboard.failure({ message: e.message }));
  }
}

function* submitLeaderboardSaga({ payload }: AddLeaderboard.Request): Generator<
  | CallEffect<ApiResponse>
  | PutEffect<AddLeaderboard.Success>
  | PutEffect<AddLeaderboard.Failure>,
  void,
  any
> {
  try {
    yield call(addLeaderboardsApi, payload);

    yield put(addLeaderboard.success());
  } catch (e: any) {
    yield put(addLeaderboard.failure({ message: e.message })
    );
  }
}

/*
  Starts worker saga on latest dispatched `GET_LEADERBOARD_REQUEST` action.
  Allows concurrent increments.
*/
function* leaderboardSaga() {
  yield all([
    takeLatest(GET_LEADERBOARD.REQUEST, getLeaderboardSaga),
    takeLatest(ADD_LEADERBOARD.REQUEST, submitLeaderboardSaga)
  ]);
}

export default leaderboardSaga;
