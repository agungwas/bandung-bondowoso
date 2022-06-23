import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';

const teamSelector = {
  data: createSelector((s: RootState) => s.team.data, (teams) => teams),
  pending: createSelector((s: RootState) => s.team.pending, (pending) => pending),
  error: createSelector((s: RootState) => s.team.error, (error) => error),
}

export default teamSelector
