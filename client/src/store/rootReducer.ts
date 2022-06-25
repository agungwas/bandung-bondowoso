import {combineReducers} from 'redux';
import {rootReducer} from 'store/rootSlice';
import leaderboardReducer from 'store/leaderboard/reducer';
import teamReducer from 'store/team/reducer';
import tournamentReducer from 'store/tournament/reducer';
import userReducer from 'store/user/reducer';

// TODO: SetReducers
export const reducers = combineReducers({
  root: rootReducer,
  leaderboard: leaderboardReducer,
  team: teamReducer,
  tournament: tournamentReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof reducers>;