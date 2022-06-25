import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';

const userSelector = {
  data: createSelector((s: RootState) => s.user.data, (users) => users),
  pending: createSelector((s: RootState) => s.user.pending, (pending) => pending),
  error: createSelector((s: RootState) => s.user.error, (error) => error),
  pagination: createSelector((s: RootState) => s.user.pagination, (pagination) => pagination),
}

export default userSelector
