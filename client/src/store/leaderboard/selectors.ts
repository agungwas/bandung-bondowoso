import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';

const leaderboardSelector = {
  data: createSelector((s: RootState) => s.leaderboard.data, (leaderboards) => leaderboards),
  pending: createSelector((s: RootState) => s.leaderboard.pending, (pending) => pending),
  error: createSelector((s: RootState) => s.leaderboard.error, (error) => error),
}

export default leaderboardSelector
