import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';

const leaderboardSelector = {
  get: {
    loading: createSelector((s: RootState) => s.leaderboard.get.loading, (leaderboards) => leaderboards),
    data: createSelector((s: RootState) => s.leaderboard.get.data, (leaderboards) => leaderboards),
    error: createSelector((s: RootState) => s.leaderboard.get.error, (leaderboards) => leaderboards),
  },
  add: {
    loading: createSelector((s: RootState) => s.leaderboard.add.loading, (leaderboards) => leaderboards),
    error: createSelector((s: RootState) => s.leaderboard.add.error, (leaderboards) => leaderboards),
    showModal: createSelector((s: RootState) => s.leaderboard.add.showModal, (leaderboards) => leaderboards),
  },
  remove: {
    loading: createSelector((s: RootState) => s.leaderboard.remove.loading, (leaderboards) => leaderboards),
    error: createSelector((s: RootState) => s.leaderboard.remove.error, (leaderboards) => leaderboards),
    selectedId: createSelector((s: RootState) => s.leaderboard.remove.selectedId, (leaderboards) => leaderboards),
  },
  edit: {
    loading: createSelector((s: RootState) => s.leaderboard.edit.loading, (leaderboards) => leaderboards),
    error: createSelector((s: RootState) => s.leaderboard.edit.error, (leaderboards) => leaderboards),
    selected: createSelector((s: RootState) => s.leaderboard.edit.selected, (leaderboards) => leaderboards),
  }
}

export default leaderboardSelector
