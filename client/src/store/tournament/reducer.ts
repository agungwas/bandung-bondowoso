import {
  FETCH_TOURNAMENT_REQUEST,
  FETCH_TOURNAMENT_SUCCESS,
  FETCH_TOURNAMENT_FAILURE,
} from 'store/tournament/actionTypes';

import { TournamentActions, TournamentState } from 'store/tournament/actionTypes';

const initialState: TournamentState = {
  pending: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action: TournamentActions) => {
  switch (action.type) {
    case FETCH_TOURNAMENT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TOURNAMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.tournaments,
        error: null,
      };
    case FETCH_TOURNAMENT_FAILURE:
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
