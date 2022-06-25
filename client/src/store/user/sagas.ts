import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
import { ApiResponse, api } from 'services/api';

import { getUser } from 'store/user/actions';
import { GET_USER } from 'store/user/actionTypes';
import { GetUser, IUser } from 'store/user/types';

const getUserApi = ({ pagination }: GetUser.RequestPayload) => {
  const params: GetUser.PaginationPayload = {}
  if (pagination?.limit) params.limit = pagination.limit
  if (pagination?.page) params.page = pagination.page
  if (pagination?.search) params.search = pagination.search
  return api.get<ApiResponse<IUser[]>>('user', { params }).then(data => data.data);
}


/*
  Worker Saga: Fired on GET_USER.REQUEST action
*/
function* getUserSaga({ payload }: GetUser.Request): Generator<
  | CallEffect<ApiResponse<IUser[]>>
  | PutEffect<GetUser.Success>
  | PutEffect<GetUser.Failure>,
  void,
  any
> {
  try {
    console.log(payload, '=== user payload')
    const response = yield call(getUserApi, payload);
    console.log(response, '=== user response')
    yield put(getUser.success({ users: response.data, pagination: response.pagination }));
  } catch (e: any) {
    yield put(getUser.failure({ error: e.message }));
  }
}

/*
  Starts worker saga on latest dispatched `GET_USER.REQUEST` action.
  Allows concurrent increments.
*/
function* userSaga() {
  yield all([takeLatest(GET_USER.REQUEST, getUserSaga)]);
}

export default userSaga;
