import {
  ADD_LEADERBOARD,
  GET_LEADERBOARD
} from 'store/leaderboard/actionTypes';

import { LeaderboardActions, LeaderboardState } from 'store/leaderboard/types';

const initialState: LeaderboardState = {
  get: {
    loading: false,
    data: [],
    error: null,
  },
  add: {
    loading: false, 
    error: null,
    showModal: false
  }
};

const reducer = (state = initialState, action: LeaderboardActions): LeaderboardState => {
  switch (action.type) {
    case GET_LEADERBOARD.REQUEST:
      return { ...state, get: { ...state.get, loading: true }};
    case GET_LEADERBOARD.SUCCESS:
      return { ...state, get: { loading: false, data: action.payload.leaderboards, error: null }};
    case GET_LEADERBOARD.FAILURE:
      return { ...state, get: { loading: false, data: [], error: action.payload.message }};
    case ADD_LEADERBOARD.REQUEST:
      return { ...state, add: { ...state.add, loading: true }};
    case ADD_LEADERBOARD.SUCCESS:
      return { ...state, add: { loading: false, error: null, showModal: false }};
    case ADD_LEADERBOARD.FAILURE:
      return { ...state, add: { loading: false, error: action.payload.message, showModal: true }};
    case ADD_LEADERBOARD.SET_SHOW_MODAL:
      return { ...state, add: { ...state.add, showModal: action.payload }}      
    default:
      return { ...state };
  }
};

export default reducer;