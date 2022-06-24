import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';

const leaderboardSelector = {
  add: {
    loading: createSelector((s: RootState) => s.leaderboard.add.loading, (leaderboards) => leaderboards),
    error: createSelector((s: RootState) => s.leaderboard.add.error, (leaderboards) => leaderboards),
    showModal: createSelector((s: RootState) => s.leaderboard.add.showModal, (leaderboards) => leaderboards),
  },
  get: {
    loading: createSelector((s: RootState) => s.leaderboard.get.loading, (leaderboards) => leaderboards),
    data: createSelector((s: RootState) => s.leaderboard.get.data, (leaderboards) => leaderboards),
    error: createSelector((s: RootState) => s.leaderboard.get.error, (leaderboards) => leaderboards),
  }
}

export default leaderboardSelector
