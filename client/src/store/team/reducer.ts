import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE,
} from 'store/team/actionTypes';

import { TeamActions, TeamState } from 'store/team/actionTypes';

const initialState: TeamState = {
  pending: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action: TeamActions) => {
  switch (action.type) {
    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.teams,
        error: null,
      };
    case FETCH_TEAM_FAILURE:
      return {
        ...state,
        pending: false,
        data: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
