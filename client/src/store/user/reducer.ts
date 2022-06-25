import {
  GET_USER
} from 'store/user/actionTypes';

import { UserActions, UserState } from 'store/user/types';

const initialState: UserState = {
  pending: false,
  data: [],
  error: null,
  pagination: {
    page: 1,
    totalPage: 0,
    totalData: 0,
    limit: 12,
    search: '',
  },
};

const reducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case GET_USER.REQUEST:
      return { ...state, pending: true };
    case GET_USER.SUCCESS:
      if (action.payload.pagination?.limit) return { ...state, pending: false, data: action.payload.users, error: null, pagination: { ...state.pagination, ...action.payload.pagination }};
      else return { ...state, pending: false, data: action.payload.users, error: null, pagination: undefined };
    case GET_USER.FAILURE:
      return { ...state, pending: false, data: [], error: action.payload.error };
    case GET_USER.SET_PAGINATION:
      if (action.payload) return { ...state, pagination: { ...state.pagination, ...action.payload }};
      else return { ...state, pagination: undefined }
    default:
      return { ...state };
  }
};

export default reducer;
