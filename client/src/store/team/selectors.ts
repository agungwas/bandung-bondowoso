import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';

const teamSelector = {
  data: createSelector((s: RootState) => s.team.data, (teams) => teams),
  pending: createSelector((s: RootState) => s.team.pending, (pending) => pending),
  error: createSelector((s: RootState) => s.team.error, (error) => error),
  pagination: createSelector((s: RootState) => s.team.pagination, (pagination) => pagination),
  tournament_id: createSelector((s: RootState) => s.team.tournament_id, (tournament_id) => tournament_id),
}

export default teamSelector
