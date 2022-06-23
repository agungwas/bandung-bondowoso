import {
  FETCH_LEADERBOARD
} from 'store/leaderboard/actionTypes';

import { LeaderboardActions, LeaderboardState } from 'store/leaderboard/actionTypes';

const initialState: LeaderboardState = {
  pending: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action: LeaderboardActions) => {
  switch (action.type) {
    case FETCH_LEADERBOARD.REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LEADERBOARD.SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.leaderboards,
        error: null,
      };
    case FETCH_LEADERBOARD.FAILURE:
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
