import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';

const tournamentSelector = {
  data: createSelector((s: RootState) => s.tournament.data, (tournaments) => tournaments),
  pending: createSelector((s: RootState) => s.tournament.pending, (pending) => pending),
  error: createSelector((s: RootState) => s.tournament.error, (error) => error),
}

export default tournamentSelector
