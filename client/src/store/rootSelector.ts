import leaderboardSelector from 'store/leaderboard/selectors';
import teamSelector from 'store/team/selectors';
import tournamentSelector from 'store/tournament/selectors';
import userSelector from 'store/user/selectors';

const selectors = {
	leaderboard: leaderboardSelector,
  team: teamSelector,
  tournament: tournamentSelector,
  user: userSelector
};

export { selectors };