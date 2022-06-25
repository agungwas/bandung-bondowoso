import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
import { ApiResponse, api } from 'services/api';

import { getTeam } from 'store/team/actions';
import { GET_TEAM } from 'store/team/actionTypes';
import { GetTeam, ITeam } from 'store/team/types';

const getTeamApi = ({ tournament_id, pagination }: GetTeam.RequestPayload) => {
  const params: GetTeam.PaginationPayload & GetTeam.RequestPayload = {}
  if (pagination?.limit) params.limit = pagination.limit
  if (pagination?.page) params.page = pagination.page
  if (pagination?.search) params.search = pagination.search
  if (tournament_id) params.tournament_id = tournament_id
  return api.get<ApiResponse<ITeam[]>>('team', { params }).then(data => data.data);
}


/*
  Worker Saga: Fired on GET_TEAM.REQUEST action
*/
function* getTeamSaga({ payload }: GetTeam.Request): Generator<
  | CallEffect<ApiResponse<ITeam[]>>
  | PutEffect<GetTeam.Success>
  | PutEffect<GetTeam.Failure>,
  void,
  any
> {
  try {
    const response = yield call(getTeamApi, payload);
    yield put(getTeam.success({ teams: response.data, pagination: response.pagination }));
  } catch (e: any) {
    yield put(getTeam.failure({ error: e.message }));
  }
}

/*
  Starts worker saga on latest dispatched `GET_TEAM.REQUEST` action.
  Allows concurrent increments.
*/
function* teamSaga() {
  yield all([takeLatest(GET_TEAM.REQUEST, getTeamSaga)]);
}

export default teamSaga;
