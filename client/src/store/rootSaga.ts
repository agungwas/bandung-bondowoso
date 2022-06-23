import {all, fork} from 'redux-saga/effects';
import leaderboardSaga from 'store/leaderboard/sagas';
import teamSaga from 'store/team/sagas';
import tournamentSaga from 'store/tournament/sagas';

export function* rootSaga() {
    yield all([
      fork(leaderboardSaga),
      fork(teamSaga),
      fork(tournamentSaga)
    ]);
}