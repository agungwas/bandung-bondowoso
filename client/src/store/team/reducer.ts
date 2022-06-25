import {
  GET_TEAM
} from 'store/team/actionTypes';

import { TeamActions, TeamState } from 'store/team/types';

const initialState: TeamState = {
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
  tournament_id: 0
};

const reducer = (state = initialState, action: TeamActions): TeamState => {
  switch (action.type) {
    case GET_TEAM.REQUEST:
      return { ...state, pending: true };
    case GET_TEAM.SUCCESS:
      if (action.payload.pagination?.limit) return { ...state, pending: false, data: action.payload.teams, error: null, pagination: { ...state.pagination, ...action.payload.pagination }};
      else return { ...state, pending: false, data: action.payload.teams, error: null, pagination: undefined };
    case GET_TEAM.FAILURE:
      return { ...state, pending: false, data: [], error: action.payload.error };
    case GET_TEAM.SET_PAGINATION:
      if (action.payload) return { ...state, pagination: { ...state.pagination, ...action.payload }};
      else return { ...state, pagination: undefined }
    default:
      return { ...state };
  }
};

export default reducer;
